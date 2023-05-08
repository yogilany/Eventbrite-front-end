import React, { useState } from "react";
import "./Details.css";
import EventImage from "./Components/EventImage/EventImageBox";
import Summary from "./Components/SummaryBox/Summary";
import Description from "./Components/Description/Description";
import AddEvents from "./Components/AddEvents/AddEvents";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../../../Components/header/Header";
import CreatorHeader from "./Components/creatorHeader/CreatorHeader";
import { createContext } from "react";
import Headerpub from "../../Publishpage/Headerpub";

export const AppContext = createContext({});
/**
 * @author Mahmoud Khaled
 * @param {}
 * @description This is Container of Detials Page that Contains Main Event Image , Summary , Description and Add Event Sections
 * @returns {JSX.Element}
 */
const Details = () => {
  const handleForm = (e) => {
    e.preventDefault();
  };
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const [showSubmit, setShowSubmit] = useState(false);
  return (
    <AppContext.Provider
      value={{ toggleSidebar, setToggleSidebar, showSubmit, setShowSubmit }}
    >
      <CreatorHeader MenuShow={true} />
      {/* <Headerpub data_testid="HDID" /> */}

      <Sidebar />

      <div className="Details__page">
        <form onSubmit={handleForm}>
          <div
            className={`Details__container ${
              toggleSidebar ? "details__opacity" : ""
            }`}
            data-testid="Details__contianer"
          >
            <EventImage />
            <Summary />
            <Description />
            <AddEvents />
            {showSubmit && (
              <div className="submit__section" data-testid="submit__section">
                <button className="discard__btn">Discard</button>
                <button type="submit" className="submit__btn">
                  Save
                </button>
              </div>
            )}
          </div>
        </form>
      </div>
    </AppContext.Provider>
  );
};
export default Details;
