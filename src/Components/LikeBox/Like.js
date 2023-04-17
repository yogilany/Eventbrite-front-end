import React from 'react'
import './like.css'
import { FiShare } from "react-icons/fi"
import { BsFillSuitHeartFill } from "react-icons/bs"
const Like = ({Title , Date , Location , Price , Photo}) => {
  return (
    <div className="like__container">
      <div className="like__container-left">
        <p className="title">{Title}</p>
        <p className="date">{Date}</p>
        <p className="location">{Location}</p>
        <p className="price">{Price}</p>
      </div>
      <div className="like__container-right">
        <div className="like__container-right-img">
          <img src={Photo} alt="likePhoto" />
        </div>
        <div className="like__container-right-icons">
          <button className='share-btn'><FiShare /></button>
          <button className='like-btn'><BsFillSuitHeartFill /></button>
        </div>
      </div>
    </div>
  );
}

export default Like