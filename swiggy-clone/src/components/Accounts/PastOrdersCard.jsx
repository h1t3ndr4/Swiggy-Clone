import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Link } from "react-router-dom";
import { Drawer } from "@mui/material";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import DoneIcon from "@mui/icons-material/Done";
import { Dialog } from "@mui/material";
import React from "react";

export const PastOrdersCard = () => {
  const [drawer, setDrawer] = useState(false);
  const [dialog, setDialog] = useState(false);
  let userData = JSON.parse(localStorage.getItem("currentUserId"));
  var pastOrders = userData.pastOrders;
  return (
    <div>
      <div className="PastOrdersCardHeading">Past Orders</div>
      <div>
        {pastOrders.map((el) => {
          return (
            <div className="PastOrdersSingleCard">
              <div className="PastOrdersSingleCard1">
                <div className="PastOrdersSingleCardImgD">
                  <img src={el.img} alt="img" />
                </div>
                <div className="PastOrdersSingleCardDetails">
                  <div className="PastOrdersSingleCardDetails1">
                    {el.from_add.name}
                  </div>
                  <div className="PastOrdersSingleCardDetails2">
                    {el.from_add.address}
                  </div>
                  <div className="PastOrdersSingleCardDetails3">
                    {el.order_id} | {el.date}
                  </div>
                  <div
                    className="PastOrdersSingleCardDetails4"
                    onClick={() => {
                      setDrawer(true);
                    }}
                  >
                    VIEW DETAILS
                  </div>
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
                        <div>{el.order_id}</div>
                      </div>
                      <div className="pastOrdersViewDetails">
                        <div className="pastOrdersViewDetails1">
                          <div className="pastOrdersViewDetails11">
                            <LocationOnIcon />
                          </div>
                          <div>
                            <div className="pastOrdersViewDetails12">
                              {el.from_add.name}
                            </div>
                            <div className="pastOrdersViewDetails13">
                              {el.from_add.address}
                            </div>
                          </div>
                        </div>
                        <div className="pastOrdersViewDetails1a">
                          <div className="pastOrdersViewDetails11">
                            <LocationOnIcon />
                          </div>
                          <div>
                            <div className="pastOrdersViewDetails12">
                              {el.to_add.name}
                            </div>
                            <div className="pastOrdersViewDetails13">
                              {el.to_add.address}
                            </div>
                          </div>
                        </div>

                        <div className="pastOrdersViewDetails2"></div>
                        <div className="pastOrdersViewDetails3">
                          <div style={{ marginRight: "22px" }}>
                            <DoneIcon color="success" />
                          </div>
                          <div className="pastOrdersViewDetails31">
                            Delivered on {el.date}
                            <div>By Hitendra</div>
                          </div>
                          <div className="pastOrdersViewDetails32">ON TIME</div>
                        </div>

                        <div className="pastOrdersViewDetails4">
                          <div className="pastOrdersViewDetails41">
                            {el.items.length} ITEMS
                          </div>
                          <div className="pastOrdersViewDetails42">
                            {el.items.map((el1) => {
                              return (
                                <div style={{ display: "flex" }}>
                                  <div className="pastOrdersViewDetails421">
                                    {el1.dish} X {el1.quantity}
                                  </div>
                                  <div className="pastOrdersViewDetails422">
                                    ₹ {el1.price}
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                        <div className="pastOrdersViewDetails5">
                          <div className="pastOrdersViewDetails51">
                            <div style={{ margin: "2px 40px" }}>
                              ₹ {el.total_paid}
                            </div>
                            <div>Total Bill</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Drawer>
                  <div className="PastOrdersSingleCardDetails5">
                    <span>
                      Delivered on {el.date} <CheckCircleIcon color="success" />{" "}
                    </span>
                  </div>
                </div>
              </div>

              <Dialog
                open={dialog}
                onClose={() => {
                  setDialog(false);
                }}
              >
                <h2 style={{ padding: "10px", textAlign: "center" }}>
                  Please seat back.. <br /> Our custmer care will contact you on
                  registered mobile number
                </h2>
              </Dialog>

              <div className="PastOrdersSingleCard2">
                {el.items.map((ele) => {
                  return (
                    <div className="PastOrdersSingleCard2Items">
                      {ele.dish} X {ele.quantity}
                    </div>
                  );
                })}
                <div style={{ display: "flex" }}>
                  <Link to="/" className="PastOrdersSingleCard2Reorder">
                    REORDER
                  </Link>
                  <div
                    onClick={() => {
                      setDialog(true);
                    }}
                    className="PastOrdersSingleCard2Help"
                  >
                    HELP
                  </div>
                </div>
                <div className="PastOrdersSingleCard2Price">
                  Total Price : ₹ <span>{el.total_paid}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="PastOrdersCardShowMore">Show More Orders</div>
    </div>
  );
};
