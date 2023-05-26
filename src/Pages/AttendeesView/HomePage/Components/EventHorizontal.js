import React from "react";
import { Link } from "react-router-dom";

/**
 * @author Yousef Gilany
 * @description The event card component used in the search page. 
 * It shows the event's image, title, date, location, price, and the organizer's name and followers.
 * @returns {React.FC}
 *
 */
const EventHorizontal = ({ Title, date, Organizer,Id,Image }) => {
  return Title && date && Organizer  && Image ?   <Link to={`/event/${Id}`}  >
    <div className="grid grid-cols-3 p-4 bg-white hover:drop-shadow-2xl w-max h-auto mb-2">
      <div className="col-span-2 ">
        <h1
          style={{
            fontWeight: "600",
            color: "#39364f",
            fontSize: "1.125rem",
            marginBottom: ".5rem",
            overflow: "hidden",
            textOverflow: "ellipsis",
            width: "280px"
          }}
        >
          {Title}
        </h1>
        <h2      style={{
            fontWeight: "600",
            color: "#d1410c",
            fontSize: ".875rem",
            lineHeight: "1.25rem",
          }}>{new Date(date).toLocaleDateString('en-US', {
            weekday: 'short',
            month: 'short',
            day: 'numeric',
            year: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            timeZoneName: 'short'
          })}</h2>

<h2      style={{
            fontWeight: "400",
            color: "#6f7287",
            fontSize: ".875rem",
            lineHeight: "1.25rem",
          }}>{Organizer}</h2>
      </div>
      <div className="col-span-1">
        <img className=" object-cover w-48 h-24" src={Image} alt="event" />
      </div>
    </div>
    </Link> :   
    // <Link to={`/event/${Id}`}  >
    <div className="grid grid-cols-3 p-4 bg-white hover:drop-shadow-2xl w-max h-auto mb-2">
      <div className="col-span-2">
        <h1
          style={{
            fontWeight: "600",
            color: "#39364f",
            fontSize: "1.125rem",
            lineHeight: "1.5rem",
            marginBottom: ".5rem",
          }}
        >
          Title
        </h1>
        <h2      style={{
            fontWeight: "600",
            color: "#d1410c",
            fontSize: ".875rem",
            lineHeight: "1.25rem",
          }}>Date</h2>

<h2      style={{
            fontWeight: "400",
            color: "#6f7287",
            fontSize: ".875rem",
            lineHeight: "1.25rem",
          }}>Organizer</h2>
      </div>
      <div className="col-span-1">
        {/* <img className=" object-cover w-48 h-24" src={Image} alt="event" /> */}
      </div>
    </div>
    // </Link>
  
  
};

export default EventHorizontal;
