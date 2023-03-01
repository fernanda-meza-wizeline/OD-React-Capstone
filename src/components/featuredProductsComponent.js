import React from "react";
import PropTypes from "prop-types";
import Card  from "./ui/cardComponent";
import "../assets/featuredProductComponent.css";

const FeaturedProducts = (props) => {
  const products = props.products.results;
  return (
    <div className="featuredProducts">
      <h1>Featured Products</h1>
      <div className="parent">
        {products.map((product, id) => (
          <Card
            key={id}
            cardType="product"
            imageUrl={product.data.mainimage.url}
            productName={product.data.name}
            productCategory={product.data.category.slug}
            productPrice={product.data.price}
            width="300"
            height="300"
          />
        ))}
      </div>
    </div>
  );
};
FeaturedProducts.propTypes = {
  products: PropTypes.object,
};
export default FeaturedProducts;
