import React from "react";
import { useState } from "react";
import "./Singleevent.scss";

function Singleevent(props) {
  const [showwarning, setshowwarning] = useState(false);
  function changehandler(e) {
    if (e.target.value === "") {
      setshowwarning(true);
    } else {
      setshowwarning(false);
    }
  }
  return (
    <div>
      <p>Single event happens once and can last multiple days</p>
      <div className="chooseeventdate">
        <div class="fulldate-input">
          <svg
            id="calendar-chunky_svg__eds-icon--calendar-chunky_svg"
            className="datesvgicon"
            viewBox="0 0 24 24"
            xmlspace="preserve"
          >
            <path
              id="calendar-chunky_svg__eds-icon--calendar-chunky_base"
              d="M16.9 6.5v-2h-2v2h-6v-2h-2v2h-2v13h14v-13h-2zm0 11h-10v-7h10v7z"
            ></path>
          </svg>
          <label for="startdate">
            Event Starts<sup className="suplol"> *</sup>
          </label>
          <input
            id="startdateInput"
            className={showwarning ? "inputwarning" : "inputregular"}
            type="text"
            name="startdate"
            role="textbox"
            defaultValue={"05/07/2023"}
            onChange={changehandler}
          />
        </div>
        <div class="fulltime-input">
          <label for="starttime">Start time</label>
          <input
            id="starttimeInput"
            className="inputregular"
            type="text"
            name="starttime"
            role="textbox"
            defaultValue={"7:30 AM"}
          />
        </div>
      </div>
      <div className="chooseeventdate">
        <div class="fulldate-input">
          <svg
            id="calendar-chunky_svg__eds-icon--calendar-chunky_svg"
            className="datesvgicon"
            viewBox="0 0 24 24"
            xmlspace="preserve"
          >
            <path
              id="calendar-chunky_svg__eds-icon--calendar-chunky_base"
              d="M16.9 6.5v-2h-2v2h-6v-2h-2v2h-2v13h14v-13h-2zm0 11h-10v-7h10v7z"
            ></path>
          </svg>
          <label for="enddate">
            Event Ends<sup className="suplol"> *</sup>
          </label>
          <input
            id="enddateInput"
            className={showwarning ? "inputwarning" : "inputregular"}
            type="text"
            name="enddate"
            role="textbox"
            defaultValue={"05/08/2023"}
            onChange={changehandler}
          />
        </div>
        <div class="fulltime-input">
          <label for="starttime">End time</label>
          <input
            id="endtimeInput"
            className="inputregular"
            type="text"
            name="starttime"
            role="textbox"
            defaultValue={"10:00 PM"}
          />
        </div>
      </div>
      <label className="displaybox-container">
        Display start time.
        <br />
        The start time of your event will be displayed to attendees.
        <input id="displayTimeCheck" type="checkbox" defaultChecked />
        <span className="checkmark"></span>
      </label>
    </div>
  );
}

export default Singleevent;
