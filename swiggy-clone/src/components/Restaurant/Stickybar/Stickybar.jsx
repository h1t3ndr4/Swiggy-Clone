import "./Stickybar.css";
import { useState, useEffect } from "react";
import styled from "styled-components";
import IconCheckboxes from "./FavButton";
import {useSelector} from "react-redux";
import {store} from "../../../Redux/store/Store.js"

const Img = styled.img`
  width: 20%;
  object-fit: cover;
  height: 78%;
`;

const Mid = styled.div`
  width: 40%;
  height: 80%;
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
`;

const Rating = styled.div`
  width: 65%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Items = styled.div`
  width: 30%;
  height: 90%;
  display: flex;
  flex-direction: column;

  border-right: 1px solid teal;
`;

const SearchBar = styled.div`
  width: 100%;
  height: 25%;
  display: flex;
  margin-top: 8%;
  justify-content: flex-start;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
`;

const Input = styled.input`
  width: 45%;
  height: 94%;
  font-size: 1rem;
  border: none;
  z-index: 0.25;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
`;

const Tags = styled.div`
  width: 28%;
  height: 94%;
  background: white;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-left: 3%;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
`;

export const StickyBar = () => {
   const restaurant = useSelector((store) => (store.restaurant.restaurant));
   console.log(restaurant);

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
          src={`${restaurant.image_url}`}
        ></Img>
        <Mid>
          <Head>{restaurant.title}</Head>
          <Sub>{restaurant.categories}</Sub>
          <Sub>{restaurant.address}</Sub>

          <Rating>
            <Items>
              <span>
                <img
                  style={{ width: "14x", height: "14px", background: "white" }}
                  src="https://img.icons8.com/ios/50/000000/star--v1.png"
                />
                <span style={{ color: "white", marginLeft: "5%" }}>
                  <strong>--</strong>
                </span>
              </span>

              <Sub style={{ fontSize: "0.75rem", marginTop: "1px" }}>
                Too Few Ratings
              </Sub>
            </Items>

            <Items>
              <span style={{ color: "white", fontWeight: "600" }}>
                330 mins
                <span style={{ color: "white", marginLeft: "5%" }}></span>
              </span>

              <Sub style={{ fontSize: "0.75rem", marginTop: "1px" }}>
                Delivery Time
              </Sub>
            </Items>
            <Items>
              <span style={{ color: "white", fontWeight: "600" }}>
                ₹ 250
                <span style={{ color: "white", marginLeft: "5%" }}></span>
              </span>

              <Sub style={{ fontSize: "0.75rem", marginTop: "1px" }}>
                Cost for two
              </Sub>
            </Items>
          </Rating>

          <SearchBar>
            <img
              style={{
                width: "45px",
                height: "45px",
                margin: "0",
                backgroundColor: "white",
              }}
              src="https://img.icons8.com/ios-glyphs/30/000000/search--v1.png"
            />

            <Input placeholder="Search for dishes..."></Input>

            <Tags>
              <img
                style={{ width: "20px", height: "20px" }}
                src="https://img.icons8.com/color/48/000000/vegetarian-mark.png"
              />
              <span
                style={{
                  color: "teal",
                  fontWeight: "600",
                  fontSize: "0.85rem",
                }}
              >
                Pure Veg
              </span>
            </Tags>

            <Tags>
              <IconCheckboxes></IconCheckboxes>
              <span
                style={{
                  color: "teal",
                  fontWeight: "600",
                  fontSize: "0.85rem",
                }}
              >
                {" "}
                Favourite
              </span>
            </Tags>
          </SearchBar>
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
