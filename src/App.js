import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

function App() {
  return (
    <div id="homepage" className="text-center d-flex">
      <h1 className="mb-5">Insurance DApp</h1>
      <Link to="/deployer">
        <Button variant="contained" className="mb-4">
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
