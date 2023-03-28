import React from 'react'
import './Headerpub.css'
import Logo from '../../assets/logo.png'
import { AiOutlineSearch } from 'react-icons/ai'
import { RiArrowDownSLine } from 'react-icons/ri'
import { CgProfile } from 'react-icons/cg'
/**
 * @author Ziad Ezzat
 * @param {string} props.data_testid
 * @description This container shows header of the page.
 * @returns {JSX.Element of Header component found in publish page} 
 */
const Headerpub = (props) => {
    return (
        <div className="header_container" data-testid={props.data_testid}>
            <div className="header_container-left">
                <img src={Logo} alt="headerLogo" />
            </div>
            <div className="header_container-links">
                <div className="header_container-link">
                    <a href="#"style={{color:'black'}}><b>Preview your event</b></a>
                </div>
                <div className="header_container-link">
                    <a href="#"style={{color:'black'}}><b>More</b></a>
                    <RiArrowDownSLine />
                </div>   
                <div className="header_container-link-p">
                <div className='cir'>ZE</div>
                    <a href="#"style={{color:'black',marginLeft:8,fontSize:13,fontWeight:350}}><b>Ziad Elsamadony</b> </a>
                    <RiArrowDownSLine style={{marginTop:5,marginLeft:3}} />
                </div>
            </div>
        </div>
    );
}

export default Headerpub