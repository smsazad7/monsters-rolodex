import React from "react";
import "./searchBoox.css";

export const SearchBoox = ({ handleSearch, placeholder }) => {
  return (
    <div>
      <input
        className="search"
        type="search"
        placeholder={placeholder}
        onChange={handleSearch}
      />
    </div>
  );
};
