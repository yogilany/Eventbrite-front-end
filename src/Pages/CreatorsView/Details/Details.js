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
import { Alert } from "react-bootstrap";
import { useEffect } from "react";

export const AppContext = createContext({});
/**
 * @author Mahmoud Khaled
 * @param {}
 * @description This is Container of Detials Page that Contains Main Event Image , Summary , Description and Add Event Sections
 * @returns {JSX.Element}
 */
const Details = ({ event, setEvent }) => {
  const handleForm = (e) => {
    e.preventDefault();
  };
  const[isLoading, setIsLoading] = useState(false);
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const [showSubmit, setShowSubmit] = useState(false);
  const [success, setSuccess] = useState(false);
  const [imageLink, setImageLink] = useState("");
  const [summary, setSummary] = useState(event ? event.summary : "");
  const [description, setDescription] = useState(event ? event.description : "");
  const [inputsChanged, setInputsChanged] = useState(false);

  function saveData() {
    setEvent({
      ...event,

      image_link: "https://www.example.com/image.png",
      summary: summary,
      description: description,
    });
    setSuccess(true);
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 3000);
  }

  useEffect(() => {
    setTimeout(() => {
      // After 3 seconds set the show value to false
      setSuccess(false);
    }, 3000);
  }, [success]);

  useEffect(() => {
    if (summary === "" && description === "" && imageLink === "") {
      setInputsChanged(false);
    } else {
      setInputsChanged(true);
    }
  }, [imageLink, summary, description]);

  return (
    <AppContext.Provider
      value={{ toggleSidebar, setToggleSidebar, showSubmit, setShowSubmit }}
    >
      <div className="Details__page mt-32">
        <form onSubmit={handleForm}>
          <div
            className={`Details__container ${
              toggleSidebar ? "details__opacity" : ""
            }`}
            data-testid="Details__contianer"
          >
            {isLoading && "kkk"}
            <EventImage imageLink={imageLink} setImageLink={setImageLink} />
            <Summary summary={summary} setSummary={setSummary} />
            <Description
              description={description}
              setDescription={setDescription}
            />
            <AddEvents />
            {isLoading && "kkk"}
            {/* {showSubmit && (
              <div className="submit__section" data-testid="submit__section">
                <button className="discard__btn">Discard</button>
                <button type="submit" className="submit__btn" onClick = {saveData} disabled = {!inputsChanged}>
                  Save
                </button>
              </div>
            )} */}
          </div>
        </form>
      </div>
      <div className="basic-info-footer">
        {success ? (
          <Alert
            variant="success"
            style={{
              width: "70%",
              position: "fixed",
              top: "70px",
              zIndex: "999",
            }}
          >
            Data saved successfully.
          </Alert>
        ) : null}

        <button
          className="savebtn"
          onClick={saveData}
          disabled={!inputsChanged}
        >
          Save
        </button>
      </div>
    </AppContext.Provider>
  );
};
export default Details;
