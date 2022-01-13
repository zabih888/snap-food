import React from "react";
import AppHome from "./AppHome";
import BusinessHome from "./BusinessHome";
import CateqoryHome from "./CateqoryHome";
import Products from "./Products";
import HeroHome from "./HeroHome";
import Footer from "../../components/Layout/Footer";
import HeaderShow from "../../components/Layout/HeaderShow";
const Home = () => {
  return (
    <div>
      <HeaderShow />
      <HeroHome />
      <CateqoryHome />
      <Products />
      <AppHome />
      <BusinessHome />
      <Footer />
    </div>
  );
};

export default Home;
