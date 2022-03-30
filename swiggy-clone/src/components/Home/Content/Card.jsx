import * as React from "react";
import Card from "@mui/material/Card";
import "./Card.css";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Title = styled.p`
  font-weight: 600;
  font-size: 1rem;
  margin: 5px 0;
  word-break: break-word;
  color: #282c3f;
`;

const Rating = styled.p`
  font-size: 0.85rem;
  color: white;
`;
const FlexBar = styled.div`
  display: flex;
  width: 100%;
  height: 25%;
  justify-content: space-between;
  margin-top: 3.5%;
`;

const FirstItem = styled.div`
  display: flex;
  background-color: #db7c38;
  color: #fff;
  width: 18%;
  justify-content: space-evenly;
  align-content: center;
`;

const Smalls = styled.p`
  margin: 0;
  font-size: 0.75rem;
  color: #535665;
  font-weight: 600;
`;

const Dummy = styled.div`
  width: 100%;
  border: 1px solid red;
  visibility: hidden;
`;

export const MediaCard = () => {
  return (
    <Card
      className="card"
      style={{
        width: "15.88rem",
        borderRadius: "0",
        cursor: "pointer",
        textAlign: "left",
        border: "none"
      }}
    >
      <CardMedia
        component="img"
        height="160"
        image="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/iozl9dtmhlhjwb09bsw8"
        alt="green iguana"
      />
      <CardContent style={{ padding: "0.5rem 0" }}>
        <Title>Hotel New Welcome</Title>
        <Typography
          variant="body2"
          color="text.secondary"
          style={{ color: "#686b78" }}
        >
          North Indian, South Indian
        </Typography>
        <FlexBar>
          <FirstItem>
            <FontAwesomeIcon icon={faStar} style={{ color: "white" }} />
            <Rating>3.7</Rating>
          </FirstItem>
          <Smalls>
            <Smalls>.</Smalls>
          </Smalls>
          <Smalls>20 MINS</Smalls>
          <Smalls>.</Smalls>
          <Smalls>₹300 FOR TWO</Smalls>
          <Smalls></Smalls>
        </FlexBar>
      </CardContent>
        <Dummy>
            <p>--</p>
        </Dummy>
    </Card>
  );
};
