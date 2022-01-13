import React from "react";

const ErrorFlag = ({ message, width, marginTop }) => {
  return (
    <div
      className="error-flag__container"
      style={{ width: width, marginTop: marginTop }}
    >
      <p className="error-flag__message">{message}</p>
    </div>
  );
};

export default ErrorFlag;
