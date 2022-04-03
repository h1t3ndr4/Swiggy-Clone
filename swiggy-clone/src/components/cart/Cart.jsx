import React, { useEffect, useState } from "react";
import "./cart.css";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CartLeftMiddle from "./cartLeftMiddle/CartLeftMiddle";
import CartLeftBottom from "./cartLeftBottom/CartLeftBottom";
import EmptyCart from "./emptyCart/EmptyCart";
// import axios from "axios";
import {CartRight} from "./cartRight/cartRight";
// import Navbar from "../Navbar/Navbar";
import {useSelector} from "react-redux";
import {NavBar} from "../Home/Navbar/Navbar"

const Cart = () => {
  const person = useSelector((store) => (store.login.userLogged));
  const isAuth = useSelector((store) => (store.login.isAuth));

  const [authButton, setAuthButton] = useState(" ");
  const [otp, setOtp] = useState(false);
  const [signupOtp, setSignUpOtp] = useState(false);
  const [user, setUser] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  // const currentUser =
  //   JSON.parse(localStorage.getItem("currentUserId")) || "not found";
  // axios.get(`https://swiggybackendclone.herokuapp.com/cart/`).then((res) => {
  //   setCartItems(res.data);
  // });

  // useEffect(() => {
  //   if (currentUser !== "not found") {
  //     setUser(true);
  //   }
  // }, [currentUser]);


  
    return person.cart.length  ? (
      <>
      <NavBar></NavBar>
    <div style={{ overflowX: "hidden", marginTop: "75px"}}>
      {/* <Navbar /> */}

      {/* <CartCoupon /> */}
      <div style = {{display: "flex", border: "1px solid black", justifyContent: "space-evenly", alignItems: "center", width: "95%", margin: "auto", padding: "0 1%"}} id="wholeCartContainer">
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
                  style={{ display: isAuth === "Yes" ? "none" : "block" }}
                >
                  <h2 className="userDetails">
                    {`${person.user_name} || ${person.phone_num}`}
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
        <CartRight></CartRight>
      </div>
      {/* <Footer /> */}
    </div>
    </>
  ) :   <EmptyCart /> 
};

export default Cart;
