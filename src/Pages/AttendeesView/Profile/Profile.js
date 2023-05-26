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
  selectUserAvatarURL,
  selectUserFirstName,
  selectUserLastName,
} from "src/features/authSlice";
import {
  useFetchLikedEventsNoValidationQuery,
  useFetchLikedEventsQuery,
  useGetFollowingUsersNoValidationQuery,
  useGetFollowingUsersQuery,
  useGetordersQuery,
} from "src/features/api/userApi";
import eventphoto from "../../../assets/adelEv1.png";
import { Col, Container, Row } from "react-bootstrap";

/**
 * @author Ziad Ezzat
 * @param {}
 * @description This is container of Profile Page which shows profile of user showing some data like name ,orders,likes and following Pges.
 * @returns {React.FC}
 */
const Profile = () => {
  window.scrollTo(0, 0)

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
  const UserAvatar = useSelector(selectUserAvatarURL);
  const userFirstName = useSelector(selectUserFirstName);
  const userLastName = useSelector(selectUserLastName);
  const [userFullName, setUserFullName] = useState(
    userFirstName + " " + userLastName
  );
  const [imgSrc, setImgSrc] = useState(UserAvatar);
  const { data: likedEvents, refetch: refetchLikedEvents } =
    useFetchLikedEventsNoValidationQuery();
  const { data: followingUsers, refetch: refetchFollowingUsers } =
    useGetFollowingUsersNoValidationQuery();
  const handleImgError = () => {
    setImgSrc(emptyprofile);
  };
  const { data: Orders } = useGetordersQuery(undefined, {
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true,
  });
  const refetch = () => {
    refetchFollowingUsers();
    refetchLikedEvents();
  };

  useEffect(() => {
    refetch();
  }, []);
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
                <div style={{ display: "flex", marginLeft: 15 }}>
                  <a
                    href="#"
                    style={{ color: "grey", fontSize: 15, display: "flex" }}
                  >
                    {Orders?.length}
                    <p
                      style={{ color: "grey", fontSize: 15, marginLeft: "13%" }}
                    >
                      Orders
                    </p>
                  </a>
                  <a
                    href="google.com"
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
                    <a
                      href="/Likes"
                      style={{ color: "grey", fontSize: 15, display: "flex" }}
                    >
                      {likedEvents?.length}
                      <p
                        style={{
                          color: "grey",
                          fontSize: 15,
                          marginLeft: "13%",
                        }}
                      >
                        Likes
                      </p>
                    </a>
                  </div>
                  <a
                    href="google.com"
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
                      {followingUsers?.length}
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
          <div className="compon">
            <h5>Orders</h5>
            <div className="orderecss">
              {Orders?.map((order) => (
                <OrderComp
                  data_testid="Order-Form-id"
                  id={order.event_id}
                  order={order}
                />
              ))}
            </div>
            <button id="btn_prof_id" className="btn_prof">
              {" "}
              See past Orders
            </button>
            <hr className="zzz"></hr>
            <div style={{ display: "flex" }}>
              <a href="google.com" className="intersts_prof">
                Interests
              </a>
              <AiOutlineRight
                style={{ marginLeft: 10, marginTop: 10 }}
                className="arr_prof"
              />
            </div>
            <hr className="zzz"></hr>
            <div style={{ display: "flex" }}>
              <a href="google.com" className="intersts_prof">
                Collections
              </a>
              <AiOutlineRight
                style={{ marginLeft: 10, marginTop: 10 }}
                className="arr_prof"
              />
            </div>
            <hr className="zzz"></hr>
            <div style={{ display: "flex" }}>
              <a href="google.com" className="intersts_prof">
                Likes
              </a>
              <AiOutlineRight
                style={{ marginLeft: 10, marginTop: 10 }}
                className="arr_prof"
              />
            </div>
            <div className="likeblk_prof">
              {likedEvents?.map((event) => (
                <LikeComp
                  key={event.id}
                  event={event}
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
              <div
                style={{ display: "flex", marginTop: 25, paddingBottom: 20 }}
              >
                <p className="intersts_prof">Following</p>
                <a href="/following" className="events_prof">
                  See events
                </a>
                <AiOutlineRight
                  style={{ marginLeft: 10, marginTop: 10 }}
                  className="arr_prof"
                />
              </div>
              {/* <div className="follblk_prof"> */}
              <Container>
                <Row>
                  {followingUsers?.map((person) => (
                    <Col md={6}>
                      <FollComp
                        key={person.id}
                        id={person.id}
                        email={person.email}
                        firstname={person.firstname}
                        lastname={person.lastname}
                        avatar_url={person.avatar_url}
                        className="mr-5"
                      />
                    </Col>
                  ))}
                </Row>
              </Container>
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
