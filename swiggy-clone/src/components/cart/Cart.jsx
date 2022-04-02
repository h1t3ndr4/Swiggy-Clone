import React, { useEffect, useState } from "react";
import "./cart.css";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CartLeftMiddle from "./cartLeftMiddle/CartLeftMiddle";
import CartLeftBottom from "./cartLeftBottom/CartLeftBottom";
import EmptyCart from "./emptyCart/EmptyCart";
import axios from "axios";
// import Navbar from "../Navbar/Navbar";

const Cart = () => {
  const [authButton, setAuthButton] = useState(" ");
  const [otp, setOtp] = useState(false);
  const [signupOtp, setSignUpOtp] = useState(false);
  const [user, setUser] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const currentUser =
    JSON.parse(localStorage.getItem("currentUserId")) || "not found";
  axios.get(`https://swiggybackendclone.herokuapp.com/cart/`).then((res) => {
    setCartItems(res.data);
  });

  useEffect(() => {
    if (currentUser !== "not found") {
      setUser(true);
    }
  }, [currentUser]);

  return cartItems.length === 0 ? (
    <EmptyCart />
  ) : (
    <div style={{ overflowX: "hidden" }}>
      {/* <Navbar /> */}

      {/* <CartCoupon /> */}
      <div id="wholeCartContainer">
        <div id="cartContainer">
          <div id="cartLeftContainer">
            <div id="cartLeftTop">
              <div id="cartLeftTopContent">
                <div className="iconContainerDiv">
                  <PersonOutlineOutlinedIcon className="icons" />
                </div>
                <h2
                  className="cartSignUpDivTitle"
                  style={{ display: user ? "none" : "block" }}
                >
                  Account
                </h2>
                <div
                  id="unAuthoriseUser"
                  style={{ display: user ? "none" : "block" }}
                >
                  <p className="cartSignUpDivContent">
                    To place your order now, log in to your existing account or
                    sign up
                  </p>
                  <div
                    id="cartSignUpDivButton"
                    style={{ display: authButton === " " ? "flex" : "none" }}
                  >
                    <button
                      className="cartPageLoginButton"
                      onClick={() => {
                        setAuthButton("login");
                      }}
                    >
                      Have an account <br /> <span>Log in</span>
                    </button>
                    <button
                      className="cartPageSignupButton"
                      onClick={() => {
                        setAuthButton("signup");
                      }}
                    >
                      New to Swiggy? <br /> <span>Sign up</span>
                    </button>
                  </div>

                  {/* sign up part  */}

                  <div
                    id="signupInputDiv"
                    style={{
                      display: authButton === "signup" ? "flex" : "none",
                    }}
                  >
                    <p className="cartSignUpHead">
                      Sign up or{" "}
                      <span
                        onClick={() => {
                          setAuthButton("login");
                          setSignUpOtp(false);
                          setOtp(false);
                        }}
                      >
                        log in to your account
                      </span>{" "}
                    </p>
                    <div className="inputItem">
                      <input type="text" placeholder="Phone number" />
                    </div>
                    <div
                      className="inputItem"
                      style={{ display: signupOtp ? "none" : "block" }}
                    >
                      <input type="text" placeholder="Name" />
                    </div>
                    <div
                      className="inputItem"
                      style={{ display: signupOtp ? "none" : "block" }}
                    >
                      <input type="text" placeholder="Email" />
                    </div>
                    <div
                      className="inputItem"
                      style={{ display: signupOtp ? "none" : "block" }}
                    >
                      <input type="text" placeholder="Password" />
                    </div>
                    <div className="inputItem referralInputBox">
                      <input type="text" placeholder="Referral code" />
                    </div>
                    <div
                      className="inputItem"
                      style={{ display: signupOtp ? "block" : "none" }}
                    >
                      <input type="number" placeholder="One time password" />
                    </div>
                  </div>

                  <div
                    id="continueButtonDiv"
                    style={{
                      display:
                        authButton !== "signup" || signupOtp === true
                          ? "none"
                          : "block",
                    }}
                  >
                    <button
                      className="continueButton"
                      onClick={() => {
                        setSignUpOtp(true);
                        setOtp(false);
                      }}
                    >
                      continue
                    </button>

                    <p
                      className="termCondition"
                      style={{
                        display:
                          authButton !== "signup" || signupOtp === true
                            ? "none"
                            : "block",
                      }}
                    >
                      By creating an account, I accept the{" "}
                      <span> Terms & Conditions & Privacy Policy</span>
                    </p>
                  </div>

                  <div
                    id="continueButtonDiv"
                    style={{ display: signupOtp ? "block" : "none" }}
                  >
                    <button className="continueButton">VERIFY OTP</button>
                  </div>

                  {/* // log in part  */}

                  <div
                    id="signupInputDiv"
                    style={{
                      display: authButton === "login" ? "flex" : "none",
                    }}
                  >
                    <p className="cartSignUpHead">
                      Enter login details or{" "}
                      <span
                        onClick={() => {
                          setAuthButton("signup");
                          setSignUpOtp(false);
                          setOtp(false);
                        }}
                      >
                        create an account
                      </span>
                    </p>
                    <div className="inputItem">
                      <input type="text" placeholder="Phone number" />
                    </div>
                    <div
                      className="inputItem"
                      style={{ display: otp ? "block" : "none" }}
                    >
                      <input type="number" placeholder="One time password" />
                    </div>
                  </div>

                  <div
                    id="continueButtonDiv"
                    style={{
                      display:
                        authButton !== "login" || otp === true
                          ? "none"
                          : "block",
                    }}
                  >
                    <button
                      className="continueButton"
                      onClick={() => {
                        setOtp(true);
                      }}
                    >
                      continue
                    </button>

                    <p
                      className="termCondition"
                      style={{ display: authButton === " " ? "none" : "block" }}
                    >
                      By creating an account, I accept the{" "}
                      <span> Terms & Conditions & Privacy Policy</span>
                    </p>
                  </div>

                  <div
                    id="continueButtonDiv"
                    style={{ display: otp ? "block" : "none" }}
                  >
                    <button className="continueButton">VERIFY OTP</button>
                  </div>
                </div>

                <h2
                  className="cartSignUpDivTitle"
                  style={{ display: !user ? "none" : "block" }}
                >
                  Logged in <CheckCircleIcon className="checkedCircle" />
                </h2>
                <div
                  id="authorisedUser"
                  style={{ display: !user ? "none" : "block" }}
                >
                  <h2 className="userDetails">
                    {`${currentUser.name} | ${currentUser.phone}`}
                  </h2>
                </div>
              </div>
              <div
                id="cartLeftTopImage"
                style={{ display: user ? "none" : "block" }}
              >
                <img
                  style={{ height: "9vw" }}
                  src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_147,h_140/Image-login_btpq7r"
                  alt=""
                />
              </div>
            </div>

            <CartLeftMiddle />
            <CartLeftBottom />
          </div>

          {/* <div id="cartRightContainer">
            <CartRight />
          </div> */}
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Cart;
