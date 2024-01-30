import React from "react";

const ErrorMessage = ({ children }) => {
  return (
    <span className={children !== "" ? "text-sm text-red-600" : "hidden"}>
      {children}
    </span>
  );
};

export default ErrorMessage;
