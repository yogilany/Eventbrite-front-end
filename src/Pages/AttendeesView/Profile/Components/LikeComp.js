import React from "react";
import "./LikeComp.css";
import eventphoto from "../../../../assets/like3.jpeg";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { FiShare } from "react-icons/fi";
import { BorderColor } from "@mui/icons-material";
import {likeEvent,unlikeEvent} from "../../../../features/userprofSlice";
import { useSelector } from "react-redux";
import { getUserDetails, logOut, selectUserAvatarURL, selectUserEmail, selectUserFirstName, selectUserLastName, selectUserToken } from "../../../../features/authSlice";
/**
 * @author Ziad Ezzat
 * @param {string} props.data_testid
 * @description This container shows the like component used in profile page showing The liked event with some information of this event like date and location.
 * @returns {JSX.Element of like component found in profile page}
 */
const LikeComp = (props) => {
  const [imgSrc, setImgSrc] = React.useState(props.image_link);
  const token = useSelector(selectUserToken);
  const [isClicked, setIsClicked] = React.useState(false);
  const handleClick = () => {
    setIsClicked(!isClicked);
    if (!isClicked)
    {
      likeEvent(token,props.id);
    }
    else{
      unlikeEvent(token,props.id);
    }
  };
  const handleImgError = () => {
    setImgSrc(eventphoto);
  };
  const ht_proff =  {
    color: isClicked ? 'grey' : '#d10000',

  }
  return (
    <div className="box_prof" data-testid={props.data_testid}>
      <div className="cont_prof">
        <img className="img_prof" src={imgSrc} onError={handleImgError} />
        <div className="circle_prof">
          <BsFillSuitHeartFill className="ht_prof" style={ht_proff} onClick={handleClick} />
        </div>
      </div>

      <div style={{ marginTop: 25, paddingLeft: 10 }}>
        <div className="desc_prof">
          {props.title}
        </div>
        <div className="dat_prof">{props.start_date_time}</div>
        <div className="det_prof">GoMyCode Dokki ,Ad Doqi A</div>
      </div>
      <div style={{ display: "flex" }}>
        <div className="dfrt_prof">Free</div>
        <FiShare className="shr_prof" />
      </div>
    </div>
  );
};

export default LikeComp;
