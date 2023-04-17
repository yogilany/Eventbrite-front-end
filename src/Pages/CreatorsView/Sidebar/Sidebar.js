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
// console.log(window.innerWidth);
/**
 * @author Mahmoud Khaled
 * @param {}
 * @description This is sidebar which displayed in Creator Pages (Publish , Details , Basic Info)
 * @returns {JSX.Element}
 */
const Sidebar = () => {
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
        <a href="google.com">
          <AiOutlineHome className="logo" />
        </a>
        <a href="google.com">
          <BsCalendar2Date className="logo" />
        </a>
        <a href="google.com">
          <HiOutlineClipboardList className="logo" />
        </a>
        <a href="google.com">
          <TfiAnnouncement className="logo" />
        </a>
        <a href="google.com">
          <SiSimpleanalytics className="logo" />
        </a>
        <a href="google.com">
          <SiEsphome className="logo" />
        </a>
        <a href="google.com">
          <FiSettings className="logo" />
        </a>
        <div className="footer">
          <a href="google.com">
            <AiOutlineAppstore className="logo" />
          </a>
          <a href="google.com">
            <FiHelpCircle className="logo" />
          </a>
        </div>
      </div>
      {windowWidth > 792 && !toggleSidebar ? (
        <div className="sidebar__Event-options">
          <a
            className="events__link"
            href="google.com"
            style={{ marginLeft: "30px", marginBottom: "15px" }}
          >
            <AiOutlineArrowLeft className="arrowLeft" /> Events
          </a>
          <div
            className="div__line"
            style={{ borderTop: "2px solid grey", width: "100%" }}
          ></div>
          {/* <hr className='line' /> */}
          <a className="draft__btn" href="google.com">
            Draft <MdOutlineKeyboardArrowDown className="arrow__down" />
          </a>
          <a
            style={{ textDecoration: "none", marginTop: "15px" }}
            href="google.com"
            className="event__name"
          >
            <h2
              style={{
                marginLeft: "30px",
                color: "google.com1E0A3C",
                fontSize: "24px",
                fontWeight: "700",
              }}
            >
              mm
            </h2>
          </a>
          <p
            style={{
              marginLeft: "30px",
              fontSize: "14px",
              color: "google.com4b4d63",
              marginTop: "2px",
              fontWeight: "600",
            }}
          >
            Sun, Apr 16, 2023 7:00 PM
          </p>
          <a
            href="google.com"
            style={{
              marginLeft: "30px",
              marginTop: "-8px",
              marginBottom: "15px",
            }}
            className="preview__link"
          >
            Preview your Event <RiShareCircleFill className="share__logo" />
          </a>
          <div
            className="div__line"
            style={{ borderTop: "2px solid grey", width: "100%" }}
          ></div>
          {/* <hr className='line' /> */}
          <div className="routing__options">
            <a href="/basic-info" className="EventOption">
              <TbNumber1 className="number" />
              Basic Info
            </a>
            <a href="/details" className="EventOption">
              <TbNumber2 className="number" />
              Details
            </a>
            <a href="google.com" className="EventOption">
              <TbNumber3 className="number" />
              Tickets
            </a>
            <a href="/publish" className="EventOption">
              <TbNumber4 className="number" />
              Publish
            </a>
          </div>
          <div
            className="div__line"
            style={{ borderTop: "2px solid grey", width: "100%" }}
          ></div>
          {/* <hr className='line' /> */}
          <div>
            <a
              href="/dashboard"
              className="EventOption"
              style={{ fontSize: "14px", fontWeight: "600" }}
            >
              Dashboard
            </a>
            <Dropdown Name="Order Options" Links={orderOptions} />
            <Dropdown Name="Marketing" Links={Marketing} />
            <Dropdown Name="Manage Attendes" Links={ManageAttendees} />
          </div>
          <div
            className="div__line"
            style={{ borderTop: "2px solid grey", width: "100%" }}
          ></div>
          {/* <hr className='line' /> */}
        </div>
      ) : (
        ""
      )}
      {toggleSidebar ? (
        <div
          className="sidebar__Event-options"
          style={{ display: "block", marginTop: "47px" }}
          ref={sidebarOptions}
        >
          <a
            className="events__link"
            href="google.com"
            style={{ marginLeft: "35px", marginBottom: "18px" }}
          >
            <AiOutlineArrowLeft className="arrowLeft" /> Events
          </a>
          {/* <hr className='line' /> */}
          <div
            className="div__line"
            style={{ borderTop: "2px solid grey", width: "100%" }}
          ></div>
          <a
            style={{ textDecoration: "none", marginTop: "15px" }}
            href="google.com"
            className="event__name"
          >
            <h2
              style={{
                marginLeft: "35px",
                color: "google.com1E0A3C",
                marginTop: "15px",
                fontWeight: "700",
              }}
            >
              mm
            </h2>
          </a>
          <p
            style={{
              marginLeft: "35px",
              fontSize: "14px",
              color: "google.com4b4d63",
              marginTop: "2px",
              fontWeight: "600",
            }}
          >
            Sun, Apr 16, 2023 7:00 PM
          </p>
          <a
            href="google.com"
            style={{
              marginLeft: "35px",
              marginTop: "-8px",
              marginBottom: "15px",
            }}
            className="preview__link"
          >
            Preview your Event <RiShareCircleFill className="share__logo" />
          </a>
          {/* <hr className='line' /> */}
          <div
            className="div__line"
            style={{ borderTop: "2px solid grey", width: "100%" }}
          ></div>
          <div className="routing__options">
            <a href="google.com" className="EventOption">
              <TbNumber1 className="number" />
              Basic Info
            </a>
            <a href="google.com" className="EventOption">
              <TbNumber2 className="number" />
              Details
            </a>
            <a href="google.com" className="EventOption">
              <TbNumber3 className="number" />
              Tickets
            </a>
            <a href="google.com" className="EventOption">
              <TbNumber4 className="number" />
              Publish
            </a>
          </div>
          {/* <hr className='line' /> */}
          <div
            className="div__line"
            style={{ borderTop: "2px solid grey", width: "100%" }}
          ></div>
          <div>
            <a
              href="/dashboard"
              className="EventOption"
              style={{ fontWeight: "500" }}
            >
              Dashboardd
            </a>
            <Dropdown Name="Order Options" Links={orderOptions} />
            <Dropdown Name="Marketing" Links={Marketing} />
            <Dropdown Name="Manage Attendes" Links={ManageAttendees} />
          </div>
          {/* <hr className='line' /> */}
          <div
            className="div__line"
            style={{ borderTop: "2px solid grey", width: "100%" }}
          ></div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Sidebar;
