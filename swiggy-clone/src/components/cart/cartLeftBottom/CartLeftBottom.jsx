import React, { useState } from "react";
import "./cartLeftBottom.css";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import LocalAtmIcon from "@mui/icons-material/LocalAtm"; //cash on delivery
// import LocalActivityIcon from "@mui/icons-material/LocalActivity"; //preferred
import CreditCardIcon from "@mui/icons-material/CreditCard"; // credit
// import CreditScoreIcon from "@mui/icons-material/CreditScore"; // debit
import PaymentsIcon from "@mui/icons-material/Payments"; // upi
import BentoIcon from "@mui/icons-material/Bento"; // food card
import {Link} from "react-router-dom";
// import { CashPayment, WalletPayment, CreditPayment, UPIPayment, FoodCardPayment } from "../cartPaymentMethods/CartPayment";

const CartLeftBottom = () => {
  const allIcons = [
    {
      iconName: <PaymentsIcon className="paymentMethodUIicon" />,
      contentName: "UPI",
    },
    {
      iconName: <LocalAtmIcon className="paymentMethodUIicon" />,
      contentName: "Pay on Delivery",
    },
    // {
    //   iconName: <LocalActivityIcon className="paymentMethodUIicon" />,
    //   contentName: "Preferred Payment",
    // },
    {
      iconName: <AccountBalanceWalletIcon className="paymentMethodUIicon" />,
      contentName: "Wallets",
    },
    { 
      iconName: <Link to = {"/payment/"}><CreditCardIcon className="paymentMethodUIicon" /></Link>,
      contentName: "Debit",
    },
    // {
    //   iconName: <CreditScoreIcon className="paymentMethodUIicon" />,
    //   contentName: "Credit/Debit Cards",
    // },
    {
      iconName: <BentoIcon className="paymentMethodUIicon" />,
      contentName: "Food cards",
    },
  ];

  const [whiteIndex, setWhiteIndex] = useState(0);

  return (
    <div id="cartLeftBottomContainer">
      <div className="iconContainerDiv">
        <AccountBalanceWalletIcon className="icons" />
      </div>
      <h2 className="cartSignUpDivTitle" style={{ display: "none" }}>
        Payment
      </h2>
      <h2 className="cartSignUpDivTitle">Choose payment method</h2>

      <div id="paymentMethodContainer">
        <div id="paymentMethods">
          {allIcons.map((item, index) => {
            return (
              <div
                className={
                  index === whiteIndex
                    ? "paymentMethodIcons paymentMethodIcons1"
                    : "paymentMethodIcons"
                }
                style={{ display: "flex" }}
                onClick={() => setWhiteIndex(index)}
              >
                {item.iconName}
                <h2 className="paymentMethodNames">{item.contentName}</h2>
              </div>
            );
          })}
        </div>

        {/* <div id="respectivePaymentDetail">
      {whiteIndex === 0 ? <UPIPayment /> : whiteIndex === 1 ? <CashPayment />  : whiteIndex === 2 ? <WalletPayment /> : whiteIndex === 3 ? <CreditPayment /> : <FoodCardPayment />   }
        
      
     
      </div> */}
      </div>
    </div>
  );
};

export default CartLeftBottom;
