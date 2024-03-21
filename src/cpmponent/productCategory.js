import React from "react";
import SubBanner1 from "../images/subbanner1.jpg";
import SubBanner2 from "../images/subbanner2.jpg";
import SubBanner3 from "../images/subbanner3.jpg";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProductCategory = () => {
  const images = [SubBanner1, SubBanner2, SubBanner3];
  return (
    <>
      <section className="productCategory">
        <Container className="p-5">
          <div className="d-flex flex-row justify-content-between">
            <Link to="#" className="text-decoration-none">
              <img src={images[0]} alt="bannerImg" />
            </Link>
            <Link to="#" className="text-decoration-none">
              <img src={images[1]} alt="bannerImg" />
            </Link>
            <Link to="#" className="text-decoration-none">
              <img src={images[2]} alt="bannerImg" />
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
};

export default ProductCategory;
