import React from "react";

import "./CustomLabel.css";

const CustomLabel = props => {
  return (
    <label className="custom-label" {...props}>
      {props.children}
    </label>
  );
};

export default CustomLabel;
