import React from "react";
import PropTypes from "prop-types";
import Card  from "./Carousel/Card";
import "../assets/featuredProductComponent.css";

const FeaturedProducts = (props) => {
  let products = props.products.results;
  if(props.category){
    products = products.filter(product => {
      return product.data.category.slug===props.category
    });
  }
  return (
    <div className="featuredProducts">
      <h1>Featured Products</h1>
      <div className="parent">
        {products.map((product, id) => {
          if(props.category?.includes(product.data.category.slug)){
            return(
              <Card
                key={id}
                cardType="product"
                imageUrl={product.data.mainimage.url}
                productName={product.data.name}
                productCategory={product.data.category.slug}
                productPrice={product.data.price}
                width="300"
                height="300"
          />);
        }else{
          return null;
        }
      })}
      </div>
    </div>
  );
};
FeaturedProducts.propTypes = {
  products: PropTypes.object,
  category: PropTypes.string
};
export default FeaturedProducts;
