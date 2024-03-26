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

function App() {
  return (
    <>
      <Router>
        <div id="App">
          <TopHeader /> <NavBar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/wishList" element={<WishListPage />} />
            <Route path="/product/:id" element={<CurrentProductPage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
