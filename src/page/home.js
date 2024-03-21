import React from "react";
import MainSlide from "../cpmponent/mainSlide";
import ProductCategory from "../cpmponent/productCategory.js";
import ProductTable from "../cpmponent/productTable";
const Home = (props) => {
  return (
    <>
      <MainSlide />
      <ProductCategory />
      <ProductTable />
    </>
  );
};

export default Home;
