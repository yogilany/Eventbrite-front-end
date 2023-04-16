import React from 'react'
import './follow.css'
import { useState } from 'react';
import { FiShare } from "react-icons/fi";
import { BsFillSuitHeartFill } from "react-icons/bs";
const Follow = ({ Title, Date, Location, Price, Photo }) => {
  const [clicked, setClicked] = useState(false);
  return (
    <div className='follow__container'>
      <div className="follow__container-left">
        <p className="title" style={{marginLeft:'0px'}}>{Title}</p>
        <p className="date" style={{marginLeft:'0px'}}>{Date}</p>
        <p className="location" style={{marginLeft:'0px'}}>{Location}</p>
        <p className="price" style={{marginLeft:'0px'}}>{Price}</p>
      </div>
      <div className="follow__container-right">
        <div className="follow__container-right-img">
          <img src={Photo} alt="likePhoto" />
        </div>
        <div className="follow__container-right-icons">
          <button className='share-btn'><FiShare /></button>
          <button className={`like-btn ${clicked ? "color-btn" : ''}`}  onClick = {() => setClicked(!clicked)} ><BsFillSuitHeartFill/></button>
        </div>
      </div>
    </div>
  )
}

export default Follow