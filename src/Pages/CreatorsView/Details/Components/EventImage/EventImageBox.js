import React from "react";
import "./eventImageBox.css";
import { CgImage } from "react-icons/cg";
import { BsDot } from "react-icons/bs";
import UploadButton from "../UploadButton/UploadButton";
import { SiCanva } from "react-icons/si";
import AdelImam from '../../../../../assets/adel-10.png'
/**
 * @author Mahmoud Khaled
 * @param {}
 * @description This is Main Event Image section in detials Page that used to upload an image or Design canvas
 * @returns {JSX.Element}
 */
const EventImageBox = (props) => {
  return (
    <div className="EventImage__container" data-testid="eventImage">
      <CgImage className="photo__header" />
      <h1 className="title__upload">Main Event Image</h1>
      <p style={{ fontSize: "14px" }}>
        Add photos to show what your event will be about. You can upload up to
        10 images.
        <a href="#" className="see__examples">
          {" "}
          See Examples
        </a>
      </p>
      
        <div className="EventImage__fileType">
          {/* <div className='EventImage__fileType-body'> */}
        {props.imageLink === "" && <CgImage className="photo" />}
        {props.imageLink === "" && <h5 style={{ marginBottom: "15px" }}>Drag and drop an Image or</h5>}
        {props.imageLink === "" && <div className="buttons__container" data-testid="btsContainer">
          <UploadButton
            imageLink={props.imageLink}
            setImageLink={props.setImageLink}
          />
          <button className="canvas-btn">
            <div className="flex flex-row ">
              <SiCanva className="canvas__logo" />
              <div className="ml-2">Design With Canvas</div>
            </div>
          </button>
        </div>}
        </div>
      {props.imageLink !== "" && <div className="uploaded__Image">
        <img src={props.imageLink} className="uploaded Image" /> <button></button>
      </div>}
      {props.imageLink !== "" && <button className="delete__uploaded-button">XX</button>}
      <div className="photo__requirement" data-testid="photo__requirements">
        <p>
          <BsDot className="dot" />
          Recommended image size: 2160 x 1080px
        </p>
        <p>
          <BsDot className="dot" />
          Maximum file size: 10MB
        </p>
        <p>
          <BsDot className="dot" />
          Supported image files: JPEG or PNG
        </p>
      </div>
      {/* <img src = {props.imageLink} /> */}
    </div>
  );
};

export default EventImageBox;
