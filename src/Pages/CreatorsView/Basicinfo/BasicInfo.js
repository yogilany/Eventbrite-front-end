import { useEffect, useState } from "react";
import "./BasicInfo.scss";
import Tag from "./Components/Tag-1.js";
import Venue from "./Components/Venue-1.js";
import Loctype from "./Components/Loctype-1.js";
import Mapframe from "./Components/Mapframe-1.js";
import Singleevent from "./Components/Singleevent-1.js";
import { Alert, Row, Col } from "react-bootstrap";

/**
 * @author Anas Sherif
 * @param {}
 * @description This is basic info compoennt. It's the fisrt step of creating an event.
 * @returns {JSX.Element}
 */

function Basicinfo({ event, setEvent, setEventTitle }) {
  const [tags, setTags] = useState([]);
  const [tagscount, setTagsCount] = useState(0);
  const [tagscharcount, setTagsCharCount] = useState(0);
  const [charcount, setCount] = useState(0);
  const [showwarning, setWarning] = useState(false);
  const [locationparam, setLocationParam] = useState("option-1");
  const [showlocationcontent, setShowLocationContent] = useState(true);
  const [showmaps, setShowMaps] = useState(false);
  const [issingleevent, setIsSingleEvent] = useState(true);
  const [title, setTitle] = useState("");
  const [organizer, setOrganizer] = useState("");
  const [venue, setVenue] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date() + 24 * 60 * 60 * 1000);
  const [timezone, setTimezone] = useState("");
  const [language, setLanguage] = useState("");
  const [isStartShown, setIsStartShown] = useState(null);
  const [isEndShown, setIsEndShown] = useState(null);
  const [category, setCategory] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState([]);

  function saveData() {
    if (error.length !== 0) return;
    setEvent({
      ...event,
      basic_info: {
        ...event.basic_info,
        title: title,
        organizer: organizer,
        category: category,
      },
      date_and_time: {
        start_date_time: startDate,
        end_date_time: endDate,
        is_display_start_date: true,
        is_display_end_date: true,
        time_zone: timezone,
        event_page_language: language,
      },
      location: { city: venue, is_online: true },
    });

    setSuccess(true);
  }

  useEffect(() => {
    setTimeout(() => {
      // After 3 seconds set the show value to false
      setSuccess(false);
    }, 3000);
  }, [success]);

  // function incrementhandler() {
  //   setCount(document.getElementsByName("eventtitle")[0].value.length);
  //   if (document.getElementsByName("eventtitle")[0].value.length === 0) {
  //     setWarning(true);
  //   } else {
  //     setWarning(false);
  //   }
  //   // console.log("Added !");
  // }

  function addtaghandler(event) {
    if (event.key === "Enter" && event.target.value !== "") {
      // if number of tags is less than 10
      if (tags.length < 10) {
        setTags([...tags, event.target.value]);
        event.target.value = "";
        setTagsCharCount(0);
        setTagsCount(tagscount + 1);
      }
    }
  }

  function addtaghandlerbtn(event) {
    if (document.getElementsByName("tags")[0].value !== "") {
      // Check if tag already exists
      // if number of tags is less than 10

      if (
        tags.length < 10 &&
        !tags.includes(document.getElementsByName("tags")[0].value)
      ) {
        setTags([...tags, document.getElementsByName("tags")[0].value]);
        document.getElementsByName("tags")[0].value = "";
        setTagsCharCount(0);
        setTagsCount(tagscount + 1);
      }
    }
  }

  // function to remove tag from the list
  const removetaghandler = (index) => (e) => {
    setTags([...tags.filter((tag, i) => i !== index)]);
    setTagsCount(tagscount - 1);
  };

  function tagccharcounthandler(event) {
    setTagsCharCount(document.getElementsByName("tags")[0].value.length);
  }

  function locationradiohandler(event) {
    setLocationParam(event.target.id);
  }

  function keypresshandler(event) {
    if (event.key === "Enter") {
      // set showlocationcontent to false
      setShowLocationContent(false);
      // set showmaps to true
      setShowMaps(true);
    }
  }

  function singleeventhandler(event) {
    // if the event has the id of dateoption-1 then set issingleevent to true
    if (event.target.id === "dateoption-1") {
      setIsSingleEvent(true);
    } else {
      setIsSingleEvent(false);
    }
  }

  return (
    <>
      <Row>
        <Col>
          <div className="BasicinfoPage_Container mb-5 pb-5">
            {success && error.length === 0 ? (
              <Alert
                variant="success"
                style={{
                  width: "70%",
                  position: "fixed",
                  top: "70px",
                  zIndex: "999",
                }}
              >
                Data saved successfully.
              </Alert>
            ) : null}
            {error.length > 0 ? (
              <Alert
                variant="danger"
                style={{
                  width: "70%",
                  position: "fixed",
                  top: "70px",
                  zIndex: "999",
                }}
              >
                Please fill out all of the required fields correctly
              </Alert>
            ) : null}
            <div className="Section_Container">
              <div className="Section_image">
                <svg
                  id="title-edit_svg__eds-icon--title-edit_svg"
                  className="titlesvgicon"
                  viewBox="0 0 24 24"
                  xmlspace="preserve"
                >
                  <path
                    id="title-edit_svg__eds-icon--title-edit_base"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2 2v3h1V3h5v10H6v1h5v-1H9V3h5v2h1V2H2z"
                  ></path>
                  <g
                    id="title-edit_svg__eds-icon--title-edit_lines"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  >
                    <path d="M15 9h7v1h-7zM15 13h7v1h-7zM6 17h16v1H6zM6 21h16v1H6z"></path>
                  </g>
                </svg>
              </div>
              <div className="content_container">
                <div>
                  <h1 className="title">Basic Info</h1>
                  <div className="subtitle">
                    Name your event and tell event-goers why they should come.
                    Add details that highlight what makes it unique.
                  </div>
                  <div className="full-input">
                    <label for="eventtitle">
                      Event Title<sup className="suplol"> *</sup>
                    </label>
                    <input
                      required
                      className={showwarning ? "inputwarning" : "inputregular"}
                      placeholder="Be clear and discriptive."
                      type="text"
                      name="eventtitle"
                      maxLength={75}
                      value={title}
                      onChange={(event) => {
                        setEventTitle(event.target.value);
                        setTitle(event.target.value);
                        setCount(event.target.value.length);
                      }}
                    />
                  </div>
                  <div className="counter" id="the-count">
                    {showwarning ? (
                      <div className="warning">
                        Title is required., HTML text cannot be used in event
                        titles.
                      </div>
                    ) : null}
                    <div className="charcounter">
                      <span id="current">{charcount}</span>
                      <span id="maximum">/75</span>
                    </div>
                  </div>
                  <div className="full-input">
                    <label for="organizer">Organizer</label>
                    <input
                      required
                      className="inputregular"
                      placeholder="Tell attendees who is organizing this event. "
                      type="text"
                      name="organizer"
                      maxLength={75}
                      value={organizer}
                      onChange={(event) => setOrganizer(event.target.value)}
                    />
                  </div>
                  <p className="organizer-helper-text">
                    This profile describes a unique organizer and shows all of
                    the events on one page.{" "}
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      View Organizer Info
                    </a>
                  </p>
                  <div className="select-container">
                    <select
                      required
                      aria-invalid="false"
                      aria-labelledby="eventType-label"
                      className="input eds-field-styled__select"
                      id="eventType"
                      name="eventType"
                    >
                      <option value="" data-spec="select-option">
                        Type
                      </option>
                      <option value="19" data-spec="select-option">
                        Appearance or Signing
                      </option>
                      <option value="17" data-spec="select-option">
                        Attraction
                      </option>
                      <option value="18" data-spec="select-option">
                        Camp, Trip, or Retreat
                      </option>
                      <option value="9" data-spec="select-option">
                        Class, Training, or Workshop
                      </option>
                      <option value="6" data-spec="select-option">
                        Concert or Performance
                      </option>
                      <option value="1" data-spec="select-option">
                        Conference
                      </option>
                      <option value="4" data-spec="select-option">
                        Convention
                      </option>
                      <option value="8" data-spec="select-option">
                        Dinner or Gala
                      </option>
                      <option value="5" data-spec="select-option">
                        Festival or Fair
                      </option>
                      <option value="14" data-spec="select-option">
                        Game or Competition
                      </option>
                      <option value="10" data-spec="select-option">
                        Meeting or Networking Event
                      </option>
                      <option value="100" data-spec="select-option">
                        Other
                      </option>
                      <option value="11" data-spec="select-option">
                        Party or Social Gathering
                      </option>
                      <option value="15" data-spec="select-option">
                        Race or Endurance Event
                      </option>
                      <option value="12" data-spec="select-option">
                        Rally
                      </option>
                      <option value="7" data-spec="select-option">
                        Screening
                      </option>
                      <option value="2" data-spec="select-option">
                        Seminar or Talk
                      </option>
                      <option value="16" data-spec="select-option">
                        Tour
                      </option>
                      <option value="13" data-spec="select-option">
                        Tournament
                      </option>
                      <option value="3" data-spec="select-option">
                        Tradeshow, Consumer Show, or Expo
                      </option>
                    </select>
                    <select
                      aria-invalid="false"
                      aria-labelledby="eventSubTopic-label"
                      className="input eds-field-styled__select"
                      id="eventSubTopic"
                      name="eventTopic"
                      value={category}
                      onChange={(event) => {
                        setCategory(
                          event.target.options[event.target.selectedIndex].text
                        );
                      }}
                    >
                      <option value="" data-spec="select-option" defaultChecked>
                        Category
                      </option>
                      <option value="118" data-spec="select-option">
                        Auto, Boat &amp; Air
                      </option>
                      <option value="101" data-spec="select-option">
                        Business &amp; Professional
                      </option>
                      <option value="111" data-spec="select-option">
                        Charity &amp; Causes
                      </option>
                      <option value="113" data-spec="select-option">
                        Community &amp; Culture
                      </option>
                      <option value="115" data-spec="select-option">
                        Family &amp; Education
                      </option>
                      <option value="106" data-spec="select-option">
                        Fashion &amp; Beauty
                      </option>
                      <option value="104" data-spec="select-option">
                        Film, Media &amp; Entertainment
                      </option>
                      <option value="110" data-spec="select-option">
                        Food &amp; Drink
                      </option>
                      <option value="112" data-spec="select-option">
                        Government &amp; Politics
                      </option>
                      <option value="107" data-spec="select-option">
                        Health &amp; Wellness
                      </option>
                      <option value="119" data-spec="select-option">
                        Hobbies &amp; Special Interest
                      </option>
                      <option value="117" data-spec="select-option">
                        Home &amp; Lifestyle
                      </option>
                      <option value="103" data-spec="select-option">
                        Music
                      </option>
                      <option value="199" data-spec="select-option">
                        Other
                      </option>
                      <option value="105" data-spec="select-option">
                        Performing &amp; Visual Arts
                      </option>
                      <option value="114" data-spec="select-option">
                        Religion &amp; Spirituality
                      </option>
                      <option value="120" data-spec="select-option">
                        School Activities
                      </option>
                      <option value="102" data-spec="select-option">
                        Science &amp; Technology
                      </option>
                      <option value="116" data-spec="select-option">
                        Seasonal &amp; Holiday
                      </option>
                      <option value="108" data-spec="select-option">
                        Sports &amp; Fitness
                      </option>
                      <option value="109" data-spec="select-option">
                        Travel &amp; Outdoor
                      </option>
                    </select>
                  </div>
                  <div className="eds-text-bl">Tags</div>
                  <div className="eds-text-bm">
                    Improve discoverability of your event by adding tags
                    relevant to the subject matter.
                  </div>
                  <div className="big-tag-container">
                    <div className="textarea-container">
                      <div className="full-input">
                        <label for="tags">Press Enter to add a tag</label>
                        <input
                          className={
                            tagscount === 10 ? "inputwarning" : "inputregular"
                          }
                          placeholder="Add search keywords to your event"
                          type="text"
                          name="tags"
                          maxLength={25}
                          onKeyDown={addtaghandler}
                          onChange={tagccharcounthandler}
                        />
                      </div>
                      <div className="tagscount-container">
                        <span
                          className={tagscount === 10 ? "tagcountwarning" : ""}
                        >
                          {tagscount}/10{" "}
                          {tagscount === 10 ? "tag limit reached" : "tags."}
                        </span>
                        <span className="tagcharcount">{tagscharcount}/25</span>
                      </div>
                    </div>
                    <button
                      className="eds-add-btn"
                      type="button"
                      onClick={addtaghandlerbtn}
                    >
                      Add
                    </button>
                  </div>
                  <div className="vartags-container">
                    {tags.map((tag, index) => {
                      return (
                        <Tag
                          key={index}
                          text={tag}
                          onPress={removetaghandler(index)}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            <hr
              className="eds-divider__hr eds-bg-color--ui-200 eds-divider--horizontal"
              data-spec="divider-hr"
              aria-hidden="true"
            ></hr>
            <div className="Section_Container">
              <div className="Section_image">
                <svg
                  id="map_svg__eds-icon--map_svg"
                  className="titlesvgicon"
                  viewBox="0 0 24 24"
                  xmlspace="preserve"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M20 3c-1.1 0-2 .9-2 2H2v16h17.8c1.1 0 2.1-.9 2.1-2V5c.1-1.1-.8-2-1.9-2zm-.2 17H3V6h15v13h1c0-.6.4-1 1-1 .5 0 .9.4 1 .9-.1.6-.6 1.1-1.2 1.1zm1.2-2.7c-.3-.2-.6-.3-1-.3s-.7.1-1 .3V5c0-.6.4-1 1-1s1 .4 1 1v12.3z"
                  ></path>
                  <path
                    id="map_svg__eds-icon--map_cross"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.8 12.7l.7-.7-1.1-1 1.1-1-.7-.7-1.1 1-1-1-.7.7 1 1-1 1 .7.7 1-1z"
                  ></path>
                  <path
                    id="map_svg__eds-icon--map_dash_3_"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 10h2v1h-2z"
                  ></path>
                  <path
                    id="map_svg__eds-icon--map_dash_2_"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M15 12h1v2h-1z"
                  ></path>
                  <path
                    id="map_svg__eds-icon--map_dash_1_"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 15h2v1h-2z"
                  ></path>
                  <path
                    id="map_svg__eds-icon--map_dash"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8 15h2v1H8z"
                  ></path>
                </svg>
              </div>
              <div className="content_container">
                <h1 className="title">Location</h1>
                <div className="subtitle">
                  Help people in the area discover your event and let attendees
                  know where to show up.
                </div>
                {showlocationcontent ? (
                  <Loctype onchoose={locationradiohandler} />
                ) : null}
                {locationparam === "option-1" && !showmaps ? (
                  <Venue
                    keypress={keypresshandler}
                    venue={venue}
                    setVenue={setVenue}
                  />
                ) : null}
                {locationparam === "option-2" ? (
                  <div>
                    Online events have unique event pages where you can add
                    links to livestreams and more
                  </div>
                ) : null}
                {locationparam === "option-3" ? <div></div> : null}
                {showmaps ? <Mapframe /> : null}
              </div>
            </div>
            <hr
              className="eds-divider__hr eds-bg-color--ui-200 eds-divider--horizontal"
              data-spec="divider-hr"
              aria-hidden="true"
            ></hr>
            <div className="Section_Container">
              <div className="Section_image">
                <svg
                  id="calendar_svg__eds-icon--calendar_svg"
                  className="titlesvgicon"
                  viewBox="0 0 24 24"
                  xmlspace="preserve"
                >
                  <path
                    id="calendar_svg__eds-icon--calendar_base"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M17 4V2h-1v2H8V2H7v2H2v18h20V4h-5zm4 17H3V9h18v12zM3 8V5h4v1h1V5h8v1h1V5h4v3H3z"
                  ></path>
                  <g
                    id="calendar_svg__eds-icon--calendar_squares"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  >
                    <path d="M15 16h2v2h-2zM11 16h2v2h-2zM7 16h2v2H7zM15 12h2v2h-2zM11 12h2v2h-2zM7 12h2v2H7z"></path>
                  </g>
                </svg>
              </div>
              <div className="content_container">
                <div>
                  <h1 className="title">Date and time</h1>
                  <div className="subtitle">
                    Tell event-goers when your event starts and ends so they can
                    make plans to attend.
                  </div>
                </div>
                <div className="wrapper">
                  <input
                    type="radio"
                    name="selectdatetype"
                    id="dateoption-1"
                    defaultChecked
                    onClick={singleeventhandler}
                  />
                  <input
                    type="radio"
                    name="selectdatetype"
                    id="dateoption-2"
                    onClick={singleeventhandler}
                  />
                  <label for="dateoption-1" className="dateoption dateoption-1">
                    <span>Single Event</span>
                  </label>
                  <label for="dateoption-2" className="dateoption dateoption-2">
                    <span>Recurring Event</span>
                  </label>
                </div>
                {issingleevent ? (
                  <Singleevent
                    isStartShown={isStartShown}
                    setIsStartShown={setIsStartShown}
                    setEndDate={setEndDate}
                    setStartDate={setStartDate}
                    startDate={startDate}
                    endDate={endDate}
                    setError={setError}
                    error={error}
                  />
                ) : (
                  <div className="rec-subtitle">
                    You’ll be able to set a schedule for your recurring event in
                    the next step. Event details and ticket types will apply to
                    all instances.
                  </div>
                )}
                <label className="displaybox-container">
                  Display end time.
                  <br />
                  The end time of your event will be displayed to attendees.
                  <input
                    type="checkbox"
                    defaultChecked
                    value={isEndShown}
                    onChange={(e) => {
                      setIsEndShown(e.target.checked);
                    }}
                  />
                  <span className="checkmark"></span>
                </label>
                <div className="fulltime-input">
                  <label for="time-zone">Time zone</label>
                  <select
                    aria-invalid="false"
                    aria-labelledby="time-zone-label"
                    className="inputregular"
                    id="time-zone"
                    name="venueTimeZone"
                    defaultValue={"Africa/Cairo"}
                    value={timezone}
                    onChange={(e) => {
                      setTimezone(e.target.value);
                    }}
                  >
                    <option value="America/Araguaina" data-spec="select-option">
                      (GMT-0300) Brazil (Araguaina) Time
                    </option>
                    <option value="America/Bahia" data-spec="select-option">
                      (GMT-0300) Brazil (Bahia) Time
                    </option>
                    <option value="America/Belem" data-spec="select-option">
                      (GMT-0300) Brazil (Belem) Time
                    </option>
                    <option value="America/Fortaleza" data-spec="select-option">
                      (GMT-0300) Brazil (Fortaleza) Time
                    </option>
                    <option value="America/Maceio" data-spec="select-option">
                      (GMT-0300) Brazil (Maceio) Time
                    </option>
                    <option value="America/Recife" data-spec="select-option">
                      (GMT-0300) Brazil (Recife) Time
                    </option>
                    <option value="America/Santarem" data-spec="select-option">
                      (GMT-0300) Brazil (Santarem) Time
                    </option>
                    <option value="America/Sao_Paulo" data-spec="select-option">
                      (GMT-0300) Brazil (Sao Paulo) Time
                    </option>
                    <option value="America/Glace_Bay" data-spec="select-option">
                      (GMT-0300) Canada (Glace Bay) Time
                    </option>
                    <option value="America/Goose_Bay" data-spec="select-option">
                      (GMT-0300) Canada (Goose Bay) Time
                    </option>
                    <option value="America/Halifax" data-spec="select-option">
                      (GMT-0300) Canada (Halifax) Time
                    </option>
                    <option value="America/Moncton" data-spec="select-option">
                      (GMT-0300) Canada (Moncton) Time
                    </option>
                    <option value="America/Santiago" data-spec="select-option">
                      (GMT-0300) Chile (Santiago) Time
                    </option>
                    <option value="Atlantic/Stanley" data-spec="select-option">
                      (GMT-0300) Falkland Islands Time
                    </option>
                    <option value="America/Cayenne" data-spec="select-option">
                      (GMT-0300) French Guiana Time
                    </option>
                    <option value="America/Thule" data-spec="select-option">
                      (GMT-0300) Greenland (Thule) Time
                    </option>
                    <option
                      value="America/Paramaribo"
                      data-spec="select-option"
                    >
                      (GMT-0300) Suriname Time
                    </option>
                    <option
                      value="America/Punta_Arenas"
                      data-spec="select-option"
                    >
                      (GMT-0300) Unknown Region (Punta Arenas) Time
                    </option>
                    <option
                      value="America/Montevideo"
                      data-spec="select-option"
                    >
                      (GMT-0300) Uruguay Time
                    </option>
                    <option value="America/St_Johns" data-spec="select-option">
                      (GMT-0230) Canada (St. John’s) Time
                    </option>
                    <option value="America/Noronha" data-spec="select-option">
                      (GMT-0200) Brazil (Noronha) Time
                    </option>
                    <option
                      value="Atlantic/South_Georgia"
                      data-spec="select-option"
                    >
                      (GMT-0200) South Georgia &amp; South Sandwich Islands Time
                    </option>
                    <option value="America/Nuuk" data-spec="select-option">
                      (GMT-0200) Unknown Region (Nuuk) Time
                    </option>
                    <option value="America/Miquelon" data-spec="select-option">
                      (GMT-0200) World (Miquelon) Time
                    </option>
                    <option
                      value="Atlantic/Cape_Verde"
                      data-spec="select-option"
                    >
                      (GMT-0100) Cape Verde Time
                    </option>
                    <option
                      value="Africa/Ouagadougou"
                      data-spec="select-option"
                    >
                      (GMT+0000) Burkina Faso Time
                    </option>
                    <option value="Africa/Abidjan" data-spec="select-option">
                      (GMT+0000) Côte d’Ivoire Time
                    </option>
                    <option value="Africa/Banjul" data-spec="select-option">
                      (GMT+0000) Gambia Time
                    </option>
                    <option value="Africa/Accra" data-spec="select-option">
                      (GMT+0000) Ghana Time
                    </option>
                    <option
                      value="America/Danmarkshavn"
                      data-spec="select-option"
                    >
                      (GMT+0000) Greenland (Danmarkshavn) Time
                    </option>
                    <option
                      value="America/Scoresbysund"
                      data-spec="select-option"
                    >
                      (GMT+0000) Greenland (Ittoqqortoormiit) Time
                    </option>
                    <option value="Africa/Conakry" data-spec="select-option">
                      (GMT+0000) Guinea Time
                    </option>
                    <option value="Africa/Bissau" data-spec="select-option">
                      (GMT+0000) Guinea-Bissau Time
                    </option>
                    <option
                      value="Atlantic/Reykjavik"
                      data-spec="select-option"
                    >
                      (GMT+0000) Iceland Time
                    </option>
                    <option value="Africa/Monrovia" data-spec="select-option">
                      (GMT+0000) Liberia Time
                    </option>
                    <option value="Africa/Bamako" data-spec="select-option">
                      (GMT+0000) Mali Time
                    </option>
                    <option value="Africa/Nouakchott" data-spec="select-option">
                      (GMT+0000) Mauritania Time
                    </option>
                    <option value="Africa/Casablanca" data-spec="select-option">
                      (GMT+0000) Morocco Time
                    </option>
                    <option value="Atlantic/Azores" data-spec="select-option">
                      (GMT+0000) Portugal (Azores) Time
                    </option>
                    <option value="Africa/Sao_Tome" data-spec="select-option">
                      (GMT+0000) São Tomé &amp; Príncipe Time
                    </option>
                    <option value="Africa/Dakar" data-spec="select-option">
                      (GMT+0000) Senegal Time
                    </option>
                    <option value="Africa/Freetown" data-spec="select-option">
                      (GMT+0000) Sierra Leone Time
                    </option>
                    <option
                      value="Atlantic/St_Helena"
                      data-spec="select-option"
                    >
                      (GMT+0000) St. Helena Time
                    </option>
                    <option value="Africa/Lome" data-spec="select-option">
                      (GMT+0000) Togo Time
                    </option>
                    <option value="UTC" data-spec="select-option">
                      UTC
                    </option>
                    <option value="Africa/El_Aaiun" data-spec="select-option">
                      (GMT+0000) Western Sahara Time
                    </option>
                    <option value="Africa/Algiers" data-spec="select-option">
                      (GMT+0100) Algeria Time
                    </option>
                    <option value="Africa/Luanda" data-spec="select-option">
                      (GMT+0100) Angola Time
                    </option>
                    <option value="Africa/Porto-Novo" data-spec="select-option">
                      (GMT+0100) Benin Time
                    </option>
                    <option value="Africa/Douala" data-spec="select-option">
                      (GMT+0100) Cameroon Time
                    </option>
                    <option value="Africa/Bangui" data-spec="select-option">
                      (GMT+0100) Central African Republic Time
                    </option>
                    <option value="Africa/Ndjamena" data-spec="select-option">
                      (GMT+0100) Chad Time
                    </option>
                    <option
                      value="Africa/Brazzaville"
                      data-spec="select-option"
                    >
                      (GMT+0100) Congo - Brazzaville Time
                    </option>
                    <option value="Africa/Kinshasa" data-spec="select-option">
                      (GMT+0100) Congo - Kinshasa (Kinshasa) Time
                    </option>
                    <option value="Africa/Malabo" data-spec="select-option">
                      (GMT+0100) Equatorial Guinea Time
                    </option>
                    <option value="Atlantic/Faroe" data-spec="select-option">
                      (GMT+0100) Faroe Islands Time
                    </option>
                    <option value="Africa/Libreville" data-spec="select-option">
                      (GMT+0100) Gabon Time
                    </option>
                    <option value="Europe/Guernsey" data-spec="select-option">
                      (GMT+0100) Guernsey Time
                    </option>
                    <option value="Europe/Dublin" data-spec="select-option">
                      (GMT+0100) Ireland Time
                    </option>
                    <option
                      value="Europe/Isle_of_Man"
                      data-spec="select-option"
                    >
                      (GMT+0100) Isle of Man Time
                    </option>
                    <option value="Europe/Jersey" data-spec="select-option">
                      (GMT+0100) Jersey Time
                    </option>
                    <option value="Africa/Niamey" data-spec="select-option">
                      (GMT+0100) Niger Time
                    </option>
                    <option value="Africa/Lagos" data-spec="select-option">
                      (GMT+0100) Nigeria Time
                    </option>
                    <option value="Europe/Lisbon" data-spec="select-option">
                      (GMT+0100) Portugal (Lisbon) Time
                    </option>
                    <option value="Atlantic/Madeira" data-spec="select-option">
                      (GMT+0100) Portugal (Madeira) Time
                    </option>
                    <option value="Atlantic/Canary" data-spec="select-option">
                      (GMT+0100) Spain (Canary) Time
                    </option>
                    <option value="Africa/Tunis" data-spec="select-option">
                      (GMT+0100) Tunisia Time
                    </option>
                    <option value="Europe/London" data-spec="select-option">
                      (GMT+0100) United Kingdom Time
                    </option>
                    <option value="Europe/Tirane" data-spec="select-option">
                      (GMT+0200) Albania Time
                    </option>
                    <option value="Europe/Andorra" data-spec="select-option">
                      (GMT+0200) Andorra Time
                    </option>
                    <option value="Europe/Vienna" data-spec="select-option">
                      (GMT+0200) Austria Time
                    </option>
                    <option value="Europe/Brussels" data-spec="select-option">
                      (GMT+0200) Belgium Time
                    </option>
                    <option value="Europe/Sarajevo" data-spec="select-option">
                      (GMT+0200) Bosnia &amp; Herzegovina Time
                    </option>
                    <option value="Africa/Gaborone" data-spec="select-option">
                      (GMT+0200) Botswana Time
                    </option>
                    <option value="Africa/Bujumbura" data-spec="select-option">
                      (GMT+0200) Burundi Time
                    </option>
                    <option value="Africa/Lubumbashi" data-spec="select-option">
                      (GMT+0200) Congo - Kinshasa (Lubumbashi) Time
                    </option>
                    <option value="Europe/Zagreb" data-spec="select-option">
                      (GMT+0200) Croatia Time
                    </option>
                    <option value="Europe/Prague" data-spec="select-option">
                      (GMT+0200) Czech Republic Time
                    </option>
                    <option value="Europe/Copenhagen" data-spec="select-option">
                      (GMT+0200) Denmark Time
                    </option>
                    <option value="Africa/Cairo" data-spec="select-option">
                      (GMT+0200) Egypt Time
                    </option>
                    <option value="Europe/Paris" data-spec="select-option">
                      (GMT+0200) France Time
                    </option>
                    <option value="Europe/Berlin" data-spec="select-option">
                      (GMT+0200) Germany (Berlin) Time
                    </option>
                    <option value="Europe/Busingen" data-spec="select-option">
                      (GMT+0200) Germany (Busingen) Time
                    </option>
                    <option value="Europe/Gibraltar" data-spec="select-option">
                      (GMT+0200) Gibraltar Time
                    </option>
                    <option value="Europe/Budapest" data-spec="select-option">
                      (GMT+0200) Hungary Time
                    </option>
                    <option value="Europe/Rome" data-spec="select-option">
                      (GMT+0200) Italy Time
                    </option>
                    <option value="Asia/Amman" data-spec="select-option">
                      (GMT+0200) Jordan Time
                    </option>
                  </select>
                </div>
                <br />
                <div className="fulltime-input">
                  <label for="time-zone">Event page language</label>
                  <select
                    aria-invalid="false"
                    aria-labelledby="undefined-label"
                    className="inputregular"
                    name="locale"
                    defaultValue={"en_US"}
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                  >
                    <option value="nl_NL" data-spec="select-option">
                      Dutch (Netherlands/Belgium)
                    </option>
                    <option value="en_AU" data-spec="select-option">
                      English (Australia/New Zealand)
                    </option>
                    <option value="en_CA" data-spec="select-option">
                      English (Canada)
                    </option>
                    <option value="en_DK" data-spec="select-option">
                      English (Denmark)
                    </option>
                    <option value="en_FI" data-spec="select-option">
                      English (Finland)
                    </option>
                    <option value="en_GB" data-spec="select-option">
                      English (UK)
                    </option>
                    <option value="en_US" data-spec="select-option">
                      English (US)
                    </option>
                    <option value="fr_CA" data-spec="select-option">
                      French (Canada)
                    </option>
                    <option value="fr_FR" data-spec="select-option">
                      French (France)
                    </option>
                    <option value="fr_CH" data-spec="select-option">
                      French (Switzerland)
                    </option>
                    <option value="de_DE" data-spec="select-option">
                      German
                    </option>
                    <option value="de_CH" data-spec="select-option">
                      German (Switzerland)
                    </option>
                    <option value="it_IT" data-spec="select-option">
                      Italian
                    </option>
                    <option value="pt_BR" data-spec="select-option">
                      Portuguese (Brazil)
                    </option>
                    <option value="pt_PT" data-spec="select-option">
                      Portuguese (Portugal)
                    </option>
                    <option value="es_AR" data-spec="select-option">
                      Spanish (Argentina)
                    </option>
                    <option value="es_MX" data-spec="select-option">
                      Spanish (Mexico)
                    </option>
                    <option value="es_ES" data-spec="select-option">
                      Spanish (Spain)
                    </option>
                    <option value="sv" data-spec="select-option">
                      Swedish
                    </option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="basic-info-footer">
            <button className="savebtn" onClick={saveData}>
              Save
            </button>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default Basicinfo;
