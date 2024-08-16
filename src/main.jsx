import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./sections/navbar/Navbar";
import "./styles/style.css"
import Hero from "./sections/hero/Hero";



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
  <Navbar/>
  <Hero/>
  </>
);