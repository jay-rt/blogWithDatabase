import React from "react";

const NotFound = () => {
  return (
    <>
      <img
        className="error-img img-fluid"
        src="/images/error.svg"
        alt="404 Page Not Found Error"
      />
      <p className="error-img-credit">
        Image Credit:{" "}
        <a href="https://storyset.com" target="_blank" rel="noreferrer">
          Storyset
        </a>
      </p>
    </>
  );
};

export default NotFound;
