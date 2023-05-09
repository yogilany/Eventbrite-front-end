import React from "react";
import "./sidebar.css";
import Dropdown from "../Details/Components/Dropdown/Dropdown";
import { AiOutlineHome } from "react-icons/ai";
import { BsCalendar2Date } from "react-icons/bs";
import { HiOutlineClipboardList } from "react-icons/hi";
import { TfiAnnouncement } from "react-icons/tfi";
import { SiSimpleanalytics } from "react-icons/si";
import { FiSettings } from "react-icons/fi";
import { AiOutlineAppstore } from "react-icons/ai";
import { FiHelpCircle } from "react-icons/fi";
import { SiEsphome } from "react-icons/si";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { RiShareCircleFill } from "react-icons/ri";
import { TbNumber1, TbNumber2, TbNumber3, TbNumber4 } from "react-icons/tb";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useContext, useEffect, useState, useRef } from "react";
import { AppContext } from "../Details/Details";
import { Nav } from "react-bootstrap";
// console.log(window.innerWidth);
/**
 * @author Mahmoud Khaled
 * @param {}
 * @description This is sidebar which displayed in Creator Pages (Publish , Details , Basic Info)
 * @returns {JSX.Element}
 */
const OnlyLinksSideBar = ({ HideMenu }) => {
  const orderOptions = ["Order Form", "Order Confirmation", "Waitlist"];
  const Marketing = [
    "Add to Facebook",
    "Email Invitations",
    "Embedded Checkout",
    "Tracking Links",
    "Tracking Pixels",
  ];
  const ManageAttendees = [
    "Orders",
    "Add Attendees",
    "Emails to Attendees",
    "Attendee List",
    "Check-in",
  ];
  const sidebarOptions = useRef();
  const { toggleSidebar, setToggleSidebar } = useContext(AppContext);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleWindowSize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleWindowSize);
    return () => {
      window.removeEventListener("resize", handleWindowSize);
    };
  });
  // useEffect(() => {
  //   let handler = (e) => {
  //     if (!sidebarOptions.current.contains(e.target))
  //       setToggleSidebar(!toggleSidebar);
  //   }
  //   document.addEventListener('mousedown', handler);
  //   return () => {
  //     document.removeEventListener('mousedown', handler);
  //   }
  // })
  return (
    <div className="sidebar">
      <div className="sidebar__links">
        <a href="#">
          <AiOutlineHome className="logo" />
        </a>
        <a href="#">
          <BsCalendar2Date className="logo" />
        </a>
        <a href="#">
          <HiOutlineClipboardList className="logo" />
        </a>
        <a href="#">
          <TfiAnnouncement className="logo" />
        </a>
        <a href="#">
          <SiSimpleanalytics className="logo" />
        </a>
        <a href="#">
          <SiEsphome className="logo" />
        </a>
        <a href="#">
          <FiSettings className="logo" />
        </a>
        <div className="footer">
          <a href="#">
            <AiOutlineAppstore className="logo" />
          </a>
          <a href="#">
            <FiHelpCircle className="logo" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default OnlyLinksSideBar;
