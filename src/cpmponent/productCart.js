import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const ProductCart = (props) => {
  // return console.log(props);
  const slideProduct = props.slidePro;
  return (
    <div className="text-center" key={slideProduct.id}>
      <Card className="position-relative">
        <Link to={`/product/${slideProduct.id}`}>
          <Card.Img
            variant="top"
            src={slideProduct.src}
            alt={slideProduct.alt}
          />
        </Link>
      </Card>
    </div>
  );
};

export default ProductCart;
