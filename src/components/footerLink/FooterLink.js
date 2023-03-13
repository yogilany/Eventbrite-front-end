import React from 'react'
import { BsDot } from "react-icons/bs";
import './footerLink.css'
const FooterLink = ({Name}) => {
  return (
    <div className="footer__container-link">
      <a href="#">{Name} </a>
      <BsDot className="dot" />
    </div>
  );
}

export default FooterLink