import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="footer-padding">
      <div className="footer">
        <p>Copyright &copy; JayRt, {year}</p>
      </div>
    </div>
  );
};

export default Footer;
