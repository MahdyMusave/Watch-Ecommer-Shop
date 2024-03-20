import React from "react";
import MainBanner1 from "../images/Main-Banner1.jpg";
import MainBanner2 from "../images/Main-Banner2.jpg";
import MainBanner3 from "../images/Main-Banner3.jpg";
// import MainBanner3 from "../../img/Main-Banner3.jpg";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
const MainSlide = () => {
  const images = [
    {
      id: 1,
      src: MainBanner1,
      alt: "First Slide",
      title: "yesterday",
      description:
        "Use data attributes to easily control the position of the carousel. data-slide accepts the keywords prev or next, which alters the slide position relative to its current position. Alternatively, use data-slide-to to pass a raw slide index to the carousel data-slide-to=2, which shifts the slide position to a particular index beginning with 0",
    },
    {
      id: 2,
      src: MainBanner2,
      alt: "second Slide",
      title: "Today",
      description:
        "Options can be passed via data attributes or JavaScript. For data attributes, append the option name to data-, as in data-interval=",
    },

    {
      id: 3,
      src: MainBanner3,
      alt: "third Slide",
      title: "tomarow",
      description:
        "Examples and usage guidelines for form control styles, layout options, and custom components for creating a wide variety of forms.",
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
                <Link to="/" className="text-decoration-none ">
                  <div className="card-head row ">
                    <div className="head-title">
                      <h2>{imageSlide.title}</h2>
                    </div>
                    <div className="card-body">
                      <img
                        src={imageSlide.src}
                        alt={imageSlide.alt}
                        className="img-fluid w-100"
                      />
                    </div>
                    <div className="card-footer ps-5 py-5">
                      <p>{imageSlide.description}</p>
                    </div>
                  </div>
                </Link>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>
    </>
  );
};

export default MainSlide;
