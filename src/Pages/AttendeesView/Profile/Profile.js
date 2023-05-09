import React from "react";
import "./Profile.scss";
import Header from "../../../Components/header/Header";
import { BiPencil } from "react-icons/bi";
import emptyprofile from "../../../assets/emptyprofile.png";
import OrderComp from "./Components/OrderComp";
import LikeComp from "./Components/LikeComp";
import FollComp from "./Components/FollComp";
import { AiOutlineRight } from "react-icons/ai";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import {
  getUserDetails,
  logOut,
  selectUserAvatarURL,
  selectUserEmail,
  selectUserFirstName,
  selectUserLastName,
  selectUserToken,
} from "../../../features/authSlice";
import {
  getLikedEvents,
  getfollwingpeople,
} from "../../../features/userprofSlice";
import { useDispatch } from "react-redux";
import eventphoto from "../../../assets/adelEv1.png";
import { RxDotFilled } from "react-icons/rx";
/**
 * @author Ziad Ezzat
 * @param {}
 * @description This is container of Profile Page which shows profile of user showing some data like name ,orders,likes and following Pges.
 * @returns {JSX.Element of Profile Page}
 */
const Profile = () => {
  const dummtdata = [
    {
      id: 1,
      title: "7oda Algin?",
      start_date_time: "2:00 pm Thursday",
      image_link: "",
      is_online: true,
    },
    {
      id: 2,
      title: "Mr hazem",
      start_date_time: "2:00 pm sunday",
      image_link: eventphoto,
      is_online: true,
    },
    {
      id: 2,
      title: "Gilany",
      start_date_time: "2:00 pm friday",
      image_link:
        "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200",
      is_online: true,
    },
  ];
  const dispatch = useDispatch();
  const UserAvatar = useSelector(selectUserAvatarURL);
  const userFirstName = useSelector(selectUserFirstName);
  const userLastName = useSelector(selectUserLastName);
  const [userFullName, setUserFullName] = useState(
    userFirstName + " " + userLastName
  );
  const [LikedEvents, setLikedEvents] = useState([]);
  const [followedpeople, setfollowedpeople] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const token = useSelector(selectUserToken);
  const [imgSrc, setImgSrc] = useState(UserAvatar);
  const handleImgError = () => {
    setImgSrc(emptyprofile);
  };
  useEffect(() => {
    const getlikes = async () => {
      try {
        const response = await getLikedEvents(token);
        setLikedEvents(response);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };
    getlikes();
  }, []);
  useEffect(() => {
    const getfoll = async () => {
      try {
        const response = await getfollwingpeople(token);
        setfollowedpeople(response);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };
    getfoll();
  }, []);
  console.log("data is", LikedEvents);
  const LikedEventscount = LikedEvents.length;
  const follwedpeoplecount = followedpeople.length;
  return (
    <div>
      <Header />
      <div className="full_body_prof">
        <div className="form_proff">
          <div className="greyform-prof">
            <div style={{ marginTop: 50, marginLeft: 50, display: "flex" }}>
              <img
                className="prof_img"
                onError={handleImgError}
                src={imgSrc}
                alt="profilelogo"
                style={{ width: 120, height: 120 }}
              />
              <div style={{ display: "block" }}>
                <div style={{ display: "flex" }}>
                  <h1
                    style={{
                      fontSize: 30,
                      marginLeft: 15,
                      marginTop: 20,
                      fontWeight: 600,
                      color: "black",
                    }}
                  >
                    {userFullName}
                  </h1>
                  <BiPencil
                    style={{
                      marginLeft: 18,
                      marginTop: 33,
                      width: 20,
                      height: 20,
                      cursor: "pointer",
                    }}
                  />
                </div>
                <div style={{ display: "flex" }}>
                  <a
                    href="#"
                    style={{ marginLeft: 15, color: "grey", fontSize: 15 }}
                  >
                    1 order
                  </a>
                  <a
                    href="#"
                    style={{
                      marginLeft: 8,
                      color: "grey",
                      width: 15,
                      fontWeight: 600,
                    }}
                  >
                    .
                  </a>
                  <div style={{ display: "flex" }}>
                    <a href="#" style={{ color: "grey", fontSize: 15 }}>
                      {LikedEventscount}
                    </a>
                    <p
                      style={{ color: "grey", fontSize: 15, marginLeft: "13%" }}
                    >
                      Likes
                    </p>
                  </div>
                  <a
                    href="#"
                    style={{
                      marginLeft: 8,
                      color: "grey",
                      width: 15,
                      fontWeight: 600,
                    }}
                  >
                    .
                  </a>
                  <div style={{ display: "flex" }}>
                    <a href="#" style={{ color: "grey", fontSize: 15 }}>
                      {follwedpeoplecount}
                    </a>
                    <p
                      style={{ color: "grey", fontSize: 15, marginLeft: "13%" }}
                    >
                      Following
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="compon" >
            <h5>Orders</h5>
            <div className="orderecss"><OrderComp data_testid="Order-Form-id" /></div>
            <button id="btn_prof_id" className="btn_prof"> See past Orders</button>
            <hr className="zzz"></hr>
            <div style={{ display: "flex" }}>
              <a href="#" className="intersts_prof">
                Interests
              </a>
              <AiOutlineRight
                style={{ marginLeft: 10, marginTop: 10 }}
                className="arr_prof"
              />
            </div>
            <hr className="zzz"></hr>
            <div style={{ display: "flex" }}>
              <a href="#" className="intersts_prof">
                Collections
              </a>
              <AiOutlineRight
                style={{ marginLeft: 10, marginTop: 10 }}
                className="arr_prof"
              />
            </div>
            <hr className="zzz"></hr>
            <div style={{ display: "flex" }}>
              <a href="#" className="intersts_prof">
                Likes
              </a>
              <AiOutlineRight
                style={{ marginLeft: 10, marginTop: 10 }}
                className="arr_prof"
              />
            </div>
            <div className="likeblk_prof">
              {LikedEvents.map((event) => (
                <LikeComp
                  id={event.id}
                  title={event.title}
                  start_date_time={event.start_date_time}
                  image_link={event.image_link}
                />
              ))}
              {/* <LikeComp data_testid="Like-Form-id" />
              <LikeComp data_testid="Like-Form-id" />
              <LikeComp data_testid="Like-Form-id" />
              <LikeComp data_testid="Like-Form-id" /> */}
            </div>
            <hr className="zzz"></hr>
            <div className="follblk_prof">
              <div style={{ display: "flex", marginTop: 25 }}>
                <p className="intersts_prof">Following</p>
                <a href="#" className="events_prof">
                  See events
                </a>
                <AiOutlineRight
                  style={{ marginLeft: 10, marginTop: 10 }}
                  className="arr_prof"
                />
              </div>
              <div className="follblk_prof">
                {followedpeople.map((person) => (
                  <FollComp
                    email={person.email}
                    firstname={person.firstname}
                    lastname={person.lastname}
                    avatar={person.avatar}
                  />
                ))}
                {/* <FollComp text="GoMyCode" data_testid="Follow-Form-id" />
                <FollComp text="Ezz event riders" /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
