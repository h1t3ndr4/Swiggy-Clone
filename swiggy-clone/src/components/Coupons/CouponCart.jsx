import React from "react";
import { coupons } from "./coupon";
import "./CouponCart.css";

function CouponCart() {
  console.log(coupons);
  return (
    <div className="coupon_cart_container">
      {coupons.map((coupon) => {
        return (
          <div className="couponContainer">
            <div className="couponCode">
              <img src={coupon.bank_logo} alt="" />
              <p>{coupon.coupon_code}</p>
            </div>

            <h5 className="coupon_heading">{coupon.coupon_heading}</h5>
            <p className="coupon_desc">{coupon.coupon_desc}</p>

            <button className="coupon_moreBtn">+ More</button>
            <h5 className="copyCodeBtn">COPY CODE</h5>
          </div>
        );
      })}
    </div>
  );
}

export default CouponCart;
