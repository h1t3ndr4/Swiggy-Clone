import { NavBar } from "./Navbar/Navbar";
import { ControlledCarousel } from "./Carasouel/imgSlider";
import { Container } from "./Carasouel/imgSlider";
import { FlexMain } from "./Content/FilterBar";
import { GridTemplateColumns } from "./Content/GridBox";

export const Home = () => {
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
