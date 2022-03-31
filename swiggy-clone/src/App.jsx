// import logo from "./logo.svg";
import "./App.css";
import Help from "./components/Help/Help";
import { MyAccountsOrders } from "./components/Accounts/MyAccountsOrders";
import { Routes, Route } from "react-router-dom";
import React from "react";

function App() {
  return (
    <div className="App">
      <h1>app</h1>
      <Routes>
        <Route path="/my-account/:comp" element={<MyAccountsOrders />} />
        <Route path="/help" element={<Help />}></Route>
      </Routes>
      <Help />
    </div>
  );
}

export default App;
