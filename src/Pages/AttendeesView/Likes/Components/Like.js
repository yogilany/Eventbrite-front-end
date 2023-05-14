import React from 'react'
import './like.css'
import { FiShare } from "react-icons/fi"
import { BsFillSuitHeartFill } from "react-icons/bs"
import { useGetEventByIdQuery } from "src/features/api/eventApi";
import LikeButton from "src/Components/LikeButton/LikeButton";
import { useNavigate } from "react-router";
const Like = ({event}) => {
  const { data: likedEvent } = useGetEventByIdQuery(event.id);
  const navigate = useNavigate();
  const hhh = () => {
    navigate(`/event/${event.id}`);
  };
  return (
    <div className="like__container" onClick={hhh} style={{cursor:"pointer"}}>
      <div className="like__container-left" >
        <p className="title">{event.title}</p>
        <div className="date" style = {{marginLeft:'0px'}}>{new Date(likedEvent?.date_and_time?.end_date_time)
            .toUTCString()
            .slice(0, -7)}</div>
        <div className="location" style = {{marginLeft:'0px'}}>{likedEvent?.location?.city}</div>
        <div className="price" style = {{marginLeft:'0px'}}>{likedEvent?.is_free === true
            ? "Free"
            : `Starts at $${likedEvent?.price}`}</div>
      </div>
      <div className="like__container-right">
        <div className="like__container-right-img">
          <img src={event.image_link} alt="likePhoto" />
        </div>
        <div className="like__container-right-icons">
          <button className='share-btn'><FiShare /></button>
          <button className='like-btn'><LikeButton id={event.id} /></button>
        </div>
      </div>
    </div>
  );
}

export default Like