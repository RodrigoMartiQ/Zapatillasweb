import React from "react";
import Hero from "../sections/hero/Hero";
import Trending from "../sections/trending/Trending";
import Photomodel from "../sections/photomodel/Photomodel";
import Arrivals from "../sections/arrivals/Arrivals";
import Miembro from "../sections/miembro/Miembro";

const Home = () => {
  return (
    <>
      <Hero />
      <Trending />
      <Photomodel />
      <Arrivals />
      <Miembro />
    </>
  );
};

export default Home;