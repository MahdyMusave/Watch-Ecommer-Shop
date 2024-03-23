import React from "react";
import { Container } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import BrandLogo1 from "../images/brand1.png";
import BrandLogo2 from "../images/brand2.png";
import BrandLogo3 from "../images/brand3.png";
import BrandLogo4 from "../images/brand4.png";
import BrandLogo5 from "../images/brand5.png";
import BrandLogo6 from "../images/brand6.png";
import BrandLogo7 from "../images/brand7.png";
import { Link } from "react-router-dom";

const BarndLogo = () => {
  const response = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const Brands = [
    {
      id: 1,
      src: BrandLogo1,
      alt: "brand 1",
    },
    {
      id: 2,
      src: BrandLogo2,
      alt: "brand 2",
    },
    {
      id: 3,
      src: BrandLogo3,
      alt: "brand 3",
    },
    {
      id: 4,
      src: BrandLogo4,
      alt: "brand 4",
    },
    {
      id: 5,
      src: BrandLogo5,
      alt: "brand 5",
    },
    {
      id: 6,
      src: BrandLogo6,
      alt: "brand 6",
    },
    {
      id: 7,
      src: BrandLogo7,
      alt: "brand 7",
    },
  ];
  return (
    <>
      <section className="brandLogo boxShadaw">
        <Container className="p-5">
          <Carousel responsive={response}>
            {Brands.map((brands) => (
              <div className="text-center" key={brands.id}>
                <Link to="/" className="text-decoration-none">
                  <img src={brands.src} alt={brands.alt} />
                </Link>
              </div>
            ))}
          </Carousel>
        </Container>
      </section>
    </>
  );
};

export default BarndLogo;
