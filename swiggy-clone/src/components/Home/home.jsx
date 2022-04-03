import { NavBar } from "./Navbar/Navbar";
import { ControlledCarousel } from "./Carasouel/imgSlider";
import { Container } from "./Carasouel/imgSlider";
import { FlexMain } from "./Content/FilterBar";
import { GridTemplateColumns } from "./Content/GridBox";
import {useSelector} from "react-redux";
import {Navigate} from "react-router-dom";

export const Home = () => {
  const isAuth = useSelector((store) => store.login.isAuth);

  if(isAuth === "No"){
    return <Navigate  to = {"/"}></Navigate>
  }

  return (
    <>
      <NavBar />
      <ControlledCarousel />
      <Container>
        <FlexMain />
        <GridTemplateColumns />
      </Container>
    </>
  );
};
