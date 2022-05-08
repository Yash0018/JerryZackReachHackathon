import { loadStdlib } from "@reach-sh/stdlib";
import * as backend from "./build/index.main.mjs";
const stdlib = loadStdlib(process.env);

const startingBalance = stdlib.parseCurrency(100);

const [accAdmin, accCustomer_1, accCustomer_2] = await stdlib.newTestAccounts(
  3,
  startingBalance
);
console.log("Hello, Jerry and Zack!");

console.log("launching tokens");
const INS = await stdlib.launchToken(accAdmin, "insurance", "INS");
console.log(`INS.id: ${INS.id}`);
for (const acc of [accAdmin, accCustomer_1, accCustomer_2]) {
  await acc.tokenAccept(INS.id);
}

console.log("minting");
await INS.mint(accAdmin, 10);
await INS.mint(accCustomer_1, 10);
await INS.mint(accCustomer_2, 10);

console.log("Launching...");
const ctcAdmin = accAdmin.contract(backend);
const ctcCustomer_1 = accCustomer_1.contract(backend, ctcAdmin.getInfo());
const ctcCustomer_2 = accCustomer_2.contract(backend, ctcAdmin.getInfo());

console.log(`Running deployer`);
const pDeployer = ctcAdmin.p.Deployer({
  opts: { acceptedToken: INS.id },
  readyForStakers: () => resolveReadyForStakers(),
});
await ctcAdmin.getInfo();
console.log(`ctc deployed`);

const result_1 = await ctcCustomer_1.apis.Customer.pay(5, 30);
console.log(
  `1. pay successfully at ${result_1.start} with amount ${result_1.cost}, covering for ${result_1.insurPeriod}`
);

const result_2 = await ctcCustomer_2.apis.Customer.pay(10, 35);
console.log(
  `2. pay successfully at ${result_2.start} with amount ${result_2.cost}, covering for ${result_2.insurPeriod}`
);
