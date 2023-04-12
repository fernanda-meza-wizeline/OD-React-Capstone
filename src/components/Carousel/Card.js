import React from "react";
import PropTypes from "prop-types";
import "./Card.css";

const Card = ({cardType, imageUrl, altText, title, width, height, productName, productPrice, productCategory}) => {

    if (cardType === "category") {
      return(
        <div className="card">
          <img
            src={imageUrl}
            alt={altText}
            className="categoryImage"
          />
          <div className="categoryNameBox">
            <h2>{title}</h2>
          </div>
        </div>
      );
    } 
    else{


      return(
        <div className="productCard">
          <img
            src={imageUrl}
            alt={altText}
            className="productImage"
            width={width}
            height={height}
          />
          <div className="quickDescription">
            <div className="productName">{productName}</div>
            <div className="productPrice">$ {productPrice}</div>
            <div className="productCategory">{productCategory}</div>
          </div>
        </div>
      );
    }
  };

Card.propTypes = {
  cardType: PropTypes.string,
  imageUrl: PropTypes.string,
  altText: PropTypes.string,
  title: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  productName: PropTypes.string,
  productPrice: PropTypes.number,
  productCategory: PropTypes.string,
};

export default Card;
