import React from "react";
import Announce from "../components/Announce";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from "../components/Nav";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <div>
      <Announce />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
