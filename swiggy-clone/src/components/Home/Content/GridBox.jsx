import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import { MediaCard } from "./Card";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import { addRestaurant } from "../../../Redux/Restaurant/action.js";

function Item(props) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        // bgcolor: (theme) =>
        //   theme.palette.mode === "dark" ? "#101010" : "#fff",
        // color: (theme) =>
        //   theme.palette.mode === "dark" ? "grey.300" : "grey.800",
        p: 1,
        m: 1,
        fontSize: "0.875rem",
        fontWeight: "700",
        ...sx,
      }}
      {...other}
    />
  );
}

Item.propTypes = {
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
    ),
    PropTypes.func,
    PropTypes.object,
  ]),
};

export const GridTemplateColumns = () => {
  const dispatch = useDispatch();

  const [restaurants, setRestaurants] = useState([]);

  const getData = () => {
    fetch("https://server-swiggy.herokuapp.com/restaurants/")
      .then((res) => res.json())
      .then((data) => setRestaurants(data));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div style={{ width: "100%" }}>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gridTemplateRows: "repeat(5, 1fr)",
          gap: "0.75%",
          margin: "2% 0",
        }}
      >
       {restaurants.map((e) => (
           <Link to = {`/restaurant/id/`}  onClick = {() => {dispatch(addRestaurant(e))}}><MediaCard item={e} /></Link>
        ))}
       
      </Box>
    </div>
  );
};
