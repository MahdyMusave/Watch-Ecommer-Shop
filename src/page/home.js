import React from "react";
import MainSlide from "../cpmponent/mainSlide";
import ProductCategory from "../cpmponent/productCategory.js";
import ProductTable from "../cpmponent/productTable";

import BrandLogo from "../cpmponent/barndLogo";
// import ProductCart from "../cpmponent/productCart.js";
import ClientCorousel from "../cpmponent/clientCorousel";
const Home = (props) => {
  return (
    <>
      <MainSlide />
      <ProductCategory />
      <ProductTable />
      <BrandLogo />
      {/* <ProductCart /> */}
      <ClientCorousel />
    </>
  );
};

export default Home;
