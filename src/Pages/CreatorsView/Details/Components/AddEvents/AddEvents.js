import React from 'react'
import { BsRocket } from 'react-icons/bs'
import './addEvents.css'
import AddSection from '../AddSection/AddSection'
import AddFAQ from '../AddFAQ/AddFAQ'
import { GiHelp } from "react-icons/gi";
import { AiOutlineRead, AiOutlineMenuFold } from "react-icons/ai";
import { MdDelete } from 'react-icons/md'
import {MdOutlineAccountCircle} from 'react-icons/md'
import { createContext, useState } from 'react';
import {GoPlusSmall} from 'react-icons/go'
import TimePickerValue from '../../../../../Components/TimeBox/TimeBox';
import { CiCircleRemove } from 'react-icons/ci'
export const AddEventContext = createContext({});
const AddEvents = () => {
  const [addEventBtn, setAddEventBtn] = useState(false);
  const [addAgendaBtn, setAddAgendaBtn] = useState(false);
  const [addDescription, setAddDescription] = useState(false);
  const [addHostName, setAddHostName] = useState(false);
  return (
    <AddEventContext.Provider value={{ addEventBtn, setAddEventBtn, addAgendaBtn, setAddAgendaBtn }}>
      <div className="addEvents__container" data-testid="addEvents">
        {addEventBtn && (
          <div className="add__FAQ">
            <div className="delete__section">
              <button id = "delete__section-btn" className="delete__section-btn" onClick={() => setAddEventBtn(!addEventBtn)}>Delete Section</button>
            </div>
            <h1 className="FAQ__title" style={{fontSize: "24px", color: "rgb(30, 10, 60)", marginBottom: "10px", fontWeight: "600", marginTop: "25px"}}>FAQ</h1>
            <p style={{marginBottom: "10px",fontSize: "14px",color: "#39364F",}}> Answer questions your attendees may have about the event, like parking, accessibility and refunds.</p>
            <hr className="vertical__line"></hr>
            <input id = "addQuestion__agedna" type="text" placeholder="Question" style={{width: "80%",height: "52px",padding: "10px 20px",marginBottom: "22px",}}/>
            <MdDelete className="delete__FAQ" />
            <input id = "addAnswer__agenda" type="text" placeholder="Answer" style={{width: "80%",height: "112px",padding: "0px 20px",marginBottom: "35px",}}/>
            <button id = "add__FAQ-btn" className="add__FAQ-btn"><GoPlusSmall style = {{fontSize:'20px'}} /> Add question</button>
          </div>
        )}
        {addAgendaBtn && (
          <div className="add__Agenda">
            <div className="delete__section">
              <button id = "delete__section-btn" className="delete__section-btn" onClick={() => setAddAgendaBtn(!addAgendaBtn)}>Delete Section</button>
            </div>
            <h1 className="Agenda__title" style={{fontSize: "24px",color: "rgb(30, 10, 60)",marginBottom: "10px",fontWeight: "600",marginTop: "25px"}}>Agenda</h1>
            <p style={{marginBottom: "10px",fontSize: "14px",color: "#39364F",maxWidth: "570px"}}> Add an itinerary or schedule to your event. You can include the time, a description of what will happen, and who will host this part of the event, if applicable. (Ex. Speaker, performer, guide, etc.)</p>
            <hr className="vertical__line-agenda"></hr>
            <input id = "add__slot-title" className="add__slot-title" type="text" style={{width: "481px",height: "52px",padding: "0px 20px 0px 16px",marginTop: "15px",marginBottom: "25px"}} placeholder="Slot Title"/>
            <MdDelete className="delete__FAQ" />
            <TimePickerValue />
            {addDescription && <input id = "description__btn-agenda" type="text" className='description__btn-agenda' placeholder='Description' />}
            {addDescription && <button id = "remove__description" className='remove__description' onClick={() => setAddDescription(false)}><CiCircleRemove /></button>}
            {addHostName && <div className='addHost__agenda'>
              <input id = "addHostText" type="text" placeholder='Host name' />
              <button id = "remove__hostname" className='remove__hostname' onClick = {() => setAddHostName(false)}><CiCircleRemove /></button>
            </div>}
            <div className="addHostDescription">
              <MdOutlineAccountCircle />
              <button id = "addHostBtn" className="addHostBtn" onClick = {() => setAddHostName(true)}>Add Host</button>
              <AiOutlineMenuFold />{" "}
              <butotn id = "addDescriptionBtn" className="addDescriptionBtn" onClick = {() => setAddDescription(true)}>Add Description</butotn>
            </div>
            <button id = "add__Agenda-btn" className="add__Agenda-btn"> <GoPlusSmall style = {{fontSize:'20px'}} /> Add Slot</button>
          </div>
        )}

        {(!addAgendaBtn || !addEventBtn) && <BsRocket className="rocket__logo" />}
        {(!addAgendaBtn || !addEventBtn) && <h2 style={{ marginBottom: "7px", fontSize: "30px", fontWeight: "700" }}> Add more sections to your event page </h2>}
        {(!addAgendaBtn || !addEventBtn) && <p style={{ fontSize: "14px" }}>{" "} Make your event stand out even more. Adding these sections will helpattendees purchase tickets.</p>}
        {(!addAgendaBtn || !addEventBtn) && <div className="add__section" data-testid="addSection">
          {!addAgendaBtn && (
            <AddSection Title="Agenda" Logo={<AiOutlineRead />} />
          )}
          {/* <div className="line" style={{ margin: "30px 0px", bordetTop:'red' }}> */}
          {!addEventBtn && !addAgendaBtn && <hr />}
          {/* </div> */}
          {!addEventBtn && <AddFAQ Title="FAQ" Logo={<GiHelp />} />}
        </div>}
      </div>
    </AddEventContext.Provider>
  );
}

export default AddEvents


