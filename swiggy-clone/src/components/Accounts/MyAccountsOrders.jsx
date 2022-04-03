import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import "./MyAccountsOrders.css";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PaymentIcon from "@mui/icons-material/Payment";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SettingsIcon from "@mui/icons-material/Settings";
import { FavouritesCard } from "./FavouritesCard";
import { ManageAddressCard } from "./ManageAddressCard";
import { PastOrdersCard } from "./PastOrdersCard";
import { SettingCard } from "./SettingCard";
import { SwiggyOneCard } from "./SwiggyOneCard";
import { useState } from "react";
import { Drawer } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { NavBar } from "../Home/Navbar/Navbar";
import React from "react";

export const MyAccountsOrders = () => {
  const [drawer, setDrawer] = useState(false);
  const [editingPhone, setEditingPhone] = useState(false);
  const [editingEmail, setEditingEmail] = useState(false);
  const [editingPass, setEditingPass] = useState(false);

  const navigate = useNavigate();
  const { comp } = useParams();
  let currentUser = JSON.parse(localStorage.getItem("currentUserId"));
  console.log("currentUser:", currentUser);
  let user = {
    ...currentUser,
    pastOrders: [
      {
        order_id: "Order #30123550904",
        img:
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_200,c_fill/h8f8pyubkaxywyehrxqk",
        from_add: { name: "Green Chilly", address: "Bally" },
        to_add: {
          name: "Other",
          address: "Nandurbar, Maharashtra 425412, India",
        },
        date: "Thur, Mar 31, 2022, 14:32 PM",
        items: [
          { dish: "Chicken Chilli Gravy", quantity: 1, price: 99 },
          { dish: "Chicken Chilli Gravy", quantity: 1, price: 99 },
        ],
        total_paid: 83,
      },
    ],
    addresses: [
      {
        type: "Home",
        body: "Pune, Maharashtra 411001, India",
      },
      {
        type: "Other",
        body: "New Delhi, India",
      },
    ],
  };
  localStorage.setItem("currentUserId", JSON.stringify(user));
  let listData = [
    { icon: <ShoppingBagIcon />, title: "Orders" },
    { icon: <MonetizationOnIcon />, title: "Swiggy One" },
    { icon: <FavoriteIcon />, title: "Favourites" },
    { icon: <PaymentIcon />, title: "Payments" },
    { icon: <LocationOnIcon />, title: "Addresses" },
    { icon: <SettingsIcon />, title: "Settings" },
  ];
  return (
    <>
     <NavBar></NavBar>
      <Drawer
        anchor="right"
        open={drawer}
        onClose={() => {
          setDrawer(false);
        }}
      >
        <div className="editProfileDrawer">
          <div className="editProfileDrawer1">
            <span>
              <CloseIcon
                onClick={() => {
                  setDrawer(false);
                }}
              />
            </span>
            <div>Edit profile</div>
          </div>
          <div className="editProfileDrawer2">
            <div className="editProfileDrawer21">Phone number</div>
            {editingPhone ? (
              <>
                <div className="inputItemEdit">
                  <input
                    type="text"
                    name="phone"
                    // value={user.phone}
                    placeholder="Phone number"
                    required
                  />
                </div>
                <div className="a1123456">Verify</div>
              </>
            ) : (
              <div>
                <div className="editProfileDrawer211">{user.phone}</div>
                <button
                  className="editProfileDrawer212"
                  onClick={() => {
                    setEditingPhone(true);
                  }}
                >
                  CHANGE
                </button>
              </div>
            )}
          </div>
          <div className="editProfileDrawer2">
            <div className="editProfileDrawer21">Email id</div>
            {editingEmail ? (
              <>
                <div className="inputItemEdit">
                  <input
                    type="text"
                    name="email"
                    // value={user.phone}
                    placeholder="Email"
                    required
                  />
                </div>
                <div className="a1123456">Verify</div>
              </>
            ) : (
              <div>
                <div className="editProfileDrawer211">{user.email}</div>
                <button
                  className="editProfileDrawer212"
                  onClick={() => {
                    setEditingEmail(true);
                  }}
                >
                  CHANGE
                </button>
              </div>
            )}
          </div>
          <div className="editProfileDrawer2" style={{ borderBottom: "none" }}>
            <div className="editProfileDrawer21">Password</div>
            {editingPass ? (
              <>
                <div className="inputItemEdit">
                  <input
                    type="text"
                    name="password"
                    // value={user.phone}
                    placeholder="Password"
                    required
                  />
                </div>
                <div className="a1123456">Change</div>
              </>
            ) : (
              <div>
                <div className="editProfileDrawer211">***********</div>
                <button
                  className="editProfileDrawer212"
                  onClick={() => {
                    setEditingPass(true);
                  }}
                >
                  CHANGE
                </button>
              </div>
            )}
          </div>
        </div>
      </Drawer>
      <div className="MyAccountsOrdersDiv" style={{ marginTop: "2vw" }}>
        <div className="MyAccountsOrdersDivDetails">
          <div className="MyAccountsOrdersDivDetails1">
            <div
              className="MyAccountsOrdersDivDetailsEdit"
              onClick={() => {
                setDrawer(true);
              }}
            >
              EDIT PROFILE
            </div>
            <div className="MyAccountsOrdersDivDetailsName">{user.name}</div>
            <div className="MyAccountsOrdersDivDetailsContacts">
              <span>{user.phone} </span> <span> {user.email}</span>
            </div>
          </div>
        </div>

        <div className="MyAccountsOrdersDivMain">
          <div className="MyAccountsOrdersDivMain1">
            <div style={{ display: "flex" }}>
              <div className="MyAccountsOrdersDivMain1L">
                <ul>
                  {listData.map((e, i) => {
                    return (
                      <li
                        key={i}
                        onClick={() => {
                          navigate(`/my-account/${e.title}`);
                        }}
                        style={{ background: e.title === comp ? "#fff" : "" }}
                      >
                        <span
                          style={{
                            fontWeight: e.title === comp ? "600" : "500",
                          }}
                        >
                          {e.icon} {e.title}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className="MyAccountsOrdersDivMain1R">
                {comp === listData[1].title ? (
                  <SwiggyOneCard />
                ) : comp === listData[2].title ? (
                  <FavouritesCard />
                ) : comp === listData[3].title ? (
                  <h2>Payments</h2>
                ) : comp === listData[4].title ? (
                  <ManageAddressCard />
                ) : comp === listData[5].title ? (
                  <SettingCard />
                ) : (
                  <PastOrdersCard />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
