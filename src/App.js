import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

function App() {
  return (
    <div className="text-center">
      <h1>Insure dApp</h1>
      <Link to="/deployer">
        <Button variant="contained" className="mb-3">
          Deployer
        </Button>
      </Link>
      <br />
      <Link to="/customer">
        <Button variant="contained">Customer</Button>
      </Link>
    </div>
  );
}

export default App;
