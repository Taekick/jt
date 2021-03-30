/* eslint-disable array-callback-return */
import React from "react";

const DecodeMethod = () => {
  const decode = (encodedMessage) => {
    const groupNumbers = encodedMessage.split(" ");
    let result = [];
    groupNumbers.map((num) => {
      let somme = 0;
      for (let i = 0; i < num.length; i++) {
        somme += parseInt(num[i]);
      }
      result = [...result, String.fromCharCode(somme)];
    });
    return result.join("");
  };

  console.log(
    decode(
      "361581732726247521644353 4161492813593986955 84654117917337166147521"
    )
  );
  return <div></div>;
};

export default DecodeMethod;
