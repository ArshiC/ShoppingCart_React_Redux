import React from "react";
import "./style.css";

const Button = props => {
  return (
    <button
      className={`btn btn-sm btn-${props.buttonType}`}
      onClick={props.action}
    >
      {props.name}
    </button>
  );
};
export default Button;
