import Switch from "@mui/material/Switch";
import React from "react";

export const SettingCard = () => {
  return (
    <div style={{ width: "890px" }}>
      <h2 style={{ fontWeight: "600" }}>SMS Preferences</h2>
      <div className="SettingCardDiv">
        <div className="SettingCardDiv1">
          Order related SMS cannot be disabled as they are critical to provide
          service
        </div>
        <div className="SettingCardDiv2">
          <div className="SettingCardDiv21">Recommendations & Reminders</div>
          <div className="SettingCardDiv22">
            <Switch defaultChecked />
          </div>
          <div className="SettingCardDiv23"></div>
          <div className="SettingCardDiv24">
            Keep this on to receive offer recommendations & timely reminders
            based on your interests
          </div>
        </div>
      </div>
    </div>
  );
};
