import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CarouselBox = () => {
  return (
    <Carousel
      autoplay={true}
      stopOnHover={true}
      infiniteLoop={true}
      showIndicators={true}
      showArrows={false}
      showStatus={false}
      showThumbs={false}
    >
      <div className="w-full">
        <img
          src="https://i.ibb.co/3d01T7M/img1.png"
          alt="img1"
          width={"100%"}
          height={"auto"}
          className="border rounded-[15px] shadow-sm"
        />
      </div>
      <div className="w-full">
        <img
          src="https://i.ibb.co/27P6Kgp/img2.png"
          alt="img2"
          width={"100%"}
          height={"auto"}
          className="border rounded-[15px] shadow-sm"
        />
      </div>
      <div className="w-full">
        <img
          src="https://i.ibb.co/f8dfkGz/img3.png"
          alt="img3"
          width={"100%"}
          height={"auto"}
          className="border rounded-[15px] shadow-sm"
        />
      </div>
    </Carousel>
  );
};

export default CarouselBox;
