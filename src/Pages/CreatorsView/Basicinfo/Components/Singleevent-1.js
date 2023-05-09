import React, { useRef } from "react";
import { useState } from "react";
import "./Singleevent.scss";

function Singleevent(props) {
  const [showwarning, setshowwarning] = useState(false);

  const startDateRef = useRef(null);
  const endDateRef = useRef(null);
  const startTimeRef = useRef(null);
  const endTimeRef = useRef(null);

  function changehandler(e) {
    if (e.target.value === "") {
      props.setStartDate(null);
      props.setEndDate(null);
      setshowwarning(true);
      const e = props.error.slice();
      props.setError([...props.error, "1"]);
    } else {
      // Convert date to YYYY-MM-DD HH:MM
      const full_start_date = new Date(
        startDateRef.current.value + " " + startTimeRef.current.value
      );
      const full_end_date = new Date(
        endDateRef.current.value + " " + endTimeRef.current.value
      );
      console.log("full_start_date: ", full_start_date);
      console.log("full_end_date: ", full_end_date);
      // Check end date is after start date
      if (full_end_date < full_start_date) {
        setshowwarning(true);
        props.setStartDate(null);
        props.setEndDate(null);
        props.setError(true);
        const e = props.error.slice();
        props.setError([...props.error, "1"]);
      } else {
        props.setStartDate(full_start_date);
        props.setEndDate(full_end_date);
        if (props.error.length !== 0) {
          // Pop element from error list
          const e = props.error.slice();
          e.pop();
          props.setError(e);
        }
        setshowwarning(false);
      }
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
            ref={startDateRef}
            id="startdateInput"
            className={showwarning ? "inputwarning" : "inputregular"}
            type="date"
            name="startdate"
            defaultValue={"2023-05-01"}
            onChange={changehandler}
          />
        </div>
        <div class="fulltime-input">
          <label for="starttime">Start time</label>
          <select
            ref={startTimeRef}
            id="starttimeInput"
            className="inputregular"
            type="select"
            name="starttime"
            role="textbox"
            defaultValue={"07:30 AM"}
            onChange={changehandler}
          >
            <option value="07:00 AM">07:00 AM</option>
            <option value="07:30 AM">07:30 AM</option>
            <option value="08:00 AM">08:00 AM</option>
            <option value="08:30 AM">08:30 AM</option>
            <option value="09:00 AM">09:00 AM</option>
            <option value="09:30 AM">09:30 AM</option>
            <option value="10:00 AM">10:00 AM</option>
            <option value="10:30 AM">10:30 AM</option>
            <option value="11:00 AM">11:00 AM</option>
            <option value="11:30 AM">11:30 AM</option>
            <option value="12:00 PM">12:00 PM</option>
            <option value="12:30 PM">12:30 PM</option>
            <option value="01:00 PM">01:00 PM</option>
            <option value="01:30 PM">01:30 PM</option>
            <option value="02:00 PM">02:00 PM</option>
            <option value="02:30 PM">02:30 PM</option>
            <option value="03:00 PM">03:00 PM</option>
            <option value="03:30 PM">03:30 PM</option>
            <option value="04:00 PM">04:00 PM</option>
            <option value="04:30 PM">04:30 PM</option>
            <option value="05:00 PM">05:00 PM</option>
            <option value="05:30 PM">05:30 PM</option>
            <option value="06:00 PM">06:00 PM</option>
            <option value="06:30 PM">06:30 PM</option>
            <option value="07:00 PM">07:00 PM</option>
            <option value="07:30 PM">07:30 PM</option>
            <option value="08:00 PM">08:00 PM</option>
            <option value="08:30 PM">08:30 PM</option>
            <option value="09:00 PM">09:00 PM</option>
            <option value="09:30 PM">09:30 PM</option>
            <option value="10:00 PM">10:00 PM</option>
          </select>
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
            ref={endDateRef}
            id="enddateInput"
            className={showwarning ? "inputwarning" : "inputregular"}
            type="date"
            name="enddate"
            defaultValue={"2023-05-03"}
            onChange={changehandler}
          />
        </div>
        <div class="fulltime-input">
          <label for="starttime">End time</label>
          <select
            ref={endTimeRef}
            id="endtimeInput"
            className="inputregular"
            type="select"
            name="starttime"
            role="textbox"
            defaultValue={"10:00 PM"}
            onChange={changehandler}
          >
            <option value="07:00 AM">07:00 AM</option>
            <option value="07:30 AM">07:30 AM</option>
            <option value="08:00 AM">08:00 AM</option>
            <option value="08:30 AM">08:30 AM</option>
            <option value="09:00 AM">09:00 AM</option>
            <option value="09:30 AM">09:30 AM</option>
            <option value="10:00 AM">10:00 AM</option>
            <option value="10:30 AM">10:30 AM</option>
            <option value="11:00 AM">11:00 AM</option>
            <option value="11:30 AM">11:30 AM</option>
            <option value="12:00 PM">12:00 PM</option>
            <option value="12:30 PM">12:30 PM</option>
            <option value="01:00 PM">01:00 PM</option>
            <option value="01:30 PM">01:30 PM</option>
            <option value="02:00 PM">02:00 PM</option>
            <option value="02:30 PM">02:30 PM</option>
            <option value="03:00 PM">03:00 PM</option>
            <option value="03:30 PM">03:30 PM</option>
            <option value="04:00 PM">04:00 PM</option>
            <option value="04:30 PM">04:30 PM</option>
            <option value="05:00 PM">05:00 PM</option>
            <option value="05:30 PM">05:30 PM</option>
            <option value="06:00 PM">06:00 PM</option>
            <option value="06:30 PM">06:30 PM</option>
            <option value="07:00 PM">07:00 PM</option>
            <option value="07:30 PM">07:30 PM</option>
            <option value="08:00 PM">08:00 PM</option>
            <option value="08:30 PM">08:30 PM</option>
            <option value="09:00 PM">09:00 PM</option>
            <option value="09:30 PM">09:30 PM</option>
            <option value="10:00 PM">10:00 PM</option>
          </select>
        </div>
      </div>
      <div>
        {showwarning ? (
          <label className="warning-label">
            End date must be after start date.
          </label>
        ) : null}
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
