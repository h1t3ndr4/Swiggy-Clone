import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import React from "react";

export const ManageAddressCard = () => {
  let userData = JSON.parse(localStorage.getItem("currentUserId"));

  return (
    <div>
      <div className="manageAddressCardDiv">Manage Addresses</div>
      <div className="manageAddressCardDivCards">
        {userData.addresses.map((el) => {
          return (
            <div className="manageAddressCardDivCard">
              <div className="manageAddressCardDivCardIcon">
                <LocationOnOutlinedIcon />
              </div>
              <div>
                <div className="manageAddressCardDivCardIconType">
                  {el.type}
                </div>
                <div className="manageAddressCardDivCardIconBody">
                  {el.body}
                </div>
                <div style={{ marginTop: "11px" }}>
                  <span className="editDeleteButton">EDIT</span>
                  <span className="editDeleteButton">DELETE</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
