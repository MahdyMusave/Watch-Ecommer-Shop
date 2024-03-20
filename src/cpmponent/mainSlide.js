import React from "react";
import MainBanner1 from "../images/Main-Banner1.jpg";
import MainBanner2 from "../images/Main-Banner2.jpg";
import MainBanner3 from "../images/Main-Banner3.jpg";
// import MainBanner3 from "../../img/Main-Banner3.jpg";
import Carousel from "react-bootstrap/Carousel";
const MainSlide = () => {
  const images = [
    {
      id: 1,
      src: MainBanner1,
      alt: "First Slide",
    },
    {
      id: 2,
      src: MainBanner2,
      alt: "second Slide",
    },

    {
      id: 3,
      src: MainBanner3,
      alt: "third Slide",
    },
  ];

  return (
    <>
      <div>
        <Carousel controls="true">
          {images.map((imageSlide) => {
            // return console.log(imageSlide);
            return (
             
                <Carousel.Item key={imageSlide.id}>
                  <img src={imageSlide.src} alt={imageSlide.alt} className="img-fluid w-100" />
                </Carousel.Item>
             
            );
          })}
        </Carousel>
      </div>
    </>
  );
};

export default MainSlide;
