import React from 'react'
import { BsRocket } from 'react-icons/bs'
import './addEvents.css'
import AddSection from '../AddSection/AddSection'
import { GiHelp } from "react-icons/gi";
import { AiOutlineRead } from 'react-icons/ai'
const AddEvents = () => {
  return (
    <div className="addEvents__container">
      <BsRocket className="rocket__logo" />
      <h2 style={{ marginBottom: "7px" }}>Add more sections to your event page</h2>
      <p style={{ fontSize: "14px" }}> Make your event stand out even more. Adding these sections will helpattendees purchase tickets.</p>
      <div className="add__section">
        <AddSection Title = "Agenda" Logo = {<AiOutlineRead />} />
        <div className="line" style={{ margin: "30px 0px" }}>
          <hr />
        </div>
        <AddSection Title = "FAQ" Logo = {<GiHelp />} />
      </div>
    </div>
  );
}

export default AddEvents


