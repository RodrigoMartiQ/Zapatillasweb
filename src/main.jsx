import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/style.css";
import Hero from "./sections/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Trending from "./sections/trending/Trending";
import Photomodel from "./sections/photomodel/Photomodel";
import Arrivals from "./sections/arrivals/Arrivals";


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <Navbar />
    <Hero />
    <Trending />
    <Photomodel/>
    <Arrivals/>
  </>
);
