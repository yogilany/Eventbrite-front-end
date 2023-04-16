import React from "react";
import { useRef } from "react";
import { CgImage } from "react-icons/cg";
import './uploadButton.css'
const UploadButton = () => {
  const hiddenFileInput = useRef(null);
  const handleClick = () => {
    hiddenFileInput.current.click();
  };
  return (
    <>
      <button id="upload__btn" onClick={handleClick} className="upload__btn">
        <CgImage className="img__logo" /> Upload Image
      </button>
      <input type="file" ref={hiddenFileInput} style={{ display: "none" }} />
    </>
  );
};
export default UploadButton;
