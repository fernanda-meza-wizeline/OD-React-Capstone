import React from "react";
import Header from "./components/headerComponent";
import Footer from "./components/footerComponent";
import Slider from "./components/slider/sliderComponent";
import FeaturedProducts from "./components/featuredProductsComponent";
import "./App.css";
import Logo from "./assets/logo.svg";
import categoriesMock from "./mocks/en-us/product-categories.json";
import featuredBannersMock from "./mocks/en-us/featured-banners.json";
import featuredProductsMock from "./mocks/en-us/featured-products.json";

function App() {
  return (
    <div className="App">
      <Header className="header" logo={Logo} />
      <Slider elements={featuredBannersMock.results} />
      <Slider elements={categoriesMock.results} />
      <FeaturedProducts products={featuredProductsMock} />
      <Footer />
    </div>
  );
}

export default App;
