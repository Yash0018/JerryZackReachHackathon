"reach 0.1";

const SignedContract = Struct([
  ["id", UInt],
  ["cost", UInt],
  ["insurPeriod", UInt],
  ["start", UInt],
  ["isEnded", Bool],
  ["isClaimed", Bool],
  ["isApproved", Bool],
  ["insurProceed", UInt],
]);

const ProvidedContract = Struct([
  // ["contractId", UInt],
  ["cost", UInt],
  ["insurPeriod", UInt],
  ["insurProceed", UInt],
  ["usageCount", UInt],
]);

const Opts = Struct([["acceptedToken", Token]]);

export const main = Reach.App(() => {
  const Deployer = Participant("Deployer", {
    opts: Opts,
    approve: Fun([], Bool),
  });
  const Customer = API("Customer", {
    pay: Fun([UInt, UInt], SignedContract),
    claim: Fun([UInt], UInt),
  });
  const V = View("View", {
    done: Bool,
  });
  init();

  Deployer.only(() => {
    const opts = declassify(interact.opts);
    const { acceptedToken } = opts;
  });
  Deployer.publish(opts, acceptedToken);
  commit();

  Deployer.pay([[0, acceptedToken]]);
  const providedContract_1 = ProvidedContract.fromObject({
    cost: 5,
    insurPeriod: 30,
    insurProceed: 5,
    usageCount: 0,
  });
  // const providedContracts = new Map(UInt, ProvidedContract);
  const signedContracts = new Map(SignedContract);

  //array(SignedContract, []),
  const [done] = parallelReduce([false])
    .define(() => {
      const lct = lastConsensusTime();
      V.done.set(done);
    })
    .invariant(true)
    .paySpec([acceptedToken])
    .while(!done)
    .api(
      Customer.pay,
      (amt, period) =>
        assume(
          amt >= providedContract_1.cost &&
            period >= providedContract_1.insurPeriod
        ),
      (amt, period) => [0, [amt, acceptedToken]],
      (amt, period, k) => {
        const newContract = SignedContract.fromObject({
          id: 1,
          cost: amt,
          insurPeriod: period,
          start: lct,
          isEnded: false,
          isClaimed: false,
          isApproved: false,
          insurProceed: 0,
        });
        signedContracts[this] = newContract;
        k(newContract);
        return [done];
      }
    )
    .api(
      Customer.claim,
      (_) => [0, [0, acceptedToken]],
      (id, k) => {
        k(1);
        return [done];
      }
    );
  commit();

  fork().case(
    Deployer,
    () => ({}),
    (_) => 0,
    () => {}
  );
  transfer([[balance(acceptedToken), acceptedToken]]).to(Deployer);
  transfer(balance()).to(Deployer);
  commit();
  exit();
});
