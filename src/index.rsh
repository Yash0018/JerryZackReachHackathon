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
  const userCost = new Map(UInt);
  const userInsureProceed = new Map(UInt);
  //keep a list of all customers' and claimers' Addresses,
  const customers = new Set();
  const claimersAddresses = new Set();

  const [
    durations,
    correspondingPrice,
    totalCost,
    remainingClaimsBalance,
    claimsCount,
    claimersCount,
    claimers,
  ] = parallelReduce([
    array(UInt, [30, 90, 120]),
    array(UInt, [5, 15, 20]),
    0,
    claimsBalance,
    0,
    0,
    Array.replicate(3, Deployer),
  ])
    .define(() => {
      const lcs = lastConsensusSecs();
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
      (durationIndex, amt, period) =>
        assume(
          durationIndex < durations.length &&
            amt >= correspondingPrice[durationIndex] &&
            period >= durations[durationIndex],
          "Check doesn't pass"
        ),
      (durationIndex, amt, period) => [0, [amt, acceptedToken]],
      (durationIndex, amt, period, k) => {
        Deployer.interact.log("Backend: start subscrbing a contract");
        if (!customers.member(this)) {
          customers.insert(this);
        }

        if (fromSome(userCurrStart[this], 0) != 0) {
          k(
            SignedContract.fromObject({
              cost: fromSome(userCurrCost[this], 0),
              insurPeriod: fromSome(userCurrPeriod[this], 0),
              start: fromSome(userCurrStart[this], 0),
            })
          );
        } else {
          const newContract = SignedContract.fromObject({
            cost: amt,
            insurPeriod: period,
            start: lcs,
          });
          userCurrStart[this] = lcs;
          userCurrPeriod[this] = period;
          userCurrCost[this] = amt;
          userCost[this] = fromSome(userCost[this], 0) + amt;
          k(newContract);
        }
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
          lastConsensusSecs() <=
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
            (fromSome(userCurrPeriod[claimer], 0) < durations[1] &&
              amt <= 2 * fromSome(userCurrCost[claimer], 1)) ||
            (fromSome(userCurrPeriod[claimer], 0) > durations[1] &&
              fromSome(userCurrPeriod[claimer], 0) < durations[2] &&
              amt <= 3 * fromSome(userCurrCost[claimer], 1)) ||
            (fromSome(userCurrPeriod[claimer], 0) >= durations[2] &&
              amt <= 4 * fromSome(userCurrCost[claimer], 1))
          ) {
            userCurrRequestedProceed[claimer] = 0;
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
    );

  transfer([[balance(acceptedToken), acceptedToken]]).to(Deployer);
  transfer(balance()).to(Deployer);
  commit();

  exit();
});
