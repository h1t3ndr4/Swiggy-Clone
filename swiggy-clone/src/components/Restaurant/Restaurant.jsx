import { NavBar } from "./Navbar/Navbar";
import { StickyBar } from "./Stickybar/Stickybar";
import styled from "styled-components";
import { ScrollTab } from "./ScrollTab/scrollTab";
import { Tag } from "./FSSI/Tag";
const Address = styled.div`
  width: 90%;
  margin: auto;
  height: 30px;
  text-align: left;
  padding-left: 1%;
`;

const Span = styled.span`
  font-size: 10px;
  color: #93959f;
  margin-right: 0.35%;
`;

export const Restaurant = () => {
  return (
    <>
      <NavBar />
      <Address>
        <Span>Home</Span>
        <Span>/</Span>
        <Span>Belgaum</Span>
        <Span>/</Span>
        <Span>Raviwarpeth</Span>
        <Span>/</Span>
        <Span style ={{ color: "black"}}>Hotel Milan</Span>
      </Address>
      <StickyBar />
      <ScrollTab />
      <Tag />
    </>
  );
};
