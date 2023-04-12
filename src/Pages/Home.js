import React from "react";
import Slider from "../components/Slider/Slider";
import FeaturedProducts from "../components/featuredProductsComponent";
import categoriesMock from "../mocks/en-us/product-categories.json";
import featuredBannersMock from "../mocks/en-us/featured-banners.json";
import featuredProductsMock from "../mocks/en-us/featured-products.json";
function Home() {
    return (
        <div className="ProductList">
<Slider elements={featuredBannersMock.results} />
<Slider elements={categoriesMock.results} />
<FeaturedProducts products={featuredProductsMock} />

</div>
    );
}

export default Home;