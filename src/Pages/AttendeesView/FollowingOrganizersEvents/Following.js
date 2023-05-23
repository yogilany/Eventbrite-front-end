import React from "react";
import "./following.css";
import Follow from "./Components/Follow";
import Footer from "../../../Components/footer/Footer";
import FollowImage from "../../../assets/follow1.jpeg";
import { IoMdArrowRoundBack } from "react-icons/io";
import Header from "../../../Components/header/Header";
import { useState } from "react";

/**
 * @author Mahmoud Khalid>
 * @description This is the page where you can see only the events created by organizers you follow.
 * @returns {React.FC}
 */

const FollowingOrgEvents = () => {
  const [counter, setCounter] = useState(1);
  return (
    <div className="following__container">
      <Header MenuShow={false} />
      <div className="following__container-heading">
        <a href="google.com" className="back-btn">
          <IoMdArrowRoundBack />
        </a>
        <h1>Events from Organizers you follow</h1>
        <Follow
          Title="Work in Europe / Sweden - Work Visa, Employers, Jobs, Relocation (DC)"
          Date="Today at 4:00 PM + 24 more events"
          Location="Regus - Washington DC - Metro Center, Washington"
          Price="Starts at €19.00"
          Photo={FollowImage}
        ></Follow>
        <Follow
          Title="Work in Europe / Sweden - Work Visa, Employers, Jobs, Relocation (DC)"
          Date="Today at 4:00 PM + 24 more events"
          Location="Regus - Washington DC - Metro Center, Washington"
          Price="Starts at €120.00"
          Photo={FollowImage}
        ></Follow>
        <Follow
          Title="Work in Europe / Sweden - Work Visa, Employers, Jobs, Relocation (DC)"
          Date="Today at 4:00 PM + 24 more events"
          Location="Regus - Washington DC - Metro Center, Washington"
          Price="Starts at €120.00"
          Photo={FollowImage}
        ></Follow>
        <div className="pagination__container">
          <button
            onClick={() => setCounter(counter - 1)}
            disabled={counter === 1 ? true : false}
          >
            Previous
          </button>
          <p>{counter}</p>
          <button onClick={() => setCounter(counter + 1)}>Next</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FollowingOrgEvents;
