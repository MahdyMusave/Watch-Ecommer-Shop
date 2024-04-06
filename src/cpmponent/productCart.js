import React from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Card from "react-bootstrap/Card";
import "react-multi-carousel/lib/styles.css";
import ReactStars from "react-rating-stars-component";
import { connect } from "react-redux";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import * as Icon from "react-bootstrap-icons";
import { LoadCurrentItem, addToCart } from "../redux/reducers/cart-action";

const ProductCart = (props) => {
  // return console.log(props);
  // return console.log(props);
  const slideProduct = props.slidePro;
  const clickWish = props.clickWish;
  const addToCart = props.addToCart;
  const LoadCurrentItem = props.LoadCurrentItem;
  return (
    <div className="text-center" key={props.slidePro.id}>
      <Card className="productCard border-0 position-relative">
        <Link
          to={`/product/${props.slidePro.id}`}
          className="shadow my-2 rounded-4"
        >
          <Card.Img
            variant="top"
            src={slideProduct.src}
            alt={slideProduct.alt}
            onClick={() => {
              LoadCurrentItem(props.slidePro);
            }}
          />
        </Link>
        <ButtonGroup className="btnGroup d-flex  justify-content-between ml-auto position-absolute btn-group">
          <Button
            variant="dark"
            className="wish ms-2"
            size="sm"
            id={slideProduct.id}
            name={props.slidePro.name}
            onClick={(e) => clickWish(e, props.slidePro)}
            disabled={props.slidePro.isAddedToWishlist}
          >
            <Icon.Heart />
          </Button>
          <Button
            variant="dark"
            className="add-to-cart ms-2"
            size="sm"
            id={slideProduct.id}
            name={slideProduct.name}
            onClick={(e) => addToCart(e, slideProduct, props.slidePro.id)}
          >
            Add to Cart
          </Button>
          <Link to={`/product/${slideProduct.id}`}>
            <Button
              variant="dark"
              className="eye ms-2"
              size="sm"
              onClick={() => LoadCurrentItem(slideProduct)}
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
            <Card.Title onClick={() => LoadCurrentItem(props.slidePro)}>
              {slideProduct.name}
            </Card.Title>
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

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (e, product, id) => dispatch(addToCart(e, product, id)),
    LoadCurrentItem: (product) => dispatch(LoadCurrentItem(product)),
  };
};
console.log(mapDispatchToProps, "mapDispatchToProps");

export default connect(null, mapDispatchToProps)(ProductCart);
