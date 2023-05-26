import react from "react";
import { useState } from "react";
import "./Venue.scss";

function Venue(props) {
  const [showsearchwarning, setSearchWarning] = useState(false);
  function searchwarninghandler(e) {
    props.setVenue(e.target.value);
    if (document.getElementsByName("venuesearch")[0].value === "") {
      setSearchWarning(true);
    } else {
      setSearchWarning(false);
    }
  }
  return (
    // if showmap is true, call render2, else call render1
    <div>
      <div className="locationcontent-container">
        <div>
          <p className="eds-l-mar-bot-2 eds-text-weight--heavy">
            Venue location
          </p>
        </div>
        <div className="searchlocation-input">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="currentColor"
            className="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
          <input
            className={showsearchwarning ? "inputwarning" : "inputregular"}
            type="text"
            name="venuesearch"
            placeholder="Search for a venue or address"
            onChange={searchwarninghandler}
            onKeyDown={props.keypress}
          />
        </div>
        <p className="warning">
          {showsearchwarning ? "Location is required" : null}
        </p>
      </div>
    </div>
  );
}

export default Venue;
