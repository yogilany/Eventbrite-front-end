import React from 'react'
import './sidebar.css'
import Dropdown from '../../Pages/Details/Components/Dropdown/Dropdown'
import { AiOutlineHome } from "react-icons/ai";
import { BsCalendar2Date } from 'react-icons/bs'
import { HiOutlineClipboardList } from 'react-icons/hi'
import { TfiAnnouncement } from "react-icons/tfi";
import { SiSimpleanalytics } from 'react-icons/si'
import { FiSettings } from 'react-icons/fi'
import { AiOutlineAppstore } from 'react-icons/ai'
import { FiHelpCircle } from 'react-icons/fi'
import { SiEsphome } from 'react-icons/si'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { RiShareCircleFill } from 'react-icons/ri'
import { TbNumber1, TbNumber2, TbNumber3, TbNumber4 } from "react-icons/tb";
const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="sidebar__links">
            <a href = "#"><AiOutlineHome className='logo' /></a>
            <a href = "#"><BsCalendar2Date className='logo'  /></a>
            <a href = "#"><HiOutlineClipboardList className='logo' /></a>
            <a href = "#"><TfiAnnouncement className='logo' /></a>
            <a href = "#"><SiSimpleanalytics className='logo' /></a>
            <a href = "#"><SiEsphome className='logo' /></a>
            <a href = "#"><FiSettings className='logo' /></a>
            <div className='footer'>
                <a href = "#"><AiOutlineAppstore className='logo' /></a>
                <a href = "#"><FiHelpCircle className='logo' /></a>
            </div>
        </div>
        <div className='sidebar__Event-options'>
            <a className = "events__link" href = "#" style = {{marginLeft:'35px'}}><AiOutlineArrowLeft className='arrowLeft' /> Events</a>
            <div className='line'><hr /></div>
            <a style={{textDecoration:'none' , marginTop:'2px'}} href = "#" className="event__name"><h2 style = {{marginLeft:'35px', color: "#1E0A3C"}}>MK</h2></a>
            <p style = {{marginLeft:'35px',fontSize:'14px',color: "#4b4d63",marginTop:"2px",fontWeight:'600'}}>Sun, Apr 16, 2023 7:00 PM</p>
            <a href = "#" style = {{marginLeft:'35px' , marginTop:'-8px'}} className = "preview__link">Preview your Event <RiShareCircleFill className='share__logo'/></a>
            <div className='line'><hr /></div>
            <div className='routing__options'>
                <a href = "#" className='EventOption'><TbNumber1 className='number'/>Basic Info</a>
                <a href = "#" className='EventOption'><TbNumber2 className='number'/>Details</a>
                <a href = "#" className='EventOption'><TbNumber3 className='number'/>Tickets</a>
                <a href = "#" className='EventOption'><TbNumber4 className='number'/>Publish</a>
            </div>
            <div className='line' style = {{marginTop:'-3px'}}><hr /></div>
            <div>
                <a href = "#" className='EventOption' style={{fontWeight:'500'}}>Dashboard</a>
                <Dropdown Name = "Order Options" />
                <Dropdown Name = "Marketing" />
                <Dropdown Name = "Manage Attendes" />
            </div>
            <div className='line' style = {{marginTop:'-3px'}}><hr /></div>
          </div>
    </div>
  );
}

export default Sidebar