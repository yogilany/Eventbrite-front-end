// import React from "react";
// import "./Profile.scss";
// import Header from "../../../Components/header/Header";
// import { BiPencil } from "react-icons/bi";
// import emptyprofile from "../../../assets/emptyprofile.png";
// import OrderComp from "./Components/OrderComp";
// import LikeComp from "./Components/LikeComp";
// import FollComp from "./Components/FollComp";
// import { AiOutlineRight } from "react-icons/ai";
// import {RxDotFilled} from 'react-icons/rx'
// /**
//  * @author Ziad Ezzat
//  * @param {}
//  * @description This is container of Profile Page which shows profile of user showing some data like name ,orders,likes and following Pges.
//  * @returns {JSX.Element of Profile Page}
//  */
// const Profile = () => {
//   const dummtdata =
//     [
//       {
//         id: 1,
//         title: "7oda Algin?",
//         start_date_time: "2:00 pm Thursday",
//         image_link: "",
//         is_online: true,
//       },
//       {
//         id: 2,
//         title: "Mr hazem",
//         start_date_time: "2:00 pm sunday",
//         image_link: eventphoto,
//         is_online: true,
//       },
//       {
//         id: 2,
//         title: "Gilany",
//         start_date_time: "2:00 pm friday",
//         image_link: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200",
//         is_online: true,
//       }
//     ]
//   const dispatch = useDispatch();
//   const UserAvatar = useSelector(selectUserAvatarURL);
//   const userFirstName = useSelector(selectUserFirstName);
//   const userLastName = useSelector(selectUserLastName);
//   const [userFullName, setUserFullName] = useState(userFirstName + " " + userLastName)
//   const [LikedEvents, setLikedEvents] = useState([]);
//   const [followedpeople, setfollowedpeople] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const token = useSelector(selectUserToken);
//   const ddd = getLikedEvents(token);
//   const [data, setdata] = useState()
//   useEffect(() => {
//     const getlikes = async () => {
//       try {
//         const response = await getLikedEvents(token);
//         setLikedEvents(response);
//       }
//       catch (error) {
//         setError(error);
//         setIsLoading(false);
//       }
//     };
//     getlikes();
//   }, []);
//   useEffect(() => {
//     const getfoll = async () => {
//       try {
//         const response = await getfollwingpeople(token);
//         setfollowedpeople(response);
//       }
//       catch (error) {
//         setError(error);
//         setIsLoading(false);
//       }
//     };
//     getfoll();
//   }, []);
//   console.log("data is", LikedEvents)
//   const LikedEventscount = LikedEvents.length;
//   const follwedpeoplecount = followedpeople.length;
//   return (
//     <div>
//       <Header />
//       <div className="full_body_prof">
//         <div className="form_proff">
//           <div className="greyform-prof">
//             <div style={{ marginTop: 50, marginLeft: 50, display: "flex" }}>
//               <img
//                 className="prof_img"
//                 src={UserAvatar}
//                 alt="profilelogo"
//                 style={{ width: 120, height: 120 }}
//               />
//               <div style={{ display: "block" }}>
//                 <div style={{ display: "flex" }}>
//                   <h1
//                     style={{
//                       fontSize: 30,
//                       marginLeft: 15,
//                       marginTop: 20,
//                       fontWeight: 600,
//                       color: "black",
//                     }}
//                   >
//                     {userFullName}
//                   </h1>
//                   <BiPencil
//                     style={{
//                       marginLeft: 18,
//                       marginTop: 33,
//                       width: 20,
//                       height: 20,
//                       cursor: "pointer",
//                     }}
//                   />
//                 </div>
//                 <div style={{ display: "flex" }}>
//                   <a
//                     href="#"
//                     style={{ marginLeft: 15, color: "grey", fontSize: 15 }}
//                   >
//                     1 order <RxDotFilled className = "info__dot" />
//                   </a>
//                   <a href="#" style={{ color: "grey", fontSize: 15 }}>
//                     2 likes <RxDotFilled className = "info__dot" />
//                   </a>
//                   <a href="#" style={{ color: "grey", fontSize: 15 }}>
//                     2 following <RxDotFilled className = "info__dot" />
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div style={{ marginTop: 65, marginLeft: 445 }}>
//             <span style = {{fontSize:'18px' , fontWeight:'600'}}>Orders</span>
//             <OrderComp data_testid="Order-Form-id" />
//             <button id="btn_prof_id" className="btn_prof"> See past Orders</button>
//             <hr style={{ width: "85%", marginTop: 30 }}></hr>
//             <div style={{ display: "flex" }} className = "interests__container">
//               <a href="#" className="intersts_prof" style = {{fontSize:'18px' , fontWeight:'600'}}>
//                 Interests
//               </a>
//               <AiOutlineRight
//                 style={{ marginLeft: 10, marginTop: 10 }}
//                 className="arr_prof"
//               />
//             </div>
//             <hr className="zzz"></hr>
//             <div style={{ display: "flex" }}>
//               <a href="#" className="collection_prof" style = {{fontSize:'18px' , fontWeight:'600'}}>
//                 Collections
//               </a>
//               <AiOutlineRight
//                 style={{ marginLeft: 10, marginTop: 10 }}
//                 className="arr_prof"
//               />
//             </div>
//             <hr className="zzz"></hr>
//             <div style={{ display: "flex" }}>
//               <a href="#" className="likes_prof" style = {{fontSize:'18px' , fontWeight:'600'}}>
//                 Likes
//               </a>
//               <AiOutlineRight
//                 style={{ marginLeft: 10, marginTop: 10 }}
//                 className="arr_prof"
//               />
//             </div>
//             <div className="likeblk_prof">
//               {LikedEvents.map((event) => (
//                 <LikeComp id={event.id} title={event.title} start_date_time={event.start_date_time} image_link={event.image_link} />
//               ))}
//               {/* <LikeComp data_testid="Like-Form-id" />
//               <LikeComp data_testid="Like-Form-id" />
//               <LikeComp data_testid="Like-Form-id" />
//               <LikeComp data_testid="Like-Form-id" /> */}
//             </div>
//             <hr className="zzz"></hr>
//             <div className="follblk_prof">
//             <div style={{ display: "flex", marginTop: 25 }}>
//               <p className="intersts_prof" style = {{fontSize:'18px' , fontWeight:'600'}}>Following</p>
//               <a href="#" className="events_prof">
//                 See events
//               </a>
//               <AiOutlineRight
//                 style={{ marginLeft: 10, marginTop: 10 }}
//                 className="arr_prof"
//               />
//             </div>

//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;
