import React from "react";

const SearchBar = ({ searchValue }) => {
  return (
    <input
      type='text'
      placeholder='filter by tags'
      onChange={searchValue}
      className='mb-20'
    />
  );
};

export default SearchBar;
