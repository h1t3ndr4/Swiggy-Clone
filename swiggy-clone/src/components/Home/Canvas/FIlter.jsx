import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import CloseButton from "react-bootstrap/CloseButton";
import styled from "styled-components";
import SizeCheckboxes from "./CheckBoxes";
import BasicButtons from "./ButtonBox";
import { Pars } from "../Content/FilterBar";

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 25%;
  margin: 2%;
`;

const Title = styled.h3`
  font-size: 1.12rem;
  margin: 0;
  font-weight: 600;
`;
const Title1 = styled.h4`
  font-size: 1rem;
  margin: 0;
  font-weight: 525;
  color: #282c3f;
  margin-left: 3.5%;
`;

const Container = styled.div`
  width: 80%;
  height: 300px;
  margin: 3.5%;
  margin-bottom: 15%;
  display: grid;
  grid-template-columns: repeat(2, 45%);
  grid-template-rows: repeat(10, 20px);
  grid-gap: 3.5%;
  justify-content: space-between;
`;

const Span = styled.span`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const OffCanvasExample = ({ name, ...props }) => {
  const [show, setShow] = useState(false);

  const filterData = [
    "African",
    "American",
    "Bakery",
    "Beverages",
    "Biryani",
    "Chaat",
    "Chinese",
    "Combo",
    " Fast Food",
    "Healthy Food",
    "Hyderabadi",
    "Ice Cream",
    "Indian",
    "Jain",
    "Juices",
    "Kebabs",
    "Lucknowi",
    "Mexican",
    "Tandoor",
    "Pure Veg",
  ];

  console.log(filterData.length);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        onClick={handleShow}
        style={{ background: "none", border: "none", boxShadow: "none" }}
      >
        <Pars></Pars>
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header>
          <Flex>
            <CloseButton aria-label="Hide" onClick={handleClose} />
            <Title>Filters</Title>
          </Flex>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Title1>Cuisines</Title1>
          <Container>
            <GiveSpans filterData={filterData} />
          </Container>

          <BasicButtons />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

const GiveSpans = ({ filterData }) => {
  return (
    <>
      {filterData.map((e, ind) => (
        <Span>
          <SizeCheckboxes id={e} value={e}></SizeCheckboxes>
          <label style={{ fontSize: "0.85rem" }}>{e}</label>
        </Span>
      ))}
    </>
  );
};

export const Example = () => {
  return (
    <>
      {["end"].map((placement, idx) => (
        <OffCanvasExample key={idx} placement={placement} name={placement} />
      ))}
    </>
  );
};
