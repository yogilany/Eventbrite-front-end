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
        <div className='flex flex-row '> 
        <CgImage className="img__logo" /><div className='ml-2'>        Upload Image
</div>
                  </div>
      </button>
      <input type="file" ref={hiddenFileInput} style={{ display: "none" }} />
    </>
  );
};
export default UploadButton;
