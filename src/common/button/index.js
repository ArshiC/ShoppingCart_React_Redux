import React from "react";
import "./style.scss";

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
