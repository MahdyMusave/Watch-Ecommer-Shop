import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductCart from "./productCart";
import { useDispatch ,connect} from "react-redux";
import { loadProducts } from "../redux/reducers/cart-action";
//  console.log(loadProducts);

function ProductSlider(props) {
  // return console.log(slidess);
  let slidess = props.slides;
  let loadProducts = props.loadProducts;

  let dispatch = useDispatch();
  console.log(loadProducts);
  const handleToWish = (e, data) => {
    console.log(e.taregt);
    let btn = e.currentTarget;
    dispatch({ type: "ADD_TO_WISH", payload: { product: data, button: btn } });
    data.isAddedToWishList = true;
    /*if(data.isAddedToWishList === true){
    btn.setAttribute("disabled","true");
    btn.style.color="red";
    }*/
  };
  useEffect(() => {
    loadProducts(slidess);
    const wishedProducts = slidess.filter(
      (elemnt) => elemnt.isAddedToWishList === true
    );
    console.log(wishedProducts);
  }, [loadProducts, slidess]);

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
              <ProductCart
                key={index}
                slidePro={slide}
                clickWish={handleToWish}
              />
            ))}
          </Carousel>
        </Container>
      </div>
    </>
  );
}
const mapDispatchtoProps = (dispatch) => {
  return {
    loadProducts: (products) => {
      dispatch(loadProducts(products));
    },
  };
};
export default connect(null, mapDispatchtoProps)(ProductSlider);
