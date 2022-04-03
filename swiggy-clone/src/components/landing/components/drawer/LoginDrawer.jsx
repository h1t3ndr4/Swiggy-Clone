import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import { auth } from "./firebase";
import { addUser } from "../../../../Redux/User/action.js";
import { addAuth } from "../../../../Redux/User/action.js";
import { useSelector, useDispatch } from "react-redux";
import {Navigate} from "react-router-dom";

const Div = styled.div`
  font-family: sans-serif;
`;

const useStyles = makeStyles({
  list: {
    width: 450,
  },
  fullList: {
    width: "auto",
  },
});

export default function AuthLoginDrawer() {
  const [usersData, setusersData] = useState({});
  const isAuth = useSelector((store) => store.login.isAuth);
  const dispatch = useDispatch();
  const getData = () => {
    fetch("https://server-swiggy.herokuapp.com/users/")
      .then((res) => res.json())
      .then((data) => setusersData(data));
  };

  useEffect(() => {
    getData();
  }, []);

  const [clicked, setclicked] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const classes = useStyles();
  const [state, setState] = useState({
    bottom: false,
  });

  const handleSubmit = (e) => {
    email === "" ? alert("Please enter Mobile Number") : setclicked(true);

    usersData.map((e) => {
      if (e.phone_num === email) {
        dispatch(addUser(e));
        fetch(`https://phone-num-verify.herokuapp.com/login?phonenumber=91${email}&channel=sms`);
        fetch(`https://phone-num-verify.herokuapp.com/verify?phonenumber=91${email}&code=${password}`).then(() => {    
          dispatch(addAuth());  
          alert("User Logged in successfully");
        })
      }
    });

    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        setState({ ...state, right: false });
        setError("");
      })
      .catch((error) => {
        setError(error.message);
        console.error("Error signing in with password and email", error);
      });
  };
  const logout = () => {};

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
    setError("");
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      style={{ right: 0 }}
      role="presentation"
    >
      <Div className="container mt-3" style={{ width: "90%" }}>
        <Div className="row">
          <Div className="col text-left">
            <button
              type="button"
              className="btn btn-sm"
              onClick={toggleDrawer(anchor, false)}
            >
              <i className="fas fa-times fa-lg" />
            </button>
            <div className="container mt-2">
              <div className="row">
                <div className="col-lg-5 ml-3">
                  <h3>Login</h3>
                  <small>
                    or <b style={{ color: "#fc8019" }}>create an account</b>
                  </small>
                </div>
                <div className="col-lg-5 ml-4">
                  <img
                    className="img-fluid"
                    style={{
                      width: "105px",
                      height: "100px",
                      borderRadius: "50%",
                      fload: "right",
                    }}
                    src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r"
                    alt="logo of wrap"
                  />
                </div>
              </div>
              <div className="container-fluid mt-3">
                <div className="row">
                  <div className="col-lg-12">
                    <TextField
                      id="outlined-textarea"
                      className="Phone Number"
                      type="number"
                      placeholder=" Phone No with country-code"
                      fullWidth
                      variant="outlined"
                      style={{
                        marginLeft: "0px",
                        borderRadius: "0px",
                        marginTop: "15px",
                      }}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      required
                    />
                    {!clicked ? (
                      ""
                    ) : (
                      <TextField
                        type="password"
                        id="outlined-textarea"
                        label="OTP"
                        placeholder="OTP"
                        fullWidth
                        variant="outlined"
                        style={{
                          marginLeft: "0px",
                          borderRadius: "0px",
                          marginTop: "15px",
                        }}
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                        required
                      />
                    )}
                  </div>
                  <div className="col-lg-12 text-center">{error}</div>
                  <div className="col-lg-12 text-center">
                    <button
                      style={{
                        background: "#fc8019",
                        border: "1px solid #fc8019",
                        color: "white",
                        marginTop: "15px",
                        width: "318px",
                        borderRadius: "2%",
                      }}
                      onClick={handleSubmit}
                    >
                      <p
                        style={{
                          fontWeight: "bold",
                          marginTop: "9px",
                        }}
                      >
                        {!clicked ? "Get OTP" : "Sign in"}
                      </p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Div>
        </Div>
      </Div>
    </div>
  ); 
  console.log(isAuth);
    
     if(isAuth === "Yes"){
       return <Navigate to = {"/restaurants"} ></Navigate>
     }
     return (
    <div>
      {
        <button
          type="button"
          className=" btn btn-lg align-self-center font-weight-bold"
          onClick={toggleDrawer("right", true)}
        >
          {"Login"}
        </button>
      }
      {
        <button
          type="button"
          className=" btn btn-lg  font-weight-bold"
          onClick={logout}
        >
          {/* {'Logout'} */}
        </button>
      }
      <Drawer
        anchor={"right"}
        open={state["right"]}
        onClose={toggleDrawer("right", false)}
      >
        {list("right")}
      </Drawer>
    </div>
  );
}
