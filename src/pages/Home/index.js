import React from "react";
import AppHome from "./AppHome";
import BusinessHome from "./BusinessHome";
import CateqoryHome from "./CateqoryHome";
import HeroHome from "./HeroHome";
import Header from "../../components/Layout/Header";
import Footer from "../../components/Layout/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <div>
        <HeroHome />
        <CateqoryHome />
        <AppHome />
        <BusinessHome />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
