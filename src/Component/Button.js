import React from "react";
import "../App.css";

const Button = ({ name, onclick }) => {
  return <button className ="myButton" onClick={() => onclick()}>{name}</button>;
};

export default Button;
