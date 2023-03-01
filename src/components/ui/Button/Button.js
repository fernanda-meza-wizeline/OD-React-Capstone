import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Button.css";

const Button = ({ text, style, image, icon, onClickBtn }) => {
  if (image) {
    return (
      <button className={style} onClick={onClickBtn}>
        <img src={image} alt="logo"></img>
      </button>
    );
  }
  if (icon) {
    return (
      <button className={style} onClick={onClickBtn}>
        <FontAwesomeIcon icon={icon} />
      </button>
    );
  }
  return (
    <button className={style} onClick={onClickBtn}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  style: PropTypes.string,
  icon: PropTypes.object,
  image: PropTypes.string,
  onClickBtn: PropTypes.func,
};

export default Button;
