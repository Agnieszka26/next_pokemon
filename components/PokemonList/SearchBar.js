import React from "react";
//import { SearchBox } from "./SearchBar.styles";

const SearchBar = ({ searchTerm, handleChangeSearch, placeholder }) => {
  return (
    <div>
      <input
        value={searchTerm}
        onChange={handleChangeSearch}
        placeholder={placeholder}
      />
    </div>
  );
};
export { SearchBar };
