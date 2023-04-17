import React, { useState, useContext } from "react";
import "./description.css";
import { MdTextFields } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import UploadBox from "../UploadBox/UploadBox";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { AppContext } from "../../Details";
/**
 * @author Mahmoud Khaled
 * @param {}
 * @description This is Description section in Detials Page that used to add Image , video and text
 * @returns {JSX.Element}
 */
const Description = () => {
  const [addText, setText] = useState(false);
  const [addImage, setImage] = useState(false);
  const [addVideo, setVideo] = useState(false);
  const { showSubmit, setShowSubmit } = useContext(AppContext);
  const [videoLinkValue, setVideoLinkValue] = useState("");
  const [descriptionValue, setDescriptionValue] = useState("");
  return (
    <div className="description__container" data-testid="descriptionContainer">
      <MdTextFields className="text__logo" />
      <h1 style={{ marginBottom: "7px", fontSize: "30px", fontWeight: "700" }}>
        Description
      </h1>
      <p style={{ fontSize: "14px" }}>
        Add more details to your event like your schedule, sponsors, or featured
        guests.
        <a href="google.com" className="see__examples">
          {" "}
          Learn more
        </a>
      </p>
      {addText && (
        <div className="add__text">
          <textarea
            data-testid="textArea"
            id="AddText"
            onChange={(e) => {
              setDescriptionValue(e.target.value);
              e.target.value === ""
                ? setShowSubmit(false)
                : setShowSubmit(true);
            }}
          />
          <button onClick={() => setText(!addText)}>
            <MdDelete />
          </button>
        </div>
      )}
      {addImage && (
        <div className="add__image">
          <UploadBox data_testid="addImageBox"></UploadBox>{" "}
          <button onClick={() => setImage(!addImage)}>
            <MdDelete />
          </button>
        </div>
      )}
      {addVideo && (
        <div className="add__video">
          <input
            className="video__link"
            type="text"
            placeholder="Video Link"
            data-testid="textArea"
            id="AddVideo"
            onChange={(e) => {
              setVideoLinkValue(e.target.value);
              e.target.value === ""
                ? setShowSubmit(false)
                : setShowSubmit(true);
            }}
          />
          <button onClick={() => setVideo(!addVideo)}>
            <MdDelete />
          </button>
        </div>
      )}
      <div className="description__container-buttons" data-testid="addButtons">
        <button
          data-testid="addText"
          className="cond__btn"
          onClick={() => setText(true)}
        >
          Add Text
        </button>
        <button
          data-testid="addImage"
          className="cond__btn"
          onClick={() => setImage(true)}
        >
          Add Image
        </button>
        <button
          data-testid="addVideo"
          className="cond__btn"
          onClick={() => setVideo(true)}
        >
          Add Video
        </button>
      </div>
    </div>
  );
};

export default Description;
