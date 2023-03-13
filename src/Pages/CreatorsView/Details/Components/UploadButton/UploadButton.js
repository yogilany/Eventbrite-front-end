import React from "react";
import { useRef } from "react";
import './uploadButton.css'
const UploadButton = () => {
  const hiddenFileInput = useRef(null);
  const handleClick = () => {
    hiddenFileInput.current.click();
  };
  return (
    <>
      <button onClick={handleClick} className = "upload__btn">Upload Image</button>
      <input
        type="file"
        ref={hiddenFileInput}
        style={{ display: "none" }}
      />
    </>
  );
};
export default UploadButton;
