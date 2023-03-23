import React from "react";
import "./Details.css";
import EventImage from "./Components/EventImage/EventImageBox";
import Summary from "./Components/SummaryBox/Summary.js";
import Description from "./Components/Description/Description";
import AddEvents from "./Components/AddEvents/AddEvents";
import Sidebar from "../Sidebar/Sidebar";
// import Header from '../../components/header/Header'
const Details = () => {
  const handleForm = (e) => {
    e.preventDefault();
  };
  return (
    <div className="Details__page">
      {/* <Header /> */}
      <Sidebar />
      <form onSubmit={handleForm}>
        <div className="Details__container">
          <EventImage />
          <Summary />
          <Description />
          <AddEvents />
        </div>
        <div className="submit__section">
          <button className="discard__btn">Discard</button>
          <button type="submit" className="submit__btn">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Details;
