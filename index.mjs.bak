import { loadStdlib } from "@reach-sh/stdlib";
import * as backend from "./build/index.main.mjs";
const stdlib = loadStdlib(process.env);

// format the outcome
const pretty = (r) => {
  if (!r) {
    return r;
  } else if (typeof r === "string") {
    return r;
  } else if (r._isBigNumber) {
    return r.toString();
  } else if (r.networkAccount) {
    if (r.networkAccount.addr) {
      return r.networkAccount.addr.slice(0, 8);
    } else if (r.networkAccount.address) {
      return r.networkAccount.address.slice(0, 8);
    } else {
      return "<some acc>";
    }
  } else if (Array.isArray(r) && r[0] == "Some") {
    return pretty(r[1]);
  } else if (Array.isArray(r)) {
    return r.map((x) => pretty(x));
  } else if (Object.keys(r).length > 0) {
    const o = {};
    for (const k in r) {
      o[k] = pretty(r[k]);
    }
    return o;
  } else if (r.toString) {
    return r.toString();
  } else {
    return r;
  }
};

// get the balance of specific token
const btok = async (acc, tok) => {
  try {
    return await stdlib.balanceOf(acc, tok.id);
  } catch (e) {
    console.warn(e);
    return 0;
  }
};

// getting users token balance and print to the console
const balances = async (accs, token) => {
  const t = [];
  let totStk = 0;
  for (const acc of accs) {
    const addr = stdlib.formatAddress(acc).slice(0, 8);
    const stk = Number(await btok(acc, token));
    totStk = totStk + stk;
    t.push({ addr, stk });
  }
  t.push({ addr: "total", stk: totStk });
  console.table(t);
};

(async () => {
  console.log("creating accounts");
  const startingBalance = stdlib.parseCurrency(100);
  const accAdmin = await stdlib.newTestAccount(startingBalance);
  const accDeployer = await stdlib.newTestAccount(startingBalance);
  const accCustomers = await stdlib.newTestAccounts(2, startingBalance);
  console.log("Hello, cutomers!");

  console.log("launching tokens");
  const INS = await stdlib.launchToken(accAdmin, "insurance", "INS");
  console.log(`INS.id: ${INS.id}`);
  for (const acc of [accDeployer, ...accCustomers]) {
    await acc.tokenAccept(INS.id);
  }

  console.log("minting");
  await INS.mint(accDeployer, 3000);
  for (const acc of [accDeployer, ...accCustomers]) {
    await INS.mint(acc, 100);
  }

  // let resolveReadyForStakers = null;
  // const pReadyForStakers = new Promise((r) => (resolveReadyForStakers = r));

  console.log("Launching...");
  const ctcDeployer = accDeployer.contract(backend);
  // const ctcCustomers = accCustomers.map((acc) => {
  //   acc.contract(backend, ctcDeployer.getInfo());
  // });
  const ctcCustomer_1 = accCustomers[0].contract(
    backend,
    ctcDeployer.getInfo()
  );
  const ctcCustomer_2 = accCustomers[1].contract(
    backend,
    ctcDeployer.getInfo()
  );
  const ctcCustomers = [ctcCustomer_1, ctcCustomer_2];
  console.log(`Running deployer`);

  const pDeployer = ctcDeployer.p.Deployer({
    opts: {
      acceptedToken: INS.id,
      claimsBalance: 3000,
      contractIsRunning: true,
    },
    log: console.log,
    // readyForStakers: () => resolveReadyForStakers(),
  });
  const info = await ctcDeployer.getInfo();
  console.log(`ctc deployed ${info}`);

  // await pReadyForStakers;
  // console.log(`ready for stakers`);

  await ctcCustomers[0];
  console.log(`ctc: ${JSON.stringify(ctcCustomers)} ${ctcCustomers[0]} `);

  await balances([accDeployer, ...accCustomers], INS);

  const tryFn = async (label, f, ...args) => {
    const maxTries = 3;
    let tries = 1;
    const msg = () =>
      `${label} ${JSON.stringify(pretty(args))} after trying ${tries} time(s)`;
    let err = null;
    while (tries < maxTries) {
      try {
        const r = await f(...args);
        if (r) {
          console.log("Returned object: ", pretty(r));
        }
        console.log(msg());
        return r;
      } catch (e) {
        err = e;
        tries++;
      }
    }
    console.error(`Failed: ${msg()}`);
    throw err;
  };

  const tryApi = async (fname, verbed, i, ...args) => {
    try {
      await tryFn(
        `Customer #${i} ${verbed}`,
        ctcCustomers[i].apis.Customer[fname],
        ...args
      );
    } catch (err) {
      console.log(
        `Failed at calling function ${fname} because of ${err.message}`
      );
    }
  };

  const tryPay = async (i, durationIndex, amt, period) => {
    await tryApi("pay", "pays", i, durationIndex, amt, period);
    // console.log(`${i}. pay successfully at ${pay_1.start} with amount ${pay_1.cost}, covering for ${pay_1.insurPeriod}`)
  };

  const tryClaim = async (i, amt) => {
    await tryApi("claim", "cliams", i, amt);
    // console.log(`${i}. claim successfully with amount ${claim_1}`);
  };

  const tryApprove = async (index, amt) => {
    try {
      const res = await ctcDeployer.apis.InsureCompany.approveRequest(
        index,
        amt
      );
      console.log(`Successfully aprrove ${res}`);
    } catch (err) {
      console.log(`Failed at calling function approveRequest`);
    }
  };

  await tryPay(0, 0, 5, 30);
  // try to fail
  // await stdlib.wait(500);
  await tryPay(1, 1, 16, 91);
  await balances([accDeployer, ...accCustomers], INS);

  // await stdlib.wait(10);
  console.log(`Network time: ${await stdlib.getNetworkSecs()}`);
  await tryClaim(0, 6);
  await tryApprove(0, 6);
  await balances([accDeployer, ...accCustomers], INS);

  await pDeployer;
})();
