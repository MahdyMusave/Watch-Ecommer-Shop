import React from "react";
import { Button } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import { useDispatch, connect } from "react-redux";
import { useState, useEffect } from "react";
import {
  addToCart,
  adjustQuantity,
  deleteFormCart,
  LoadCurrentItem,
} from "../redux/reducers/cart-action";
// console.log(addToCart, "addToCart");
// console.log(adjustQuantity, "adjustQuantity");
// console.log(deleteFormCart, "deleteFormWish");
// console.log(LoadCurrentItem, "LoadCurrentWish");

const ProductTabCartList = (props) => {
  // console.log(props, "oooprops");
  const dispatch = useDispatch();
  let deleteFromWish = () => {};
  // console.log(props, "opppoo");
  let addToCart = props.addToCart;
  let adjustQuantity = props.adjustQuantity;
  let deleteFormCart = props.deleteFormCart;
  let LoadCurrentItem = props.currentItem;

  const [inputQty, setinputQty] = useState(props.product.qty);
  const [subTotal, setSubTotal] = useState(0);

  useEffect(() => {
    const input = document.querySelector("input");
    const subTotall = inputQty * props.product.price;
    setSubTotal(subTotal + subTotall);
    let subTotShow = input.parentNode.parentNode.children[4];
    subTotShow.innerHTML = `${subTotall}`;
  }, [inputQty, setSubTotal, props.product.price]);

  const onChangeQuantity = (event) => {
    event.preventDefault();
    let btn = event.currentTarget;
    // return console.log(btn);
    setinputQty(btn.value);
    // return  console.log(inputQty);
    // return console.log(props.product.id, btn.value);
    // adjustQuantity(props.product.id, btn.value);
    if (btn.value === btn.max) {
      alert("this is the last quantity for this produt");
    }
    const subTotall = inputQty * props.product.price;
    setSubTotal(subTotal + subTotall);
    // console.log(subTotall);
    let subTotShow = btn.parentNode.parentNode.children[4];
    subTotShow.innerHTML = `${subTotall}`;
  };
  return (
    <>
      <tr key={props.product.id}>
        <td>
          <Link to={`/product/${props.product.id}`}>
            <img
              src={props.product.src}
              alt="product_img"
              onClick={() => LoadCurrentItem(props.product)}
            />
            {props.product.name}
          </Link>
        </td>

        <td onClick={() => LoadCurrentItem(props.product)}>
          <Link to={`/product/${props.product.id}`}>{props.product.name}</Link>
        </td>
        <td className="price-new">{props.product.price}$</td>
        <td>
          <input
            type="number"
            id="qty"
            name="qty"
            min="1"
            max={props.product.maxQuantity}
            step="1"
            //defaultvalue="1"
            value={inputQty}
            onChange={onChangeQuantity}
          />
        </td>
        <td>
          <span className="price-new">{subTotal}$</span>
        </td>
        <td>
          <button
            variant="dark"
            size="sm"
            onClick={(e) => addToCart(e, props.product, props.product.id)}
          >
            Add To cart
          </button>
          <button
            variant="dark"
            size="sm"
            className="ms-2"
            onClick={(e) => deleteFormCart(e, props.product.id)}
          >
            <Icon.Trash></Icon.Trash>
          </button>
          <Button
            variant="dark"
            size="sm"
            className="ms-2"
            onClick={(e) => deleteFromWish(e, props.product)}
          >
            <Icon.Trash></Icon.Trash>
          </Button>
        </td>
      </tr>
    </>
  );
};

const mapStateToprops = (state) => {
  return {
    currentItem: state.rCart.currentItem,
  };
};
console.log(mapStateToprops);
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (e, product, id) => dispatch(addToCart(e, product, id)),
    adjustQuantity: (id, value) => dispatch(adjustQuantity(id, value)),
    deleteFromCart: (e, id) => dispatch(deleteFormCart(e, id)),
    LoadCurrentItem: (item) => dispatch(LoadCurrentItem(item)),
  };
};

export default connect(mapStateToprops, mapDispatchToProps)(ProductTabCartList);
