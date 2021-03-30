import React from "react";

const ResultElement = ({ item }) => {
  return (
    <div className='resultElementContain'>
      <h3>{item.name}</h3>
      <ul className='tagItemList'>
        {item.tag.map((tagelmt, i) => {
          return (
            <li key={i} className='tagItemList__item'>
              {tagelmt.tagName}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ResultElement;
