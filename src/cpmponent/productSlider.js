import React from "react";
import { Container } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const ProductSlider = () => {
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
            <div className="card">
              <img
                className="product-image"
                src="../../img/brand3.png"
                alt="banner-img"
              />
              <h2>sport sneaker</h2>
              <p>some description about product ...</p>
              <p>
                <button>Add to Cart</button>
              </p>
            </div>
            <div className="card">
              <img
                className="product-image"
                src="../../img/brand3.png"
                alt="banner-img"
              />
              <h2>sport sneaker</h2>
              <p>some description about product ...</p>
              <p>
                <button>Add to Cart</button>
              </p>
            </div>
            <div className="card">
              <img
                className="product-image"
                src="../../img/brand3.png"
                alt="banner-img"
              />
              <h2>sport sneaker</h2>
              <p>some description about product ...</p>
              <p>
                <button>Add to Cart</button>
              </p>
            </div>
            <div className="card">
              <img
                className="product-image"
                src="../../img/brand3.png"
                alt="banner-img"
              />
              <h2>sport sneaker</h2>
              <p>some description about product ...</p>
              <p>
                <button>Add to Cart</button>
              </p>
            </div>
            <div className="card">
              <img
                className="product-image"
                src="../../img/brand3.png"
                alt="banner-img"
              />
              <h2>sport sneaker</h2>
              <p>some description about product ...</p>
              <p>
                <button>Add to Cart</button>
              </p>
            </div>
          </Carousel>
        </Container>
      </div>
    </>
  );
};

export default ProductSlider;
