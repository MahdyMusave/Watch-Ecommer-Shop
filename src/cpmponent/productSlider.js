import React from "react";
import { Container } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductCart from "./productCart";
const ProductSlider = (props) => {
  let slidess = props.slides;
  // return console.log(slidess);
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
  return (
    <>
      <div className="productSlider mb-5 mt-5">
        <Container className="shadow">
          <h5 className="text-left mb-4 ms-4">FEATURED PRODUCTS</h5>
          <Carousel responsive={response}>
            {slidess.map((slide, index) => (
              <ProductCart key={index} slidePro={slide} />
            ))}
          </Carousel>
        </Container>
      </div>
    </>
  );
};

export default ProductSlider;
