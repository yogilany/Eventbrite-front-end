import React from "react";
import "./Headerpub.css";
import Logo from "../../assets/logo.png";
import { HiOutlineSwitchHorizontal } from "react-icons/hi";
import { VscAccount } from "react-icons/vsc";
import { BiLogOut } from "react-icons/bi";
import { MdOutlineKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { useState } from "react";

/**
 * @author Ziad Ezzat
 * @param {string} props.data_testid
 * @description This container shows header of the page.
 * @returns {JSX.Element of Header component found in publish page}
 */
const Headerpub = (props) => {
  const [showAccountSetting, setShowAccountSetting] = useState(false);

  return (
    <div className="header_container" data-testid={props.data_testid}>
      <div className="header_container-left">
        <img src={Logo} alt="headerLogo" />
      </div>
      <div
        className="header__container-right"
        style={{ marginLeft: "-15px" }}
        onClick={() => setShowAccountSetting(!showAccountSetting)}
      >
        <div className="circular__name">MK</div>
        <div className="user__name" style={{ cursor: "pointer" }}>
          Mahmoud Khaled{" "}
          {showAccountSetting ? (
            <MdKeyboardArrowUp className="arrow" />
          ) : (
            <MdOutlineKeyboardArrowDown className="arrow" />
          )}
        </div>
        {showAccountSetting && (
          <div className="account__dropdown">
            <div className="account__dropdown-item">
              <HiOutlineSwitchHorizontal className="account__logo" />{" "}
              <a href="/" style={{ fontWeight: "500" }}>
                Switching to attending
              </a>
            </div>
            <div className="account__dropdown-item">
              <VscAccount className="account__logo" />{" "}
              <a href="google.com" style={{ fontWeight: "500" }}>
                Account Settings
              </a>
            </div>
            <hr style={{ marginBottom: "3px", marginTop: "5px" }}></hr>
            <div className="account__dropdown-item">
              <BiLogOut className="account__logo" />{" "}
              <a href="google.com" style={{ fontWeight: "500" }}>
                Log out
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Headerpub;
