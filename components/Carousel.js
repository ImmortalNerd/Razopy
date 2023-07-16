import React from "react";
import Carousel from "react-material-ui-carousel";
import FirstSlide from "./FirstSlide";
import SecondSlide from "./SecondSlide";

export default function CarouselSlide() {
  return (
    <Carousel height={"75vh"} autoPlay={false}>
      <FirstSlide />
      <SecondSlide />
    </Carousel>
  );
}
