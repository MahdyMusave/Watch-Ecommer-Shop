import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
//home
import Home from "./page/home";
import TopHeader from "./cpmponent/topHeader";
import NavBar from "./cpmponent/navbar";
// import WishListPage from "./page/wishList";
// import cartListPage from "./page/cartList";
// import currentProductPage from "./page/currentProduct";
// import { useState } from "react";
import Footer from "./cpmponent/footer_box/footer";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <div id="App">
          <TopHeader /> <NavBar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            {/* <Route path="/wishList" element={<WishListPage />}></Route> */}
            {/* <Route
            path="/shoppingCart"
            element={<CartListPage qVal={quantity} setqVal={setQuantity} />}
            ></Route> */}
            {/* <Route path="/product/:id" element={<CurrentProductPage />}></Route> */}
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
