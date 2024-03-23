import React from "react";
import MainSlide from "../cpmponent/mainSlide";
import ProductCategory from "../cpmponent/productCategory.js";
import ProductTable from "../cpmponent/productTable";
import BrandLogo from "../cpmponent/barndLogo";
import ClientCorousel from "../cpmponent/clientCorousel";
const Home = (props) => {
  return (
    <>
      <MainSlide />
      <ProductCategory />
      <ProductTable />
      <BrandLogo />
      <ClientCorousel />
    </>
  );
};

export default Home;
