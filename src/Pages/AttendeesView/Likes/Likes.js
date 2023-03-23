import React from "react";
import "./likes.css";
import Like from "./Components/Like";
import Like1 from "../../../assets/like1.jpeg";
import Like2 from "../../../assets/like2.jpeg";
import Like3 from "../../../assets/like3.jpeg";
import Footer from '../../../components/footer/Footer'
import Header from '../../../components/header/Header'
const Likes = () => {
  return (
    <div className="likes__container">
      <Header />
      <div className="likes__container-heading">
        <h1>Likes</h1>
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
