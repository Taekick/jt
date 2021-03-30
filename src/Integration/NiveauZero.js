import React from "react";
import "./grid.scss";

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const NiveauZero = () => {
  return (
    <section className='niveauZero  mb-20'>
      <h2>Niveau 0</h2>
      <ul className='listNumber'>
        {numbers.map((item, index) => {
          return (
            <li key={index} className='listNumber__item'>
              {item}
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default NiveauZero;
