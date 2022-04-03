import React from "react";

export const SwiggyOneCard = () => {
  return (
    <div style={{ display: "flex" }}>
      <div className="SwiggyOneCardL">
        <h2>Swiggy One</h2>
        <p>
          Get free delivery and extra discounts all across Swiggy.
          <br />
          Your Swiggy One benefits can be availed only on the Swiggy App.
        </p>

        <div style={{ display: "flex" }}>
          <a
            className="SwiggyOneCardLMarket"
            href="https://apps.apple.com/in/app/id989540920?referrer=utm_source%3Dswiggy%26utm_medium%3Dhomepage"
            target="blank"
          >
            <img
              src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-AppStore_lg30tv"
              alt="Apple Store"
            />
          </a>
          <a
            className="SwiggyOneCardLMarket"
            href="https://play.google.com/store/apps/details?id=in.swiggy.android&referrer=utm_source%3Dswiggy%26utm_medium%3Dheader"
            target="blank"
          >
            <img
              src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-GooglePlay_1_zixjxl"
              alt="android Store"
            />
          </a>
        </div>
      </div>
      <img
        class="SwiggyOneCardR"
        alt="img"
        src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_720,h_660/swiggy_one/my_account_super"
      ></img>
    </div>
  );
};
