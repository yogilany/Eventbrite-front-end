import React from "react";
import { useRef } from "react";
import { CgImage } from "react-icons/cg";
import "./uploadButton.css";
import { useState } from "react";
const UploadButton = () => {
  const hiddenFileInput = useRef(null);
  const [imageData, setImageData] = useState(null);
  const [loading, setLoading] = useState(false);
  const[previewUrl, setPreviewUrl] = useState("");
  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };
  const handleInputFile = (event) => {
    //   const file = event.target.files[0];
    //   if (loading) {
    //     return;
    //   }
    //   setLoading(true);
    //   const reader = new FileReader();
    //   reader.onloadend = () => {
    //     const blob = new Blob([reader.result], { type: file.type });
    //     setImageData(blob);
    //     setLoading(false);
    //   };
    //   reader.readAsArrayBuffer(file);
    // console.log("reader = " + reader.readAsArrayBuffer(file));
    // console.log('file = ' + file);
    // console.log('xxxxxxx');
    setImageData(event.target.files[0]);
    // console.log(URL.createObjectURL(imageData));
    console.log(URL.createObjectURL(event.target.files[0]));
  }
  return (
    <>
      <button id="upload__btn" onClick={handleClick} className="upload__btn">
        <div className="flex flex-row ">
          <CgImage className="img__logo" />
          <div className="ml-2"> Upload Image</div>
        </div>
      </button>
      <input type="file" ref={hiddenFileInput} style={{ display: "none" }} onChange={handleInputFile} />
      {imageData && <img src = {URL.createObjectURL(imageData)} alt = "Uploaded image" />}
    </>
  );
};
export default UploadButton;
