import React, { useEffect, useState } from "react";
import * as backend from "build/index.main.mjs";
import {
  loadStdlib,
  ALGO_MyAlgoConnect as MyAlgoConnect,
} from "@reach-sh/stdlib";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
// utils
import { ctcparse, pretty } from "utils/contract";
import { toast } from "react-toastify";

const PROVIDERENV = "LocalHost";
const reach = loadStdlib("ALGO");

reach.setWalletFallback(
  reach.walletFallback({
    // LocalHost for devnet, TestNet for testnet,  MainNet for mainnet
    providerEnv: PROVIDERENV,
    MyAlgoConnect,
  })
);

function Deployer() {
  const [accDeployer, setAccDeployer] = useState();
  const [ctcDeployer, setCtcDeployer] = useState();
  const [customerPhrase, setCustomerPhrase] = useState();
  const [tokenId, setTokenId] = useState();
  const [ctcInfo, setCtcInfo] = useState();
  const [claimsBalance, setClaimsBalance] = useState(0);
  const [transferAmount, setTransferAmount] = useState(0);
  const [isConnected, setIsConnected] = useState(false);
  const [isTokenDeployed, setIsTokenDeployed] = useState(false);
  const [isContractDeployed, setIsContractDeployed] = useState(false);
  const [claimers, setClaimers] = useState([]);
  const [isTableVisble, setIsTableVisible] = useState(false);
  const [isRefreshed, setIsRefreshed] = useState(false);

  const connectWallet = async () => {
    try {
      const deployer = await reach.getDefaultAccount();
      console.log("Deployer connected: ", deployer);
      if (PROVIDERENV === "LocalHost") {
        const startingBalance = reach.parseCurrency(100);
        await reach.fundFromFaucet(deployer, startingBalance);
      }
      const balance = await reach.balanceOf(deployer);
      console.log("Deployer balance:", balance.toNumber());
      setAccDeployer(deployer);
      setIsConnected(true);
    } catch (err) {
      console.log("Error: ", err);
    }
  };

  const deplopyToken = async () => {
    try {
      console.log("Creating ASA");
      // Change contract name and symbol
      const token = await reach.launchToken(accDeployer, "Insure", "INS");
      const tokenId = JSON.stringify(token.id, null, 2);
      console.log("ASA Id: ", tokenId, token);
      await accDeployer.tokenAccept(token.id);
      setTokenId(tokenId);
      setIsTokenDeployed(true);
    } catch (err) {
      console.log("Error: ", err);
    }
  };

  const deplopyContract = async () => {
    if (claimsBalance < 3000) {
      toast.error("Please enter claims balance over 3000");
      return;
    }
    try {
      const lclCtcDeployer = accDeployer.contract(backend);
      console.log("contract created");

      console.log(`running deployer`);
      const pDeployer = lclCtcDeployer.p.Deployer({
        opts: {
          acceptedToken: ctcparse(tokenId),
          claimsBalance: claimsBalance,
          contractIsRunning: true,
        },
        log: console.log,
      });

      const info = await lclCtcDeployer.getInfo();
      const tmpctcInfo = JSON.stringify(info, null, 2);
      setCtcDeployer(lclCtcDeployer);
      setCtcInfo(tmpctcInfo);
      setIsContractDeployed(true);
      console.log("contract deployed");
    } catch (err) {
      console.log("Error: ", err);
    }
  };

  const connectCtc = async () => {
    const contract = accDeployer.contract(backend, ctcparse(ctcInfo));
    setCtcDeployer(contract);
    console.log("contract deployed");
    setIsTokenDeployed(true);
    setIsContractDeployed(true);
  };

  const transferToken = async () => {
    try {
      const customer = await reach.newAccountFromMnemonic(customerPhrase);
      console.log("Customer: ", customer);
      await customer.tokenAccept(ctcparse(tokenId));
      await reach.transfer(
        accDeployer,
        customer,
        transferAmount,
        ctcparse(tokenId)
      );
      toast.success("Transfer Successfully");
    } catch (err) {
      console.log("Error: ", err);
    }
  };

  const runView = async (vname, ...args) => {
    const res = await ctcDeployer.views.View[vname](...args);
    if (res[0] !== "Some") {
      console.warn(vname, res);
      return;
    }
    return pretty(res);
  };

  const runViews = async (vs) => {
    const data = {};
    const views = [];
    for (const [vname, ...args] of vs) {
      const v = (async () => {
        const res = await runView(vname, ...args);
        data[vname] = res;
      })();
      views.push(v);
      await v;
    }
    await Promise.all(views);
    return data;
  };

  useEffect(() => {
    const getClaimsInfo = async () => {
      try {
        const data = {
          ...(await runViews([["claimersCount"], ["claimers"]])),
        };
        console.log("Data: ", data);
        const lclClaimers = [];
        if (data?.claimersCount > 0) {
          for (let i = 0; i < data.claimersCount; i++) {
            const cliamerData = {
              ...(await runViews([
                ["userCurrCost", data.claimers[i]],
                ["userCurrStart", data.claimers[i]],
                ["userCurrPeriod", data.claimers[i]],
                ["userCurrRequestedProceed", data.claimers[i]],
              ])),
            };
            console.log("Cliamer Data: ", cliamerData);
            lclClaimers.push({
              index: i,
              address: data.claimers[i],
              cost: cliamerData.userCurrCost,
              start: cliamerData.userCurrStart,
              duration: cliamerData.userCurrPeriod,
              requestedProceed: cliamerData.userCurrRequestedProceed,
            });
          }
          setIsTableVisible(true);
        }
        console.log("Claimers: ", lclClaimers);
        setClaimers(lclClaimers);
      } catch (err) {
        toast.error("Failed to get claims info");
        console.log("Error: ", err);
      }
    };
    if (ctcDeployer) {
      getClaimsInfo();
    }
  }, [ctcDeployer, isRefreshed]);

  const api = async (name, ...args) => {
    console.log(`calling api: ${name}`);
    const res = await ctcDeployer.apis.InsureCompany[name](...args);
    console.log(pretty(res));
    return pretty(res);
  };

  const approveRequest = async (claimerInfo) => {
    try {
      const res = await api(
        "approveRequest",
        claimerInfo.index,
        claimerInfo.requestedProceed
      );
      console.log("Approve Res: ", res);
      const tmpClaimers = claimers;
      tmpClaimers.splice(claimerInfo.index, 1);
      console.log("Approve Cliamers: ", tmpClaimers);
      setClaimers(tmpClaimers);
      setIsTableVisible(false);
    } catch (err) {
      toast.error("Failed to approve the request.");
      console.log("Error: ", err);
    }
  };

  const declineRequest = async (claimerInfo) => {
    try {
      const res = await api("declineRequest", claimerInfo.index);
      console.log("Decline Res: ", res);
      const tmpClaimers = claimers;
      tmpClaimers.splice(claimerInfo.index, 1);
      console.log("Decline Cliamers: ", tmpClaimers);
      setClaimers(tmpClaimers);
      setIsTableVisible(false);
    } catch (err) {
      toast.error("Failed to decline the request.");
      console.log("Error: ", err);
    }
  };

  return (
    <div id="deployer" className="d-flex text-center">
      <h1 className="mb-4">Welcome to Deployer Page</h1>
      {isConnected ? (
        <div id="deployerdetails" className="d-flex justify-content-center">
          {isTokenDeployed ? (
            isContractDeployed ? (
              <div className="form-group" style={{ width: "450px" }}>
                <div className="mb-4">
                  <label className="float-start">Token Information: </label>
                  <p>{tokenId}</p><br/>
                </div>
                <div className="mb-4">
                  <label className="float-start">Contract Information: </label>
                  <p>{ctcInfo}</p> <br/>
                </div>
                <div>
                  <div className="mb-4">
                    <label className="float-start">
                      Customer Account Phrase:{" "}
                    </label>
                    <textarea className="form-control"
                      cols="50"
                      onChange={(e) => setCustomerPhrase(e.target.value)}
                    />
                  </div>
                  <div className="mb-4">
                    <label className="float-start">Amount: </label> <br/>
                    <input className="form-control"
                      type="number" min="1"
                      onChange={(e) => setTransferAmount(e.target.value)}
                    />
                  </div>
                  <div className="mb-4">
                  <Button className="transfertoken" onClick={() => transferToken()}>
                    Transfer Token
                  </Button>
                  </div>
                  <div className="mb-4">
                  <Button
                    className="mt-3 refresh"
                    onClick={() => setIsRefreshed(!isRefreshed)}
                    >
                    Refresh
                  </Button>
                  </div>
                  {isTableVisble ? (
                    <>
                      <div>Claimers</div>
                      <Table sx={{ minWidth: 650 }}>
                        <TableHead>
                          <TableRow>
                            <TableCell align="center">Index</TableCell>
                            <TableCell align="center">
                              Claimer Address
                            </TableCell>
                            <TableCell align="center">Request Amount</TableCell>
                            <TableCell align="center">Cost</TableCell>
                            <TableCell align="center">Start Time</TableCell>
                            <TableCell align="center">Duration</TableCell>
                            <TableCell align="center"></TableCell>
                            <TableCell align="center"></TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {claimers?.map((c, i) => (
                            <TableRow key={i}>
                              <TableCell align="center">{c.index}</TableCell>
                              <TableCell align="center">{c.address}</TableCell>
                              <TableCell align="center">
                                {c.requestedProceed}
                              </TableCell>
                              <TableCell align="center">{c.cost}</TableCell>
                              <TableCell align="center">{c.start}</TableCell>
                              <TableCell align="center">{c.duration}</TableCell>
                              <TableCell align="center">
                                <Button onClick={() => approveRequest(c)}>
                                  Approve
                                </Button>
                              </TableCell>
                              <TableCell align="center">
                                <Button onClick={() => declineRequest(c)}>
                                  Decline
                                </Button>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </>
                  ) : null}
                </div>
              </div>
            ) : (
              <div  className="form-group" style={{ width: "450px" }}>
                <div className="mb-4">
                  <label className="float-start">Token Information: </label>
                  <p>{tokenId}</p>
                </div>
                <div className="mb-4">
                  <label className="float-start">Claim Balance: </label>
                  <input className="form-control"
                    type="number" min='3000'
                    onChange={(e) => setClaimsBalance(e.target.value)}
                  />
                </div >
                <div className="mb-4"> 
                <Button className="deploycontract" onClick={() => deplopyContract()}>
                  Deploy Contract
                </Button>
                </div>
              </div>
            )
          ) : (
            <div style={{ width: "450px" }}>
              <div className="mb-4">
                <Button className="deploytoken" onClick={() => deplopyToken()}>Deploy Token</Button>
              </div>
              <div className="mb-4 form-group">
                <div className="mb-4">
                  <label for="tokeninfo" className="float-start" >Token Information:</label> <br />
                  <input id="tokeninfo" className="form-control" onChange={(e) => setTokenId(e.target.value)} />
                </div>
                <div className="mb-4">
                  <label for="contractinfo" className="float-start" >Contract Information: </label> <br />
                  <input id="contractinfo" className="form-control" onChange={(e) => setCtcInfo(e.target.value)} />
                </div>
                <Button className="connectcontract" onClick={() => connectCtc()}>Connect Contract</Button>
              </div>
            </div>
          )}
        </div>
      ) : (
        <Button className="connectwallet" onClick={() => connectWallet()}>Connect Wallet</Button>
      )}
    </div>
  );
}

export default Deployer;
