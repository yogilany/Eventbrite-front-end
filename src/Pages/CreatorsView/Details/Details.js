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
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const [showSubmit, setShowSubmit] = useState(false);
  const [success, setSuccess] = useState(false);
  const [imageLink, setImageLink] = useState("");
  const [summary, setSummary] = useState("");
  const [description, setDescription] = useState("");
  const [inputsChanged, setInputsChanged] = useState(false);

  function saveData() {
    setEvent({
      ...event,

      image_link:
        "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F508415919%2F1144043283543%2F1%2Foriginal.20230505-120629?w=940&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C60%2C1920%2C960&s=d8fd402e4d59e205dcd67cab6c6dbe83",
      summary: summary,
      description: description,
    });
    setSuccess(true);
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
            <EventImage imageLink={imageLink} setImageLink={setImageLink} />
            <Summary summary={summary} setSummary={setSummary} />
            <Description
              description={description}
              setDescription={setDescription}
            />
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
