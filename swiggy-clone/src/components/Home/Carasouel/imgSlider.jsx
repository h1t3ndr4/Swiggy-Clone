import "./imgSlider.css";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import styled from "styled-components";

export const Container = styled.div`
width: 100vw;
margin: 0 auto;
padding: 0 5%;
`

export const ControlledCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
 const nextIcon = <img src="https://img.icons8.com/ios/50/000000/right--v1.png" className = "buttons"/>;
 const prevIcon = <img src="https://img.icons8.com/ios/50/000000/left--v1.png" className = "buttons"/>;

  return (
    <Carousel controls={true} nextIcon ={nextIcon} prevIcon={prevIcon} className="imgSlider" activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="sliderImgs"
          src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/sfyhpdhesv3hp2vvmmtt"
          alt="Third slide"
        />
        <img
          className="sliderImgs"
          src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/qsgjyrelvjr3atzl0ypm"
          alt="Third slide"
        />
        <img
          className="sliderImgs"
          src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/s5ug2key6e2sptaxku5v"
          alt="Third slide"
        />
        <img
          className="sliderImgs"
          src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/omhjfsrgi5fjkg81ivhj"
          alt="Third slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="sliderImgs"
          src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/oxe97jexxbnxqtbhg2zo"
          alt="Third slide"
        />
        <img
          className="sliderImgs"
          src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/ifi2lbzxeu1hvsqrsip3"
          alt="Third slide"
        />
        <img
          className="sliderImgs"
          src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/sfyhpdhesv3hp2vvmmtt"
          alt="Third slide"
        />
        <img
          className="sliderImgs"
          src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/qsgjyrelvjr3atzl0ypm"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};
