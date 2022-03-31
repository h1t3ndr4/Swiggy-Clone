import "./Stickybar.css";
import { useState, useEffect } from "react";
import styled from "styled-components";

const Img = styled.img`
  width: 20%;
  height: 78%;
`;

const Mid = styled.div`
  width: 40%;
  height: 80%;
  border: 1px solid white;
`;

const Last = styled.div`
  width: 25%;
  height: 60%;
  border: 1px solid whitesmoke;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
`;


const Span = styled.h3`
  color: white;
  font-size: 0.9rem;
  margin: 0;
  font-weight: 600;
`;
const OfferItems = styled.div`
  width: 90%;
  height: 25%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Head = styled.h1`
color: white;
font-size: 2rem;
font-weight: 500;
text-align: left;
`;

const Sub = styled.h4`
color: lightgrey;
font-size: 0.95rem;
text-align: left;
`

export const StickyBar = () => {
  const [value, setValue] = useState("");

  const checkSroll = () => {
    if (1000 > window.pageYOffset) {
      setValue("sticky");
    } else {
      setValue(null);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkSroll);
  }, []);

  return (
    <>
      <div className={`${value} bar`}>
        <Img
          src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/s11qlenbjoub4ae3h8u7`}
        ></Img>
        <Mid>
        <Head>Hotel Milan</Head>
        <Sub>South Indian, Chinese</Sub>
        <Sub>Raviwarpeth, Raviwarpeth</Sub>
        </Mid>
        <Last>
          <OfferItems>
            <img
              style={{
                background: "white",
                borderRadius: "55%",
                height: "25px",
                width: "25px",
                margin: "0",
              }}
              src="https://img.icons8.com/external-jumpicon-line-ayub-irawan/32/000000/external-badge-e-commerce-jumpicon-line-jumpicon-line-ayub-irawan.png"
            />
            <Span>20% off up to ₹125 | Use KOTAK125 Above ₹500</Span>
          </OfferItems>

          <OfferItems>
            <img
              style={{
                background: "white",
                borderRadius: "55%",
                height: "25px",
                width: "25px",
                margin: "0",
              }}
              src="https://img.icons8.com/external-jumpicon-line-ayub-irawan/32/000000/external-badge-e-commerce-jumpicon-line-jumpicon-line-ayub-irawan.png"
            />
            <Span>40% off up to ₹80 | Use code TRYNEW</Span>
          </OfferItems>
        </Last>
      </div>
    </>
  );
};
