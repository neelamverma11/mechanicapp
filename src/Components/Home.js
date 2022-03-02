import React from "react";
import AboutPart from "./Home/AboutPart";
import CardsPart from "./Home/CardsPart";
import CarouselPart from "./Home/CarouselPart";
import CustomButton from "./Home/CustomButton";
import FooterPart from "./Home/FooterPart";

const Home = () => {
  return (
    <>
      <div className="container-fluid m-0 p-0">
        <div className="row">
          <CarouselPart />
          <AboutPart />
          <CardsPart />
          <CustomButton />
          <FooterPart />
        </div>
      </div>
    </>
  );
};

export default Home;
