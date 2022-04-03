import React from "react";
import "./emptyCarts.css";
import { Navigate } from "react-router-dom";

const EmptyCart = () => {
  return (
    <>
    <h1>Cart is Empty</h1>
     <img style = {{width: "250px", height: "250px"}} src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0" alt="" />
    </>
  );
};

export default EmptyCart;
