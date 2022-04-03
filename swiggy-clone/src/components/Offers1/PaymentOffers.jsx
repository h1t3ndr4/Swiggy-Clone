import React from "react";
import { Link } from "react-router-dom";
import "./Offers.css";
import CouponCart from "../Coupons/CouponCart";

function Offers() {
  return (
    <div>
      {/* <h1>Hello I am offer page</h1> */}

      {/* Offer Navbar */}
      <div className="offer_nav_container">
        <div className="offer_nav_main_container">
          {/* <ul className="nav_links">
            <li>
              <Link to="/offers/payment" className="offers_link active">
                Payment offers/Coupons
              </Link>
            </li>
            <div className="new_uderline"></div>
          </ul> */}
        </div>
      </div>

      {/* show data */}
      {/* Food ITEMS */}
      {/* <div className="offersHeading">
        <h1>Available Coupons</h1>
      </div> */}
      <CouponCart />
    </div>
  );
}

export default Offers;
