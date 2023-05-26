import React from "react";
import "./Events.css";
function Events(props) {
  return (
    <div className="wholecard">
      <div className="bgimg">
        <div className="likebtn">
          <a
            href="google.com"
            title="Add to Favourites"
            className="btn lovebtn"
          >
            <span>&#x2764;</span>
          </a>
        </div>
        <div className="content">
          <p className="title">{props.title}</p>
          <p className="date">{props.date}</p>
          <p className="location">{props.loc}</p>
          <p className="price">{props.price}</p>
        </div>
      </div>
    </div>
  );
}

export default Events;
