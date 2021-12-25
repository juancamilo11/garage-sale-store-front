import React from "react";

const ErrorFlag = ({ message, width }) => {
  return (
    <div className="error-flag__container" style={{ width: width }}>
      <p className="error-flag__message">{message}</p>
    </div>
  );
};

export default ErrorFlag;
