import React, { useState } from "react";
import "./SyleSheetHelp.css";

import { Help1 } from "./Help1";
import { Help2 } from "./Help2";
import { Help3 } from "./Help3";
import { NavBar } from "../Home/Navbar/Navbar";


function Help() {
  const [active, setActive] = useState("Firstcard");
  const [style, setStyle] = useState("faq-top-second-first-div3");
  const [style2, setStyle2] = useState("faq-top-second-first-div2");
  const [style1, setStyle1] = useState("faq-top-second-first-div1");

  const changeStyle = () => {
    setStyle("faq-top-second-first-div-change3");
  };
  const changeStyle2 = () => {
    setStyle2("faq-top-second-first-div-change2");
  };
  const changeStyle1 = () => {
    setStyle1("faq-top-second-first-div-change1");
  };

  return (
    <>
    <NavBar></NavBar>
      <div sx={{ "&:hover": { color: "#f77103" } }} className="faq-top">
        <div className="faq-top-first">
          <h1>Help & Support</h1>
          <h3>Let's take a step ahead and help you better.</h3>
        </div>
        <div className="faq-top-second">
          <div className="faq-top-second-first">
            <div id="faqContainer">
              <div
                onClick={() => setActive("Firstcard")}
                style={{
                  backgroundColor:
                    active === "Firstcard" ? "white" : "transparent",
                }}
                className={style1}
              >
                <h4>Partner Onboarding</h4>
              </div>
              <div
                onClick={() => setActive("Secondcard")}
                style={{
                  backgroundColor:
                    active === "Secondcard" ? "white" : "transparent",
                }}
                className={style2}
              >
                <h4>Legal</h4>
              </div>
              <div
                onClick={() => setActive("Thirdcard")}
                style={{
                  backgroundColor:
                    active === "Thirdcard" ? "white" : "transparent",
                }}
                className={style}
              >
                <h4>FAQs</h4>
              </div>
            </div>
          </div>
          {active === "Firstcard" && <Help1 />}
          {active === "Secondcard" && <Help2 />}
          {active === "Thirdcard" && <Help3 />}
        </div>
      </div>
    </>
  );
}

export default Help;
