import React from "react";
import PropTypes from "prop-types";

const Search = ({ handleSearch }) => (
  <div className="search">
    <input
      type="search"
      placeholder="Busque um usuário"
      onKeyUp={handleSearch}
    />
  </div>
);

Search.propTypes = {
  handleSearch: PropTypes.func.isRequired
};

export default Search;
