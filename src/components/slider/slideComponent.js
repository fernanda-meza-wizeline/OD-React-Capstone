import React from "react";
import PropTypes from 'prop-types';
import "../../assets/slide.css";

const Slide = (props) =>{

    return (
      <div className={props.class}>
        <img
          className={props.class + "SlideImage"}
          src={props.imageUrl}
          alt={props.altText}
        />
        <div className={props.class + "Block"}>
          <span className={props.class + "SlideTitle"}>
            {props.title}
          </span>
          <p className={props.class + "SlideDescription"}>
            {props.description}{" "}
          </p>
        </div>
      </div>
    );
};

Slide.propTypes = {
    className : PropTypes.string,
    class : PropTypes.string,
    imageUrl : PropTypes.string,
    altText : PropTypes.string,
    title : PropTypes.string,
    description : PropTypes.string
  };
export default Slide;
