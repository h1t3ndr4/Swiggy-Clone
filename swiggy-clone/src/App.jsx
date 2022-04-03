// import logo from "./logo.svg";
import "./App.css";
import Help from "./components/Help/Help";
import { MyAccountsOrders } from "./components/Accounts/MyAccountsOrders";
import { Routes, Route } from "react-router-dom";
import React from "react";
import Cart from "./components/cart/Cart";
import PaymentOffers from "../src/components/Offers/PaymentOffers";
import Search from "./components/Search/Search";

function App() {
  return (
    <div className="App">
      <h1>Navbar Here</h1>

      <Routes>
        <Route path="/help" element={<Help />}></Route>
        <Route path="/my-account/:comp" element={<MyAccountsOrders />} />
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/search" element={<Search />}></Route>

        <Route path="/offers/payment" element={<PaymentOffers />}></Route>
      </Routes>
      {/* <RestaurantOffers />
      <PaymentOffers /> */}

      {/* <Help /> */}
      {/* <MyAccountsOrders /> */}
    </div>
  );
}

export default App;
