import React from "react";
import "./FollComp.css";
import emptyprofile from "../../../../assets/emptyprofile.png";
import { useDispatch } from "react-redux";
import {
  useFollowUserMutation,
  useUnfollowUserMutation,
} from "src/features/api/userApi";
import { useState } from "react";
/**
 * @author Ziad Ezzat
 * @param {string} props.text
 * @param {string} props.data_testid
 * @description This is container for Following box found in Profile page showing following pages and it takes text as props to show name of the page that user is following
 * @returns {JSX.Element of following component used in Profile Page}
 */
const FollComp = (props) => {
  const [userFullName, setUserFullName] = useState(
    props.firstname + " " + props.lastname
  );
  const [imgSrc, setImgSrc] = React.useState(props.avatar);
  const [isfollowing, setisfollowing] = React.useState("Following");
  const [followEvent] = useFollowUserMutation();
  const [unfollowEvent] = useUnfollowUserMutation();

  const handleImgError = () => {
    setImgSrc(emptyprofile);
  };
  const handleClick = async () => {
    if (isfollowing === "Following") {
      setisfollowing("Follow");
      console.log("ID with unfollow :", props.id);
      const res = await unfollowEvent(props.id).unwrap();
      console.log(res);
    } else {
      setisfollowing("Following");
      const res = await unfollowEvent(props.id).unwrap();
      console.log(res);
    }
  };
  return (
    <div
      style={{ display: "flex", marginTop: 10 }}
      data-testid={props.data_testid}
    >
      <img
        onError={handleImgError}
        src={imgSrc}
        alt="profilelogo"
        style={{ width: 65, height: 65, borderRadius: "50%" }}
      />
      <h5 style={{ marginTop: 20, fontSize: 17, width: "200px" }}>
        {userFullName}
      </h5>
      <button id="btnfol_prof_id" onClick={handleClick} className="btnfol_prof">
        {isfollowing}
      </button>
    </div>
  );
};

export default FollComp;
