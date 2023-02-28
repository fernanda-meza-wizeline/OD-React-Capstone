import React from "react";
import PropTypes from "prop-types";
import  Button  from "./ui/buttonComponent";
import  Search  from "./forms/searchComponent";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";


const Header = (props) =>{
    return (
      <header>
        <Button className="image" image={props.logo} />
        <Search sIcon={faMagnifyingGlass} />
        <Button className="icon" icon={faCartShopping} />
      </header>
    );
  }

Header.propTypes = {
  logo: PropTypes.string,
};
export default Header;
