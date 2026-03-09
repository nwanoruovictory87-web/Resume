import React, { useState } from "react";

function Test2() {
  const [inputName, setInputName] = useState("");
  const changeName = (element) => {
    setInputName(element.target.value);
  };
  return (
    <>
      <input type="text" value={inputName} onChange={changeName}></input>
      <p>Name: {inputName}</p>
    </>
  );
}
export default Test2;
