import React from 'react'
import './Headerpub.css'
import Logo from '../../assets/logo.png'
import { AiOutlineSearch } from 'react-icons/ai'
import { RiArrowDownSLine } from 'react-icons/ri'
import { CgProfile } from 'react-icons/cg'
const Headerpub = () => {
    return (
        <div className="header__container">
            <div className="header__container-left">
                <img src={Logo} alt="headerLogo" />
            </div>
            <div className="header__container-links">
                <div className="header__container-link">
                    <a href="#"style={{color:'black'}}><b>Preview your event</b></a>
                </div>
                <div className="header__container-link">
                    <a href="#"style={{color:'black'}}><b>More</b></a>
                    <RiArrowDownSLine />
                </div>   
                <div className="header__container-link-p">
                    <CgProfile className='profile' />
                    <a href="#"style={{color:'black'}}><b>Ziad Elsamadony</b> </a>
                    <RiArrowDownSLine />
                </div>
            </div>
        </div>
    );
}

export default Headerpub