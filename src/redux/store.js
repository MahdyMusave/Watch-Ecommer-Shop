import React from "react";
import { createSlice, configureStore } from "@reduxjs/toolkit";
import ReduxWish from "./reducers/wish";
import { composeWithDevTools } from "@redux-devtools/extension";
import cartReducer from "./reducers/reducer";

const rootReducer = configureStore({
  rw: ReduxWish,
  rcart: cartReducer,
});
const Store = createSlice(rootReducer,composeWithDevTools());
export default Store;
