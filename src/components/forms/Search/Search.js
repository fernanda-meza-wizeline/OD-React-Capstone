import React from "react";
import PropTypes from "prop-types";
import  Button  from "../../ui/Button/Button";
import "./Search.css";

const Search = ({sIcon}) => {
  return (
    <div>
      <form>
        <input
          type="search"
          className="inputSearch"
          id="search"
          name="search"
          placeholder="Search"
        />
        <Button icon={sIcon} className="searchButton" />
      </form>
    </div>
  );
};

Search.propTypes = {
  sIcon: PropTypes.object,
};
export default Search;
