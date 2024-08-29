import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/style.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home/Home";
import Store from "./pages/Store/Store";
import Cart from "./pages/Cart/Cart";
import Favorites from "./pages/Favorites/Favorites";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/store" element={<Store />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/favorites" element={<Favorites />} />
    </Routes>
    <Footer />
  </Router>
);
