import React from "react";
import "./likes.css";
import Like from "./Components/Like";
import Like1 from "../../../assets/like1.jpeg";
import Like2 from "../../../assets/like2.jpeg";
import Like3 from "../../../assets/like3.jpeg";
import Footer from "../../../Components/footer/Footer";
import Header from "../../../Components/header/Header";
import { useSelector } from "react-redux";
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
  return (
    <div className="likes__container">
      <Header MenuShow={false} />
      <div className="likes__container-heading">
        <h1 className="likes__header">Likes</h1>
        <Like
          Title="E7kky to Empower: Beyond the Story!"
          Date="Fri, Mar 10, 9:00 AM"
          Location="Greek Campus, Ad Dawawin"
          Price="Free"
          Photo={Like1}
        ></Like>
        <Like
          Title="Arab Public Health Assosciation 3rd International Conference"
          Date="Sun, Mar 12, 8:00 AM"
          Location="InterContinental Cairo Semiramis, an IHG Hotel, Qasr Ad Dobarah"
          Price="Starts at €120.00"
          Photo={Like2}
        ></Like>
        <Like
          Title="CABLEXX"
          Date="Wed, Mar 15, 9:00 AM"
          Location="Dusit Thani Lakeview Cairo, Cairo"
          Price="Free"
          Photo={Like3}
        ></Like>
      </div>
      <Footer />
    </div>
  );
};

export default Likes;
