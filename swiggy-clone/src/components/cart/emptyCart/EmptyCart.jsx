import React from "react";
import "./emptyCarts.css";

const EmptyCart = () => {
  return (
    <>
      {/* Hello world */}
      <div className="nDVxx _340-t">
        <div className="_10-lm">
          <div className="_3a391" />
          <div className="_3Y9ZP">Your cart is empty</div>
          <div className="d7jCU">
            You can go to home page to view more restaurants
          </div>
          <div
            className="_3pgCg"
            onClick={() => {
              window.location.href = "/menu";
            }}
          >
            See restaurants near you
          </div>
        </div>
        <div className="_3-bcQ">
          <div className="_3djal">
            <div>
              <div className="_1rwo5 ">
                <div className="F8Sye">
                  <div className="_2YrH-">Add a delivery address</div>
                </div>
                <div>
                  <span className="_38EYL">
                    You seem to be in the new location
                  </span>
                  <div className="-brc1">
                    <div className="_2nd--">
                      <div className="_3p8Mf Ldi91">
                        <div className="WtfuC _3mJDe">
                          <div className="icon-location" />
                          <div className="_2_VIS">+</div>
                        </div>
                        <div>
                          <div className="_2xgU6">Add new Address</div>
                          <div className="KYAcN">
                            Ram Tonde, Mumbai Airport, Lower Parel, Friends
                            Colony, Hallow Pul, Kurla, Mumbai, Maharashtra
                            400070, India
                          </div>
                          <div className="_3dNWs _1AS3P">Add New</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="_250uQ _26MRf" />
                <div className="_2b4pY">
                  <span className="_1q8J4 icon-marker-checkout" />
                </div>
              </div>
              <div>
                <div className="_1rwo5">
                  <div className="F8Sye _1rtRz">
                    <div className="_2YrH-">Payment</div>
                  </div>
                  <div className="_2b4pY AuX5b">
                    <span className="_1q8J4 _1UwKN icon-wallet-checkout" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="_2sMsA">
            <div className="_13V5d">
              <div className="_1cl2U _2XVjJ">
                <div className="_1pKFz Tqef9">Cart Empty</div>
                <img
                  src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_480/Cart_empty_-_menu_2x_ejjkf2"
                  className="_3mSQq"
                  alt="img"
                />
                <div className="_1Qxa0">
                  Good food is always cooking! Go ahead, order some yummy items
                  from the menu.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmptyCart;
