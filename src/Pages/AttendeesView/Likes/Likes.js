import React from "react";
import "./likes.css";
import Like from "./Components/Like";
import Like1 from "../../../assets/like1.jpeg";
import Like2 from "../../../assets/like2.jpeg";
import Like3 from "../../../assets/like3.jpeg";
import Footer from "../../../Components/footer/Footer";
import Header from "../../../Components/header/Header";
import { useSelector } from "react-redux";
import {
  useFetchLikedEventsQuery
} from "src/features/api/userApi";
import {
  selectUserAvatarURL,
  selectUserFirstName,
  selectUserLastName,
} from "src/features/authSlice";

// import { selectUserState } from "../../../features";

/**
 * @author Mahmoud Khalid
 * @param {}
 * @description This is likes page. It shows which events a user liked and the user can see the details of the event.
 * @returns {JSX.Element}
 */

const Likes = () => {
  // const user = useSelector(selectUserState);
  // console.log("USER = ", user);
  const { data: likedEvents } = useFetchLikedEventsQuery();
  return (
    <div className="likes__container">
      <Header MenuShow={false} />
      <div className="likes__container-heading">
        <h1 className="likes__header">Likes</h1>
        {likedEvents?.map((event) => (
                <Like
                  event={event}
                />
              ))}
      </div>
      <Footer />
    </div>
  );
};

export default Likes;
