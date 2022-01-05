import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const index = ({ childern }) => {
  return (
    <div>
      <Header />
      {childern}
      <Footer />
    </div>
  );
};

export default index;
