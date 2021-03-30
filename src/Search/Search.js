import React, { useState } from "react";
import ResultElement from "./ResultElement";
import SearchBar from "./SearchBar";
import elements from "./elements.json";
import "./Search.scss";
const Search = () => {
  const [input, setInput] = useState("");

  const searchValue = (e) => {
    setInput(e.target.value);
  };

  return (
    <div>
      <SearchBar searchValue={searchValue} />

      <ul className='resultList'>
        {elements.map((item, index) => {
          return item.tag.map((tagElement, i) => {
            if (!tagElement.tagName.includes(input)) {
              return "";
            } else {
              return (
                <li key={`item-${index}`} className='resultElement'>
                  <ResultElement item={item} />
                </li>
              );
            }
          });
        })}
      </ul>
    </div>
  );
};

export default Search;
