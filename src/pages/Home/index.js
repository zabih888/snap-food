import React from "react";
import AppHome from "./AppHome";
import BusinessHome from "./BusinessHome";
import CateqoryHome from "./CateqoryHome";
import HeroHome from "./HeroHome";

const Home = () => {
  return (
    <div>
      <HeroHome />
      <CateqoryHome />
      <AppHome />
      <BusinessHome />
    </div>
  );
};

export default Home;
