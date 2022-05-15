import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StyledEngineProvider, CssBaseline } from "@mui/material";
import { ToastContainer } from "react-toastify";
// routes
import App from "./App";
import Deployer from "routes/Deployer";
import Customer from "routes/Customer";
// styles
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
// performance
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StyledEngineProvider>
      <CssBaseline />
      <ToastContainer position="top-center" />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="deployer" element={<Deployer />} />
          <Route path="customer" element={<Customer />} />
        </Routes>
      </BrowserRouter>
    </StyledEngineProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
