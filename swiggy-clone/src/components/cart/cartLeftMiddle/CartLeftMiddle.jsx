import React, { useState } from "react";
import "./cartLeftMiddle.css";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import AddLocationAltOutlinedIcon from "@mui/icons-material/AddLocationAltOutlined";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const CartLeftMiddle = () => {
  const [address, setAddress] = useState(true);
 
  return (
    <div id="cartLeftMiddleContainer">
      <div className="iconContainerDiv">
        <LocationOnOutlinedIcon className="icons" />
      </div>
      <h2 className="cartSignUpDivTitle" style={{ display: address ? "none" : "block" }}>Select delivery address</h2>
      <p className="cartSignUpDivContent" style={{ display: address ? "none" : "block" }}>
        You have a saved address in this location
      </p>

      <div className="addressCardDiv" style={{ display: address ? "none" : "flex" }}>
        <div className="addressDivItems">
          <LocationOnOutlinedIcon className="addressCardIcon" />
          <h2 className="addressCardTitle">Other</h2>
          <p className="addressDetailOfUser">
            flat no.2, Ram Tonde, Mumbai Airport, Lower Parel, Friends Colony,
            Hallow Pul, Kurla, Mumbai, Maharashtra 400070, India
          </p>
          <p className="timeRequire">35 MINS</p>
          <button className="addressButton" onClick={()=>{
              setAddress(true)
          }}>Deliver here</button>
        </div> 
        <div className="addressDivItems">
          <AddLocationAltOutlinedIcon className="addressCardIcon" />
          <h2 className="addressCardTitle">Other</h2>
          <p className="addressDetailOfUser">
            flat no.2, Ram Tonde, Mumbai Airport, Lower Parel, Friends Colony,
            Hallow Pul, Kurla, Mumbai, Maharashtra 400070, India
          </p>
          <p className="timeRequire">35 MINS</p>
          <button className="addressButton addNewAddressButton">Add new</button>
        </div>
      </div>

     <div id="deliveryAddressTopDiv"> 
     <h2
        className="cartSignUpDivTitle"
        style={{ display: !address ? "none" : "block" }}
      >
        Delivery address <CheckCircleIcon className="checkedCircle" />
      </h2>
      <h2 className="changeButton" style={{ display: !address ? "none" : "block" }} onClick={()=>{
          setAddress(false)
      }}>CHANGE</h2>
     </div>
      <div id="authorisedUser" style={{ display: !address ? "none" : "block" }}>
        <h2 className="userDetails" style={{marginTop:"-1vw"}}>Other</h2>
        <p className="addressDetailOfUserSaved">
            flat no.2, Ram Tonde, Mumbai Airport, Lower Parel, Friends Colony,
            Hallow Pul, Kurla, Mumbai, Maharashtra 400070, India
          </p>
          <p className="timeRequire">35 MINS</p>
      </div>
    </div>
  );
};

export default CartLeftMiddle;
