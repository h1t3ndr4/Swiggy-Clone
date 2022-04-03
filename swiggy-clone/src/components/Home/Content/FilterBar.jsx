import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import styled from "styled-components";
import { Example } from "../Canvas/FIlter";
import { useState } from "react";

const Txt = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
`;

const Paras = styled.p`
  font-size: 1.08rem;
  font-weight: 300;
  color: #686b78;
  cursor: pointer;
  display: flex;
  jusfiy-content: space-evenly;
  align-items: center;
  padding-bottom: 0.5%;

  &:hover {
    border-bottom: 1px solid black;
  }
`;

function Item(props) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        p: 1,
        m: 1,
        bgcolor: (theme) =>
          theme.palette.mode === "dark" ? "#101010" : "grey.100",
        color: (theme) =>
          theme.palette.mode === "dark" ? "grey.300" : "grey.800",
        border: "1px solid",
        borderColor: (theme) =>
          theme.palette.mode === "dark" ? "grey.800" : "grey.300",
        borderRadius: 2,
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

export const FlexMain = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);

  return (
    <div style={{ borderBottom: "1px solid lightGrey" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          height: "72px",
          borderRadius: 1,
          alignItems: "center",
          paddingTop: "5%",
        }}
      >
        <Txt style={{ paddingBottom: "1rem" }}>220 Restaurants</Txt>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "45%",
            alignItems: "center",
            p: 1,
            m: 1,
            borderRadius: 1,
          }}
        >
          <Paras>Rating</Paras>
          <Paras>Cost: Low To High</Paras>
          <Paras>Cost: High To Low</Paras>
          <Example></Example>
        </Box>
      </Box>
    </div>
  );
};

export const Pars = () => {
  const Paras = styled.p`
    font-size: 1.08rem;
    font-weight: 300;
    color: #686b78;
    cursor: pointer;
    display: flex;
    jusfiy-content: space-evenly;
    align-items: center;
    padding-bottom: 0.5%;

    &:hover {
      border-bottom: 1px solid black;
    }
  `;

  return (
    <Paras style={{ fontWeight: "600" }}>
      Filters{" "}
      <img
        style={{
          width: "1.5rem",
          height: "1.5rem",
          background: "orange",
          borderRadius: "50%",
        }}
        src="https://img.icons8.com/ios-glyphs/30/000000/sorting-options.png"
      />
    </Paras>
  );
};
