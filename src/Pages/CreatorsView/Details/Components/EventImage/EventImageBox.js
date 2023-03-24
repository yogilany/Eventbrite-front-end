import React from 'react'
import './eventImageBox.css'
import { CgImage } from 'react-icons/cg'
import { BsDot } from 'react-icons/bs'
import UploadButton from '../UploadButton/UploadButton'
import { SiCanva } from 'react-icons/si'
const EventImageBox = () => {
  return (
    <div className='EventImage__container'>
        <CgImage className='photo__header' />
        <h1 className='title__upload' >Main Event Image</h1>
        <p style = {{fontSize:'14px'}}>Add photos to show what your event will be about. You can upload up to 10 images.<a href = "#" className='see__examples'> See Examples</a></p>
        <div className='EventImage__fileType'>
            {/* <div className='EventImage__fileType-body'> */}
                <CgImage className='photo' />
                <h5 style = {{marginBottom:'15px'}}>Drag and drop an Image or</h5>
                <div className='buttons__container'>
                  <UploadButton />
                  <button className='canvas-btn'>< SiCanva className='canvas__logo' /> Design With Canvas</button>
                </div>
                {/* <button className='upload-btn'>Upload Image</button> */}
                {/* <UploadButton />
                <button className='canvas-btn'>Design With Canvas</button> */}
            {/* </div> */}
        </div>
        <div className='photo__requirement'>
          <p><BsDot className='dot' />Recommended image size: 2160 x 1080px</p>
          <p><BsDot className='dot'/>Maximum file size: 10MB</p>
          <p><BsDot className='dot'/>Supported image files: JPEG or PNG</p>
        </div>
    </div>
  )
}

export default EventImageBox