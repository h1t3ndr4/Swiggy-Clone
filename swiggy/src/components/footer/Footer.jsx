import React from "react";
import styled from "styled-components";

const Footers = styled.header`
  overflow: hidden;
  ul {
    list-style: none;
  }
  ul > li {
    margin-bottom: 15px;
    text-align: left;
    color: white;
  }
`;

function Footer() {
  return (
    <Footers>
      <div
        className="container-fluid"
        style={{
          background: "black",
          textAlign: "left",
          fontFamily: "sans-serif",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div>
                <ul
                  style={{
                    listStyle: "none",
                    color: "white",
                  }}
                >
                  <li style={{ marginTop: "35%" }}>
                    <b className="text-muted">COMPANY</b>
                  </li>
                  <li>About Us</li>
                  <li>Team</li>
                  <li>Careers</li>
                  <li>Swiggy Blog</li>
                  <li>Bug Bounty</li>
                  <li>Swiggy Pop</li>
                  <li>Swiggy Super</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3">
              <div>
                <ul
                  style={{
                    listStyle: "none",
                    padding: "10px",
                    color: "white",
                  }}
                >
                  <li style={{ marginTop: "28%" }}>
                    <b className="text-muted">CONTACT</b>
                  </li>
                  <li>Help & Support</li>
                  <li>Partner with Us</li>
                  <li>Ride with us</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3">
              <div>
                <ul
                  style={{
                    listStyle: "none",
                    padding: "10px",
                    color: "white",
                  }}
                >
                  <li style={{ marginTop: "28%" }}>
                    <b className="text-muted">LEGAL</b>
                  </li>
                  <li>Terms & Conditions</li>
                  <li>Refund & Cancellation</li>
                  <li>Privacy Policy</li>
                  <li>Cookie Policy</li>
                  <li>Offer Terms</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="mt-5">
                <ul style={{ listStyle: "none" }}>
                  <li style={{ marginTop: "30%" }}>
                    <img
                      src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_108/iOS_ajgrty"
                      alt="apple"
                      className="img-fluid"
                      style={{
                        border: "2px solid white",
                        borderRadius: "10px",
                      }}
                    />
                  </li>
                  <li style={{ marginTop: "30px" }}></li>
                  <li>
                    <img
                      src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_108/play_ip0jfp"
                      alt="googleplay"
                      className="img-fluid"
                      style={{
                        border: "2px solid white",
                        borderRadius: "10px",
                      }}
                    />
                  </li>
                </ul>
              </div>
            </div>
            <div
              style={{
                borderBottom: "1px solid grey",
                width: "100%",
                marginLeft: "3%",
                marginTop: "3%",
              }}
            ></div>
          </div>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div>
                <ul
                  style={{
                    ListStyle: "none",
                    color: "white",
                  }}
                >
                  <li style={{ marginTop: "20%" }}>
                    <b className="text-muted">WE DELIVER TO</b>
                  </li>
                  <li>Abohar</li>
                  <li>Adilabad</li>
                  <li>Adoni</li>
                  <li>Agartala</li>
                  <li>Agra</li>
                  <li>Ahmedabad</li>
                  <li>Ajmer</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3">
              <div>
                <ul
                  style={{
                    ListStyle: "none",
                    padding: "10px",
                    color: "white",
                  }}
                >
                  <li style={{ marginTop: "20%" }}></li>
                  <li style={{ marginTop: "30%" }}>Pune</li>
                  <li>Patna</li>
                  <li>Darbhanga</li>
                  <li>Durgapur</li>
                  <li>Gandhinagar</li>
                  <li>Gurgaon</li>
                  <li>Guwahati</li>
                  <li>Goa</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3">
              <div>
                <ul
                  style={{
                    listStyle: "none",
                    padding: "10px",
                    color: "white",
                  }}
                >
                  <li style={{ marginTop: "20%" }}>
                    <b className="text-muted"></b>
                  </li>
                  <li style={{ marginTop: "30%" }}>Kochi</li>
                  <li>Kolkata</li>
                  <li>Kota</li>
                  <li>Kurnool</li>
                  <li>Lucknow</li>
                  <li>Ludhiana</li>
                  <li>Madurai</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3">
              <div>
                <ul
                  style={{
                    listStyle: "none",
                    padding: "10px",
                    color: "white",
                  }}
                >
                  <li style={{ marginTop: "20%" }}>
                    <b className="text-muted"></b>
                  </li>
                  <li style={{ marginTop: "30%" }}>Mumbai</li>
                  <li>Mysore</li>
                  <li>Nagpur</li>
                  <li>Nanded</li>
                  <li>Nashik</li>
                  <li>Nellore</li>
                  <li>New Delhi</li>
                  <li>Nizamabad</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Footers>
  );
}
export default Footer;
