import React from 'react';
import "./couponTerm.css";

const CouponTerm = () => {
    return (
        <div className="couponTermDiv">
        <div className="couponTermDivTitle">Terms and Conditions</div>
        <ul className="couponTermList">
          <li className="couponTermLiItems">Applicable once per user during the offer period</li>
          <li className="couponTermLiItems">Valid from Friday to Sunday</li>
          <li className="couponTermLiItems">
            Valid only on Bank Debit & Credit Cards
          </li>
          <li className="couponTermLiItems">Other T & C may apply</li>
          <li className="couponTermLiItems">Offer valid till Mar 13, 2022 11:59 PM</li>
        </ul>
      </div>
      
    );
};

export default CouponTerm;