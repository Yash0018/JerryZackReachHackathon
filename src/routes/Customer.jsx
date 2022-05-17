import React, { useEffect, useState } from "react";
import * as backend from "build/index.main.mjs";
import {
  loadStdlib,
  ALGO_MyAlgoConnect as MyAlgoConnect,
} from "@reach-sh/stdlib";
import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
// utils
import { ctcparse, pretty } from "utils/contract";
import { toast } from "react-toastify";
import moment from "moment";

const PROVIDERENV = "LocalHost";
const reach = loadStdlib("ALGO");

reach.setWalletFallback(
  reach.walletFallback({
    // LocalHost for devnet, TestNet for testnet,  MainNet for mainnet
    providerEnv: PROVIDERENV,
    MyAlgoConnect,
  })
);

function Customer() {
  const [accCustomer, setAccCustomer] = useState();
  const [tokenBalance, setTokenBalance] = useState(0);
  const [ctcCustomer, setCtcCustomer] = useState();
  const [contractInfo, setContractInfo] = useState();
  const [tokenInfo, setTokenInfo] = useState();
  const [totalCost, setTotalCost] = useState(0);
  const [lastClaimResult, setLastClaimResult] = useState(false);
  const [canPayed, setCanPayed] = useState(true);
  const [isClaimed, setIsClaimed] = useState(false);
  const [requestedProceed, setRequestedProceed] = useState(0);
  const [products, setProducts] = useState([]);
  const [currProduct, setCurrProduct] = useState();
  const [claimAmount, setClaimAmount] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState();
  const [isConnected, setIsConnected] = useState(false);
  const [isRefreshed, setIsRefreshed] = useState(false);

  const connectWallet = async () => {
    try {
      const customer = await reach.getDefaultAccount();
      setAccCustomer(customer);
      console.log("Customer connected: ", customer);
      if (PROVIDERENV === "LocalHost") {
        const startingBalance = reach.parseCurrency(100);
        await reach.fundFromFaucet(customer, startingBalance);
      }
      const balance = await reach.balanceOf(customer);
      console.log("Customer balance:", balance.toNumber());
      await customer.tokenAccept(ctcparse(tokenInfo));
      const tokenBal = await reach.balanceOf(customer, ctcparse(tokenInfo));
      setTokenBalance(tokenBal.toNumber());
      const contract = customer.contract(backend, ctcparse(contractInfo));
      setCtcCustomer(contract);
      console.log("contract deployed");
      setIsConnected(true);
    } catch (err) {
      console.log("Error: ", err);
    }
  };

  const runView = async (vname, ...args) => {
    const res = await ctcCustomer.views.View[vname](...args);
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
    const getUserProductInfo = async () => {
      try {
        const data = {
          ...(await runViews([
            ["durations"],
            ["correspondingPrice"],
            ["userCost", accCustomer],
            ["userCurrCost", accCustomer],
            ["userCurrStart", accCustomer],
            ["userCurrPeriod", accCustomer],
            ["userCurrRequestedProceed", accCustomer],
            ["lastClaimResult", accCustomer],
          ])),
        };
        console.log("Data: ", data);
        setIsClaimed(false);
        setCanPayed(true);
        const now = pretty(await reach.getNetworkSecs());
        console.log(
          "Check: ",
          Number(data?.userCurrStart) + Number(data?.userCurrPeriod),
          now
        );
        if (data?.userCost > 0) {
          setTotalCost(data.userCost);
          setLastClaimResult(data.lastClaimResult);
        }
        if (Number(data?.userCurrStart) + Number(data?.userCurrPeriod) > now) {
          setCurrProduct({
            cost: data.userCurrCost,
            start: data.userCurrStart,
            period: data.userCurrPeriod,
          });
          setCanPayed(false);
          if (data.userCurrRequestedProceed > 0) {
            setRequestedProceed(data.userCurrRequestedProceed);
            setIsClaimed(true);
          }
        } else {
          const tmpProducts = [];
          data?.durations?.map((d, i) => {
            tmpProducts.push({ index: i, duration: d });
          });
          data?.correspondingPrice?.map((p, i) => {
            tmpProducts[i] = { ...tmpProducts[i], price: p };
          });
          console.log("Product: ", tmpProducts);
          setProducts(tmpProducts);
        }
      } catch (err) {
        toast.error("Fail to get the product information");
        console.log("Error: ", err);
      }
    };
    if (ctcCustomer) {
      getUserProductInfo();
    }
  }, [ctcCustomer, isRefreshed]);

  const api = async (name, ...args) => {
    console.log(`calling api: ${name}`);
    const res = await ctcCustomer.apis.Customer[name](...args);
    console.log(pretty(res));
    return pretty(res);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      console.log("Selected Product: ", selectedProduct);
      const { index, duration, price } = selectedProduct;
      const res = await api("pay", index, price, duration);
      console.log("Pay Res: ", res);
      setTokenBalance(tokenBalance - price);
      setTotalCost(Number(totalCost) + Number(res.cost));
      setCurrProduct({
        cost: res.cost,
        start: res.start,
        period: res.insurPeriod,
      });
      setCanPayed(false);
    } catch (err) {
      toast.error("Fail to subscribe this product.");
      console.log("Error: ", err);
    }
  };

  const claim = async () => {
    try {
      const res = await api("claim", claimAmount);
      setRequestedProceed(res);
      setIsClaimed(true);
    } catch (err) {
      toast.error("Fail to claim");
      console.log("Error: ", err);
    }
  };

  return (
    <div id="customer" className="text-center d-flex w-50">
      <h1 className="mb-4">Customer</h1>
      {isConnected ? (
        !canPayed ? (
          <div>
            <p>
              <span className="pr-2 mb-4">Token Balance: </span>$ {tokenBalance}
            </p>
            <p>
              <span className="pr-2 mb-4">Total Cost: </span>$ {totalCost}
            </p>
            {totalCost > 0 && lastClaimResult ? (
              <p>
                <span className="pr-2 mb-4">Last Claim Result: </span>
                {lastClaimResult ? "Approved" : "Declined"}
              </p>
            ) : null}
            <p>
              <span className="pr-2 mb-4">Cost: </span>$ {currProduct.cost}
            </p>
            <p>
              <span className="pr-2 mb-4">Start Time: </span>
              {moment.unix(currProduct.start).format("DD-MM-YYYY hh:mm:ss")}
            </p>
            <p>
              <span className="pr-2 mb-4">Duration: </span>
              {currProduct.period / 60} Minutes
            </p>
            {isClaimed ? (
              <>
                <p>
                  <span className="pr-2 mb-4">Requested Proceed: </span>${" "}
                  {requestedProceed}
                </p>
                <p>Waiting Response from the Admin</p>
                <div className="mb-4">
                  <Button
                    className="mt-3 refresh"
                    onClick={() => setIsRefreshed(!isRefreshed)}
                  >
                    Refresh
                  </Button>
                </div>
              </>
            ) : (
              <>
                <div className="mb-4 form-group">
                  <label className="float-start"> <strong>Claim Amount: </strong> </label>
                  <input className="form-control"
                    type="number"
                    onChange={(e) => setClaimAmount(e.target.value)}
                  />
                </div>
                <Button className="claim" onClick={() => claim()}>Claim</Button>
              </>
            )}
          </div>
        ) : (
          <>
            <p>
              <span className="pr-2 mb-4">Token Balance: </span>$ {tokenBalance}
            </p>
            <p>
              <span className="pr-2 mb-4">Total Cost: </span>$ {totalCost}
            </p>
            {totalCost > 0 && lastClaimResult ? (
              <p>
                <span className="pr-2">Last Claim Result: </span>
                {lastClaimResult ? "Approved" : "Declined"}
              </p>
            ) : null}
            <form onSubmit={handleSubmit}>
              <FormControl className="align-items-center">
                <FormLabel className="float-start align-items-center"><strong style={{color:"black !important"}}>Products:</strong></FormLabel>
                <RadioGroup className="mb-4"
                  name="products-group"
                  onChange={(e) =>
                    setSelectedProduct(JSON.parse(e.target.value))
                  }
                >
                  {products?.map((p, i) => (
                    <FormControlLabel
                      key={i}
                      value={JSON.stringify(p)}
                      control={<Radio />}
                      label={`${p.duration / 60} Days $${p.price}`}
                    />
                  ))}
                </RadioGroup>
                <Button className="pay" sx={{ mt: 1, mr: 1 }} type="submit" variant="outlined">
                  Pay
                </Button>
              </FormControl>
            </form>
          </>
        )
      ) : (
        <div className="form-group mb-4">
          <div className="mb-4">
            <label className="float-start">Token Information: </label>
            <input className="form-control" onChange={(e) => setTokenInfo(e.target.value)} />
          </div>
          <div className="mb-4">
            <label className="float-start">Contract Information: </label>
            <input className="form-control" onChange={(e) => setContractInfo(e.target.value)} />
          </div>
          <Button className="connectwallet" onClick={() => connectWallet()}>Connect Wallet</Button>
        </div>
      )}
    </div>
  );
}

export default Customer;
