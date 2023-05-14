import React from 'react'
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import './Dropdown.css'
import { useState } from 'react'
const Dropdown = ({Name , Links}) => {
  const [toggleBtn, setToggleBtn] = useState(false);
  // console.log(Links)
  return (
    <div className = "Dropdown">
      <a data-testid = "dropdownLink" href="#" className='drop__btn' onClick={() => setToggleBtn(!toggleBtn)}>{Name} {toggleBtn ? <AiOutlineArrowUp className = "arrow__Logo"  /> : <AiOutlineArrowDown className = "arrow__Logo" />}</a>
      {toggleBtn &&
        <div className='linkss' data-testid="dropdownLinks">
          {/* {Links.map((Link, i) => { return <a  >{Link}</a>})} */}
        </div>}
    </div>
  )
}
export default Dropdown

