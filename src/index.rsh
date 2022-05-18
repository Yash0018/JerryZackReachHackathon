"reach 0.1";

const SignedContract = Struct([
  ["cost", UInt],
  ["insurPeriod", UInt],
  ["start", UInt],
]);

const Opts = Struct([
  ["claimsBalance", UInt],
  ["acceptedToken", Token],
  ["contractIsRunning", Bool],
]);

export const main = Reach.App(() => {
  const Deployer = Participant("Deployer", {
    opts: Opts,
    stopContract: Fun([], Null),
    log: Fun(true, Null),
  });
  const InsureCompany = API("InsureCompany", {
    approveRequest: Fun([UInt, UInt], Bool),
    declineRequest: Fun([UInt], Bool),
  });
  const Customer = API("Customer", {
    pay: Fun([UInt, UInt, UInt], SignedContract),
    claim: Fun([UInt], UInt),
  });
  const V = View("View", {
    durations: Array(UInt, 3),
    correspondingPrice: Array(UInt, 3),
    claimersCount: UInt,
    claimers: Array(Address, 3),
    userCurrCost: Fun([Address], UInt),
    userCurrStart: Fun([Address], UInt),
    userCurrPeriod: Fun([Address], UInt),
    userCurrRequestedProceed: Fun([Address], UInt),
    lastClaimResult: Fun([Address], Bool),
    userCost: Fun([Address], UInt),
  });
  init();

  Deployer.only(() => {
    const opts = declassify(interact.opts);
    const { acceptedToken, claimsBalance, contractIsRunning } = opts;
  });
  Deployer.publish(opts, acceptedToken, claimsBalance, contractIsRunning);
  commit();

  Deployer.pay([0, [claimsBalance, acceptedToken]]);

  const userCurrStart = new Map(UInt);
  const userCurrPeriod = new Map(UInt);
  const userCurrCost = new Map(UInt);
  const userCurrRequestedProceed = new Map(UInt);
  const lastClaimResult = new Map(Bool);
  const userCost = new Map(UInt);
  const userInsureProceed = new Map(UInt);
  //keep a list of all customers' and claimers' Addresses,
  const customers = new Set();
  const claimersAddresses = new Set();

  const lookupUserCost = (addr) => fromSome(userCost[addr], 0);
  const lookupUserCurrCost = (addr) => fromSome(userCurrCost[addr], 0);
  const lookupUserCurrStart = (addr) => fromSome(userCurrStart[addr], 0);
  const lookupUserCurrPeriod = (addr) => fromSome(userCurrPeriod[addr], 0);
  const lookupUserCurrRqtProceed = (addr) =>
    fromSome(userCurrRequestedProceed[addr], 0);
  const lookupLastClaimResult = (addr) =>
    fromSome(lastClaimResult[addr], false);
  V.userCost.set(lookupUserCost);
  V.userCurrCost.set(lookupUserCurrCost);
  V.userCurrStart.set(lookupUserCurrStart);
  V.userCurrPeriod.set(lookupUserCurrPeriod);
  V.userCurrRequestedProceed.set(lookupUserCurrRqtProceed);
  V.lastClaimResult.set(lookupLastClaimResult);

  const [
    durations,
    correspondingPrice,
    totalCost,
    remainingClaimsBalance,
    claimsCount,
    claimersCount,
    claimers,
  ] = parallelReduce([
    // 3 mins; 6 mins; 12 mins;
    array(UInt, [180, 360, 720]),
    array(UInt, [5, 15, 20]),
    0,
    claimsBalance,
    0,
    0,
    Array.replicate(3, Deployer),
  ])
    .define(() => {
      const tcs = thisConsensusSecs();
      V.durations.set(durations);
      V.correspondingPrice.set(correspondingPrice);
      V.claimersCount.set(claimersCount);
      V.claimers.set(claimers);
    })
    .invariant(
      claimsCount >= claimersAddresses.Map.size() &&
        claimersCount <= claimers.length &&
        balance(acceptedToken) == totalCost + remainingClaimsBalance &&
        balance() == 0
    )
    .paySpec([acceptedToken])
    .while(contractIsRunning)
    .api(
      Customer.pay,
      (durationIndex, amt, period) => {
        assume(
          durationIndex < durations.length &&
            amt >= correspondingPrice[durationIndex] &&
            period >= durations[durationIndex],
          "Check doesn't pass"
        );
        assume(
          lookupUserCurrStart(this) + lookupUserCurrPeriod(this) < tcs,
          "You have subsribed one of the products"
        );
      },
      (durationIndex, amt, period) => [0, [amt, acceptedToken]],
      (durationIndex, amt, period, k) => {
        Deployer.interact.log("Backend: start subscrbing a contract");
        if (!customers.member(this)) {
          customers.insert(this);
        }

        const newContract = SignedContract.fromObject({
          cost: amt,
          insurPeriod: period,
          start: tcs,
        });
        userCurrStart[this] = tcs;
        userCurrPeriod[this] = period;
        userCurrCost[this] = amt;
        userCost[this] = fromSome(userCost[this], 0) + amt;
        k(newContract);
        return [
          durations,
          correspondingPrice,
          totalCost + amt,
          remainingClaimsBalance,
          claimsCount,
          claimersCount,
          claimers,
        ];
      }
    )
    .api(
      Customer.claim,
      (_) => {
        assume(
          claimersCount < claimers.length,
          "Wait for the admin to process other cliams"
        );
        assume(
          thisConsensusSecs() <=
            fromSome(userCurrPeriod[this], 0) +
              fromSome(userCurrStart[this], 0),
          "Your insure period has passed"
        );
      },
      (_) => [0, [0, acceptedToken]],
      (amt, k) => {
        Deployer.interact.log("Backend: start claiming");
        if (!claimersAddresses.member(this)) {
          claimersAddresses.insert(this);
        }
        if (claimersCount < claimers.length) {
          userCurrRequestedProceed[this] = amt;
          const newClaimers = claimers.set(claimersCount, this);
          k(amt);
          return [
            durations,
            correspondingPrice,
            totalCost,
            remainingClaimsBalance,
            claimsCount + 1,
            claimersCount + 1,
            newClaimers,
          ];
        } else {
          k(0);
          return [
            durations,
            correspondingPrice,
            totalCost,
            remainingClaimsBalance,
            claimsCount + 1,
            claimersCount,
            claimers,
          ];
        }
      }
    )
    .api(
      InsureCompany.approveRequest,
      (index, amt) => {
        assume(
          index < claimersCount,
          "Index should not be greated than the number of claimers"
        );
        assume(Deployer == this, "Only admin is allowed to approve");
        assume(
          amt <= remainingClaimsBalance,
          "Amount cannot exceed the remainning balance"
        );
      },
      (index, amt) => [0, [0, acceptedToken]],
      (index, amt, k) => {
        Deployer.interact.log("Backend: start arpproving");
        if (index < claimers.length) {
          const claimer = claimers[index];
          // claiming amount should less than 2, 3, 4 times of cost
          if (
            (lookupUserCurrRqtProceed(claimer) < durations[1] &&
              amt <= 2 * fromSome(userCurrCost[claimer], 1)) ||
            (lookupUserCurrRqtProceed(claimer) > durations[1] &&
              fromSome(userCurrPeriod[claimer], 0) < durations[2] &&
              amt <= 3 * fromSome(userCurrCost[claimer], 1)) ||
            (lookupUserCurrRqtProceed(claimer) >= durations[2] &&
              amt <= 4 * fromSome(userCurrCost[claimer], 1))
          ) {
            userCurrCost[claimer] = 0;
            userCurrStart[claimer] = 0;
            userCurrPeriod[claimer] = 0;
            userCurrRequestedProceed[claimer] = 0;
            lastClaimResult[claimer] = true;
            userInsureProceed[claimer] =
              fromSome(userInsureProceed[claimer], 0) + amt;
            const newClaimers = claimers.set(index, Deployer);
            claimersAddresses.remove(claimer);
            const newRemainingBalance = remainingClaimsBalance - amt;
            transfer([0, [amt, acceptedToken]]).to(claimer);
            k(true);
            return [
              durations,
              correspondingPrice,
              totalCost,
              newRemainingBalance,
              claimsCount,
              claimersCount - 1,
              newClaimers,
            ];
          } else {
            k(false);
            return [
              durations,
              correspondingPrice,
              totalCost,
              remainingClaimsBalance,
              claimsCount,
              claimersCount,
              claimers,
            ];
          }
        } else {
          k(false);
          return [
            durations,
            correspondingPrice,
            totalCost,
            remainingClaimsBalance,
            claimsCount,
            claimersCount,
            claimers,
          ];
        }
      }
    )
    .api(
      InsureCompany.declineRequest,
      (index) => {
        assume(
          index < claimersCount,
          "Index should not be greated than the number of claimers"
        );
        assume(Deployer == this, "Only admin is allowed to approve");
      },
      (index) => [0, [0, acceptedToken]],
      (index, k) => {
        if (index < claimers.length) {
          const claimer = claimers[index];
          userCurrCost[claimer] = 0;
          userCurrStart[claimer] = 0;
          userCurrPeriod[claimer] = 0;
          userCurrRequestedProceed[claimer] = 0;
          lastClaimResult[claimer] = false;
          const newClaimers = claimers.set(index, Deployer);
          k(true);
          return [
            durations,
            correspondingPrice,
            totalCost,
            remainingClaimsBalance,
            claimsCount,
            claimersCount - 1,
            newClaimers,
          ];
        } else {
          k(false);
          return [
            durations,
            correspondingPrice,
            totalCost,
            remainingClaimsBalance,
            claimsCount,
            claimersCount,
            claimers,
          ];
        }
      }
    );

  transfer([[balance(acceptedToken), acceptedToken]]).to(Deployer);
  transfer(balance()).to(Deployer);
  commit();

  exit();
});
