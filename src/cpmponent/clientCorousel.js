import React from "react";
import Carousel from "react-bootstrap/Carousel";
import img1 from "../images/t1.jpg";
import img2 from "../images/t2.jpg";
import img3 from "../images/t3.jpg";
import { Container } from "react-bootstrap";
const ClientCorousel = () => {
  return (
    <>
      <div className="textimonial">
        <Container className="p-5">
          <Carousel controls="false">
            <Carousel.Item>
              <Carousel.Caption className="clientimg position-relative mb-4 mt-4">
                <img src={img1} alt="textimonal" className="img-fluid" />
                <h5>Janet wilson</h5>
                <span className="text-secoundary">Web Developer</span>
                <p className="text-dark mt-3">
                  It usually begins with: “Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua.” The purpose of lorem ipsum
                  is to create a natural looking block of text
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Carousel.Caption className="clientimg position-relative mb-4 mt-4">
                <img src={img2} alt="textimonal 2" className="img-fluid" />
                <h5>Amir Hassani</h5>
                <span className="text-secoundary">Web Developer</span>
                <p className="text-dark mt-3">
                  Rem ipsum doLoremRem ipsum doLorem ipsum ut labore et dolore
                  ma ipsum ut labore et dolore Rem ipsum doLorem ipsum ut labore
                  et dolore mamagna.It usually begins with: “Lorem ipsum dolor
                  is to create a natural looking block of text
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Carousel.Caption className="clientimg position-relative mb-4 mt-4">
                <img src={img3} alt="textimonal 3" className="img-fluid" />
                <h5>Sara Olsen</h5>
                <span className="text-secoundary">Web Developer</span>
                <p className="text-dark mt-3">
                  It usually begins with: “Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua.” The purpose of lorem ipsum
                  is to create a natural looking block of text
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Container>
      </div>
    </>
  );
};

export default ClientCorousel;
