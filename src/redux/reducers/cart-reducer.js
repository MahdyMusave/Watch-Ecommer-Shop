import * as actionTypes from "./cart-types";
import allProducts from "../../services/watches";

const INITIAL_STATE = {
  allProducts: allProducts, //products without qty
 cart:  [], //product with added qty
  currentItem: null,
};

console.log(INITIAL_STATE);
// console.log(INITIAL_STATE.allProducts);
// console.log(actionTypes);
const cartReducer = (state = INITIAL_STATE, action) => {
  // console.log(state, "state", action);
  // console.log(action.type === actionTypes.LOAD_PRODUCTS);

  switch (action.type) {
    case actionTypes.LOAD_PRODUCTS:
      // console.log(...state.allProducts, "state", action.payload.product);
      return {
        ...state,
        allProducts: [...state.allProducts, action.payload.products],
      };
    case actionTypes.ADD_TO_CART:
      console.log(action, "actionnnn add to cart");
      //get the item from products array
      //const products = action.payload.products;
      // console.log(
      //   state.allProducts.find((pro) => pro.id === action.payload.id),
      //   "|find"
      // );
      const item = state.allProducts.find(
        (prod) => prod.id === action.payload.id
      );
      //
      console.log(item);

      if (item.qty === item.maxQuantity) {
        alert("Sorry, the quantity for this product is finished");
        let btn = action.payload.event.currentTarget;
        btn.setAttribute("disabled", "true");
        btn.setAttribute("variant", "danger");
        btn.classList.remove("btn-dark");
        btn.classList.toggle("btn-danger");
        btn.innerHTML = "sold out";
      } else {
        alert(`${item.name} is added to cart successfuly`);
      }
      //console.log(state.cart.item, item.maxQuantity);
      const checkQty = state.cart.find(
        (item) => item.qty === action.payload.item.maxQuantity
      );
      //console.log(checkQty, 123);
      //check if the item is in cart already
      const inCart = state.cart.find((item) =>
        item.id === action.payload.id ? true : false
      );
      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.cart, { ...item, qty: 1 }],
      };
    case actionTypes.DELETE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case actionTypes.ADJUST_QUANTITY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: action.payload.qty }
            : item
        ),
        currentItem:
          state.currentItem.id === action.payload.id
            ? { ...state.currentItem, qty: action.payload.qty }
            : { ...state.currentItem, qty: 1 },
      };
    case actionTypes.LOAD_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload,
      };
    default:
      return state;
  }
};

export default cartReducer;
