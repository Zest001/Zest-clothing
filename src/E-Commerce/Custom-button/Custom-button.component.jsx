import React from "react";
import "../Custom-button/Custom-button.style.scss";

const CustomeButton = ({ children, isGoogleSignin, ...otherProps }) => {
  return (
    <button
      className={`${isGoogleSignin ? "google-signin" : ""} custom-button`}
      {...otherProps}
    >
      {children.toUpperCase()}
    </button>
  );
};

export default CustomeButton;
