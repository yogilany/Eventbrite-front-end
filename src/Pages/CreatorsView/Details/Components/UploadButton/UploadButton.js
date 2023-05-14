import React from "react";
import { useRef } from "react";
import { CgImage } from "react-icons/cg";
import "./uploadButton.css";
import { useEffect } from "react";
import { useContext } from "react";
import axios from "axios";
const UploadButton = (props) => {
  const hiddenFileInput = useRef(null);
  const handleClick = () => {
    hiddenFileInput.current.click();
  };
  const handleUploadImage = async () => {
    if (hiddenFileInput.current.files[0]) {
      const body = new FormData();
      body.append("image", hiddenFileInput.current.files[0]);
      body.append("name", hiddenFileInput.current.files[0].name);
      axios({
        method: "post",
        url: `${process.env.REACT_APP_IMAGE_HOST}`,
        data: body,
        params: {
          key: `${process.env.REACT_APP_IMAGE_HOST_API_KEY}`,
        },
      })
        .then((res) => {
          // console.log(res);
          props.setImageLink(res.data.data.display_url);
        })
        .catch((err) => {
          console.log("Error uploading image", err);
          props.setImageLink("");
        });
    }
  };

  return (
    <>
      <button id="upload__btn" onClick={handleClick} className="upload__btn">
        <div className="flex flex-row ">
          <CgImage className="img__logo" />
          <div className="ml-2"> Upload Image</div>
        </div>
      </button>
      <input
        type="file"
        onChange={handleUploadImage}
        ref={hiddenFileInput}
        style={{ display: "none" }}
      />
      {/* <img src={props.imageLink}></img> */}
    </>
  );
};
export default UploadButton;
