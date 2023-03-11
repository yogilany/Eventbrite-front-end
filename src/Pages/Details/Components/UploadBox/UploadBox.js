import React from 'react'
import './uploadBox.css'
import { CgImage } from "react-icons/cg";
import { useRef } from 'react';
const UploadBox = () => {
    const handleHiddenFile = useRef(null);
    const handleBox = () => {
        handleHiddenFile.current.click();
    }
  return (
    <div className="uploadBox__container" onClick = {handleBox}>
      <h3>Drag & drop or click to add image.</h3>
      <p>JPEG, PNG , GIF , no larger than 10MB</p>
      <input type = "file" style = {{display:"none"}} ref = {handleHiddenFile} />
    </div>
  );
}

export default UploadBox