import React from "react";
import PropTypes from "prop-types";

const Image = props => {
  return <img className={props.classes} src={props.src} alt={props.alt} />;
};

Image.propTypes = {
  alt: PropTypes.string,
  src: PropTypes.string.isRequired,
  classes: PropTypes.string
};

export default Image;
