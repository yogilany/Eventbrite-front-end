import React from "react";
import "./FollComp.css";
import emptyprofile from "../../../../assets/emptyprofile.png";
import { useDispatch } from "react-redux";
import {
  useFollowUserMutation,
  useUnfollowUserMutation,
} from "src/features/api/userApi";
import { useState } from "react";
import { Avatar } from "@mui/material";
import FollowButton from "src/Components/FollowButton/FollowButton";
/**
 * @author Ziad Ezzat
 * @param {string} props.className    
 * @description Pass the ClassName To update the styling in CSS
 * @param {string} props.firstname    
 * @description First Name of The followed User
 * @param {string} props.lastname     
 * @description Last Name of The followed User
 * @param {string} props.avatar_url   
 * @description Image of The followed User
 * @param {string} props.data_testid  
 * @description used in unit testing
 * @param {string} props.id           
 * @description ID of followed User
 * @description This is container for Following box found in Profile page showing following pages and it takes text as props to show name of the page that user is following
 * @returns {React.FC}
 */
const FollComp = (props) => {
  const [userFullName, setUserFullName] = useState(
    props.firstname + " " + props.lastname
  );
  return (
    <div
      className={props.className}
      style={{ display: "flex", marginTop: 10 }}
      data-testid={props.data_testid}
    >
      <Avatar
        src={props.avatar_url}
        alt="profilelogo"
        style={{ width: 36, height: 36, borderRadius: "50%" }}
      />
      <h5 style={{ marginTop: 7, marginLeft: 10, fontSize: 17, width: "100%" }}>
        {userFullName}
      </h5>
      <FollowButton className="btnfol_prof" id={props.id}></FollowButton>
    </div>
  );
};

export default FollComp;
