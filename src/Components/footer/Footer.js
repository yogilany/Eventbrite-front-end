import React from 'react'
import { RiCopyrightLine } from "react-icons/ri";
import { BsDot } from 'react-icons/bs'
import FooterLink from '../footerLink/FooterLink';
import './footer.css'
const Footer = () => {
  return (
    <div className="footer__container">
      <div className="footer__container-left">
        <RiCopyrightLine className="copyright" />
        <p>2023 Eventbrite</p>
      </div>
      <div className="footer__container-links">
        <FooterLink Name="About" />
        <FooterLink Name="Blog" />
        <FooterLink Name="Help" />
        <FooterLink Name="Careers" />
        <FooterLink Name="Press" />
        <FooterLink Name="Investors" />
        <FooterLink Name="Security" />
        <FooterLink Name="Developers" />
        <FooterLink Name="Terms" />
        <FooterLink Name="Privacy" />
        <FooterLink Name="CA Privacy Notice" />
        <FooterLink Name="Accessibility" />
        <FooterLink Name="Cookies" />
        <FooterLink Name="Cookie Consent" />
      </div>
      <div className='footer__container-select'>
        <select className='options'>
          <option>United states</option>
        </select>
      </div>
    </div>
  );
}

export default Footer