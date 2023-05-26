import React from "react";
import "./uploadBox.css";
import { useRef } from "react";
const UploadBox = ({ data_testid }) => {
  const handleHiddenFile = useRef(null);
  const handleBox = () => {
    handleHiddenFile.current.click();
  };
  return (
    <div
      className="uploadBox__container"
      onClick={handleBox}
      data-testid={data_testid}
    >
      <h5>Drag & drop or click to add image.</h5>
      <p style={{ fontSize: "14px" }}>JPEG, PNG , GIF , no larger than 10MB</p>
      <input type="file" style={{ display: "none" }} ref={handleHiddenFile} />
    </div>
  );
};

export default UploadBox;
