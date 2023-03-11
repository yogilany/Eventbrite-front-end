import React, { useState } from 'react'
import './description.css'
import { MdTextFields } from 'react-icons/md'
import { MdDelete } from 'react-icons/md'
import UploadBox from '../UploadBox/UploadBox'
const Description = () => {
    const [addText , setText] = useState(false);
    const [addImage , setImage] = useState(false);
    const [addVideo , setVideo] = useState(false);
  return (
    <div className="description__container">
      <MdTextFields className = "text__logo" />
      <h1 style={{ marginBottom: "7px" }}>Description</h1>
      <p style={{ fontSize: '14px' }}>Add more details to your event like your schedule, sponsors, or featured guests.<a href="#" className='see__examples'> Learn more</a></p>
      {addText && <div className='add__text'><textarea id = "AddText" /><button onClick = {() => setText(!addText)}><MdDelete /></button></div>}
      {addImage && <div className='add__image'><UploadBox></UploadBox> <button onClick = {() => setImage(!addImage)}><MdDelete /></button></div>}
      {addVideo && <div className='add__video'><textarea id = "AddVideo" /><button onClick = {() => setVideo(!addVideo)}><MdDelete /></button></div>}
      <div className='description__container-buttons'>
        <button className='cond__btn' onClick = {() => setText(true)}>Add Text</button>
        <button className='cond__btn' onClick = {() => setImage(true)}>Add Image</button>
        <button className='cond__btn' onClick = {() => setVideo(true)}>Add Video</button>
      </div>
    </div>
  );
}

export default Description