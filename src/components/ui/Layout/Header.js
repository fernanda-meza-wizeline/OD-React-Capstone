import React from "react";
import PropTypes from "prop-types";
import  Button  from "../Button/Button";
import  Search  from "../../forms/Search/Search";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";


const Header = (props) =>{

    return (
      <header>
        <Button style="image" image={props.logo} onClickBtn={props.onClickBtn}/>
        <Search sIcon={faMagnifyingGlass} />
        <Button style="icon" icon={faCartShopping} />
      </header>
    );
  }

Header.propTypes = {
  logo: PropTypes.string,
  onClickBtn: PropTypes.func
};
export default Header;
