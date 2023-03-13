import React from "react";
import { BsDot } from "react-icons/bs";
import "./footerLink.css";
const FooterLink = ({ Name, to }) => {
  return (
    <div className="footer__container-link">
      <a href={to}>{Name} </a>
      <BsDot className="dot" />
    </div>
  );
};

export default FooterLink;
