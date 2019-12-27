import React from "react";

import "./CustomButton.css";

const CustomButton = props => {
  return (
    <button className="custom-button" {...props}>
      {props.children}
    </button>
  );
};

export default CustomButton;
