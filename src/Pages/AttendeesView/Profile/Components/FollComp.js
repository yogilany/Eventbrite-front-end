import React from "react";
import "./FollComp.css";
import eventphoto from "../../../../assets/like3.jpeg";
import emptyprofile from "../../../../assets/emptyprofile.png";
import { useSelector } from "react-redux";
import { getUserDetails, logOut, selectUserAvatarURL, selectUserEmail, selectUserFirstName, selectUserLastName, selectUserToken } from "../../../../features/authSlice";
import {FollowEvent,unFollowEvent} from "../../../../features/userprofSlice";
/**
 * @author Ziad Ezzat
 * @param {string} props.text
 * @param {string} props.data_testid
 * @description This is container for Following box found in Profile page showing following pages and it takes text as props to show name of the page that user is following
 * @returns {JSX.Element of following component used in Profile Page}
 */
const FollComp = (props) => {
  const token = useSelector(selectUserToken);
  const [userFullName, setUserFullName] = React.useState(props.firstname + " " + props.lastname)
  const [imgSrc, setImgSrc] = React.useState(props.avatar);
  const handleImgError = () => {
    setImgSrc(emptyprofile);
  };
  const [isfollowing, setisfollowing] = React.useState("Following");
  const handleClick = () => {
    if (isfollowing==="Following")
    {
      setisfollowing("Follow");
      console.log("ID with unfollow :",props.id);
      console.log("Token with unfollow :",token);
      unFollowEvent(token,props.id);

    }
    else{
      setisfollowing("Following");
      //console.log("Token with unlike :",token);
      //console.log("id with unlike :",props.id);
      FollowEvent(token,props.id);
    }
  };
  return (
    <div
      style={{ display: "flex", marginTop: 10}}
      data-testid={props.data_testid}
    >
      <img
        onError={handleImgError}
        src={imgSrc}
        alt="profilelogo"
        style={{ width: 65, height: 65 , borderRadius:"50%" }}
      />
      <h5 style={{ marginTop: 20, fontSize: 17 , width:'200px' }}>{userFullName}</h5>
      <button id="btnfol_prof_id" onClick={handleClick} className="btnfol_prof">{isfollowing}</button>
    </div>
  );
};

export default FollComp;
