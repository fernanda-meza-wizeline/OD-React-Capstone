import React from 'react';
import {Card} from './Elements/cardComponent.js';
import "./featuredProductComponent.css";

const FeaturedProducts = (props) => {
    const products=props.products.results;
    return(
        <div className="featuredProducts">
            <h1>Featured Products</h1>
            <div className="parent">
           {products.map((t, index) => 
            <Card key={index} cardType="product" imageUrl={t.data.mainimage.url} productName={t.data.name} productCategory={t.data.category.slug} productPrice={t.data.price} width="300" height="300"/>
          )}
          </div>
        </div>
    )
}
export default FeaturedProducts;