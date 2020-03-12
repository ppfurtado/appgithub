import React from "react";
import { Input } from "../style";
import PropTypes from "prop-types";

const Search = ({ handleSearch }) => (
  <div className="search">
    <Input
      type="search"
      placeholder="Busque um usuário do GitHub"
      onKeyUp={handleSearch}
    />
  </div>
);

Search.propTypes = {
  handleSearch: PropTypes.func.isRequired
};

export default Search;
