import React from "react";
import "./grid.scss";
const NiveauUn = () => {
  //   const numbers = [1, [21, 22, 23, 24], 2, 3, 4, 5, 6, 7, [71, 72, 73, 74], 8];

  return (
    <section className='niveauUn'>
      <h2>Niveau 1</h2>
      <ul className='listNumber'>
        <li className='listNumber__item'>1</li>
        <li className='listNumber__item'>
          <ul className='listSubNumber'>
            <li className='listSubNumber__item'>21</li>
            <li className='listSubNumber__item'>22</li>
            <li className='listSubNumber__item'>23</li>
            <li className='listSubNumber__item'>24</li>
          </ul>
        </li>
        <li className='listNumber__item'>2</li>
        <li className='listNumber__item'>3</li>
        <li className='listNumber__item'>4</li>
        <li className='listNumber__item'>5</li>
        <li className='listNumber__item'>6</li>
        <li className='listNumber__item'>7</li>
        <li className='listNumber__item'>
          <ul className='listSubNumber'>
            <li className='listSubNumber__item'>71</li>
            <li className='listSubNumber__item'>72</li>
            <li className='listSubNumber__item'>73</li>
            <li className='listSubNumber__item'>74</li>
          </ul>
        </li>
        <li className='listNumber__item'>8</li>
      </ul>
    </section>
  );
};

export default NiveauUn;
