import React from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Card from "react-bootstrap/Card";
import "react-multi-carousel/lib/styles.css";
import ReactStars from "react-rating-stars-component";

import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import * as Icon from "react-bootstrap-icons";

const ProductCart = (props) => {
  // return console.log(props);
  const slideProduct = props.slidePro;
  return (
    <div className="text-center" key={slideProduct.id}>
      <Card className="productCard border-0 position-relative">
        <Link
          to={`/product/${slideProduct.id}`}
          className="shadow my-2 rounded-4"
        >
          <Card.Img
            variant="top"
            src={slideProduct.src}
            alt={slideProduct.alt}
          />
        </Link>
        <ButtonGroup className="btnGroup d-flex  justify-content-between ml-auto position-absolute btn-group">
          <Button
            variant="dark"
            className="wish ms-2"
            size="sm"
            id={slideProduct.name}
          >
            <Icon.Heart />
          </Button>
          <Button
            variant="dark"
            className="add-to-cart ms-2"
            size="sm"
            id={slideProduct.name}
          >
            Add to Cart
          </Button>
          <Link to={`/product/${slideProduct.id}`}>
            <Button
              variant="dark"
              className="eye ms-2"
              size="sm"
              id={slideProduct.name}
            >
              <Icon.Eye />
            </Button>
          </Link>
        </ButtonGroup>
        <Card.Body>
          <Link
            to={`/product/${slideProduct.id}`}
            className="text-decoration-none"
          >
            <Card.Title>{slideProduct.name}</Card.Title>
          </Link>
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex justify-content-start align-items-center">
              <Card.Text className="price-new mb-0 ms-2">
                {slideProduct.price}$
              </Card.Text>
              <Card.Text className="price-old mb-0 ms-2">
                {!slideProduct.oldPrice ? "" : slideProduct.oldPrice}
              </Card.Text>
            </div>
            <ReactStars
              count={5}
              size={24}
              color="gray"
              ally={true}
              edit={true}
              isHalf="true"
              value={slideProduct.rating}
              activeColor="#ffd700"
            />
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductCart;
