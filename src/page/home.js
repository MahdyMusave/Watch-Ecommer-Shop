import React from "react";
import producdSliderImg1 from "../images/product1.jpg";
import producdSliderImg2 from "../images/product2.jpg";
import producdSliderImg3 from "../images/product3.jpg";
import producdSliderImg4 from "../images/product7.jpg";
import producdSliderImg5 from "../images/product8.jpg";

import MainSlide from "../cpmponent/mainSlide";
import ProductCategory from "../cpmponent/productCategory.js";
import ProductTable from "../cpmponent/productTable";

import BrandLogo from "../cpmponent/barndLogo";
import ProductSlider from "../cpmponent/productSlider.js";
import ClientCorousel from "../cpmponent/clientCorousel";

const Home = (props) => {
  const allProducts = [
    {
      id: 1,
      src: producdSliderImg1,
      name: "producdSliderImg1",
      price: 300,
      rating: 5,
      maxQuantity: 10,
      description:
        "More room to move. With 80GB or 160GB of storage and up to 40 hours of battery life, the new lorem ippsum dolor dummy lets you enjoy up to 40,000 songs or up to 200 hours of video or any combination wherever you go. Cover Flow. Browse through your music collection by flipping..",
      isAddedToWishlist: false,
    },
    {
      id: 2,
      src: producdSliderImg2,
      name: "producdSliderImg2",
      price: 1200,
      rating: 3,
      maxQuantity: 7,
      description:
        "More room to move. With 80GB or 160GB of storage and up to 40 hours of battery life, the new lorem ippsum dolor dummy lets you enjoy up to 40,000 songs or up to 200 hours of video or any combination wherever you go. Cover Flow. Browse through your music collection by flipping..",
      isAddedToWishlist: false,
    },

    {
      id: 3,
      src: producdSliderImg3,
      name: "producdSliderImg3",
      price: 4000,
      rating: 4,
      maxQuantity: 4,
      description:
        "More room to move. With 80GB or 160GB of storage and up to 40 hours of battery life, the new lorem ippsum dolor dummy lets you enjoy up to 40,000 songs or up to 200 hours of video or any combination wherever you go. Cover Flow. Browse through your music collection by flipping..",
      isAddedToWishList: false,
    },
    {
      id: 4,
      src: producdSliderImg4,
      name: "producdSliderImg4",
      price: 6000,
      rating: 1,
      maxQuantity: 22,
      description:
        "More room to move. With 80GB or 160GB of storage and up to 40 hours of battery life, the new lorem ippsum dolor dummy lets you enjoy up to 40,000 songs or up to 200 hours of video or any combination wherever you go. Cover Flow. Browse through your music collection by flipping..",
      isAddedToWishList: false,
    },
    {
      id: 5,
      src: producdSliderImg5,
      name: "producdSliderImg5",
      price: 200,
      rating: 4,
      maxQuantity: 24,
      description:
        "More room to move. With 80GB or 160GB of storage and up to 40 hours of battery life, the new lorem ippsum dolor dummy lets you enjoy up to 40,000 songs or up to 200 hours of video or any combination wherever you go. Cover Flow. Browse through your music collection by flipping..",
      isAddedToWishList: false,
    },
  ];

  return (
    <>
      <MainSlide />
      <ProductCategory />
      <ProductTable />
      <BrandLogo />
      <ProductSlider slides={allProducts} />
      <ClientCorousel />
    </>
  );
};

export default Home;
