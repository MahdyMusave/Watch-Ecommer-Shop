// import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
//home
import Home from "./page/home";
import TopHeader from "./cpmponent/topHeader";
import NavBar from "./cpmponent/navbar";
import CurrentProductPage from "./page/currentProductPage";
import Footer from "./cpmponent/footer_box/footer";
import WishListPage from "./page/wishList";
import CartListPage from "./page/cartlistpage";
import { useState } from "react";
;
function App(props) {
  const [quantity, setQuantity] = useState(0);
  return (
    <>
      <Router>
        <div id="App">
          <TopHeader /> <NavBar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/wishList" element={<WishListPage />} />
            <Route path="/shoppingCart" element={<CartListPage qVal={quantity} setqVal={setQuantity} />} />
            <Route path="/product/:id" element={<CurrentProductPage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
