import React from "react";

import { configureStore } from "@reduxjs/toolkit";
// import { combineReducers } from "redux";
import ReduxWish from "./reducers/wish";
import { composeWithDevTools } from "@redux-devtools/extension";
import cartReducer from "./reducers/cart-reducer";
console.log(ReduxWish);
// console.log(cartReducer, "cartReducer");

// const rootReducer = combineReducers({
//   rw: ReduxWish,
//   rCart: cartReducer,
//   })

// const Store = configureStore(rootReducer, composeWithDevTools());
const Store = configureStore(
  {
    reducer: {
      rw: ReduxWish,
      rCart: cartReducer,
    },
  },
  composeWithDevTools()
);
export default Store;
