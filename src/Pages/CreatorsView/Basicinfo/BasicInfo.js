import { fontSize } from "@mui/system";
import "./BasicInfo.css";

function BasicInfo() {
  return (
    <div className="wholepage">
      <div className="basicinfoandimg">
        <p className="img1"></p>
        <div className="basicinfo">
          <p className="title1">Basic Info</p>
          <p className="disc1">
            Name your event and tell event-goers why they should come. Add
            details that highlight what makes it unique.
          </p>
          <div className="inputtitle">
            <label for="EventTitle">Event Title</label>
            <input
              className="EventTitle"
              name="EventTitle"
              type="text"
              required
              placeholder="Be clear and descriptive"
              maxlength="75"
            ></input>
          </div>
          <br></br>
          <div className="inputtitle">
            <label for="organizer">Organizer</label>
            <input
              className="organizer"
              name="organizer"
              type="text"
              required
              placeholder="Tell attendees who is organizing this event"
              maxlength="75"
            ></input>
            <p className="smallinfo">
              This profile describes a unique organizer and shows all of the
              events on one page.{" "}
              <span className="lol">View Organizer Info</span>
            </p>
          </div>
          <div className="selector">
            <label for="type">Type</label>
            <select id="type" name="type">
              <option value="Attraction">Attraction</option>
              <option value="Concert">Concert or Performance</option>
              <option value="Conference">Conference</option>
              <option value="Rally">Rally</option>
            </select>
          </div>
          <div className="selector">
            <label for="category">Category</label>
            <select id="category" name="category">
              <option value="auto">Auto, Boat & Air</option>
              <option value="business">Business</option>
              <option value="fashion">Fashion & Beauty</option>
              <option value="food">Food & Drink</option>
            </select>
          </div>
          <div className="thetags">
            <h4>Tags</h4>
            <p className="tagsdisc">
              Improve discoverability of your event by adding tags relevant to
              the subject matter.
            </p>
            <div className="inputtag">
              <label for="organizer">Press Enter to add a tag</label>
              <input
                className="organizer"
                name="organizer"
                type="text"
                required
                placeholder="Add Search Keywords to your Event"
                maxlength="75"
              ></input>
              <button type="button" className="addbtn">
                Add
              </button>
            </div>
          </div>
        </div>
        <div className="line"></div>
      </div>
      <div className="locandimg">
        <p className="img2"></p>
        <div className="basicinfoandimg">
          <div className="basicinfo">
            <p className="title1">Location</p>
            <p className="disc1">
              Help people in the area discover your event and let attendees know
              where to show up.
            </p>
            <div className="mapouter">
              <div className="gmap_canvas">
                <iframe
                  width="800"
                  height="300"
                  id="gmap_canvas"
                  src="https://maps.google.com/maps?q=Cairo&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  frameborder="0"
                  scrolling="no"
                  marginheight="0"
                  marginwidth="0"
                ></iframe>
                <a href="https://2yu.co"></a>
                <br />
                <a href="https://embedgooglemap.2yu.co"></a>
              </div>
            </div>
          </div>
          <div className="line"></div>
        </div>
      </div>
      <div className="dateandimg">
        <p className="img3"></p>
        <div className="basicinfoandimg">
          <div className="basicinfo">
            <p className="title1">Date and Time</p>
            <p className="disc1">
              Tell event-goers when your event starts and ends so they can make
              plans to attend.
            </p>
            <div className="wrapper">
              <input type="radio" name="select" id="option-1" checked />
              <input type="radio" name="select" id="option-2" />
              <label for="option-1" className="option option-1">
                <span>Single Event</span>
              </label>
              <label for="option-2" className="option option-2">
                <span>Recurring Event</span>
              </label>
            </div>
            <p className="disc1">
              Single event happens once and can last multiple days
            </p>
            <div className="dateandtime">
              <div className="datepicker">
                <label for="eventdate">Event Starts</label>
                <input
                  className="eventdate"
                  name="eventdate"
                  type="date"
                  required
                  onfocus="(this.type='date')"
                ></input>
              </div>
              <div className="datepicker">
                <label for="eventtime">Start Time</label>
                <input
                  className="eventtime"
                  name="eventtime"
                  type="time"
                  required
                  onfocus="(this.type='time')"
                ></input>
              </div>
              <div className="datepicker">
                <label for="eventdate">Event Ends</label>
                <input
                  className="eventdate"
                  name="eventdate"
                  type="date"
                  required
                  onfocus="(this.type='date')"
                ></input>
              </div>
              <div className="datepicker">
                <label for="eventtime">End Time</label>
                <input
                  className="eventtime"
                  name="eventtime"
                  type="time"
                  required
                  onfocus="(this.type='time')"
                ></input>
              </div>
            </div>
            <div className="checkbtns">
              <label className="label-container">
                <strong>Display start time.</strong>
                <br />
                The start time of your event will be displayed to attendees.
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>
              <label className="label-container">
                <strong>Display end time.</strong>
                <br />
                The end time of your event will be displayed to attendees.
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>
            </div>
            <div className="timezoneselectors">
              <br />
              <div className="selector">
                <label for="Tzone">Time zone</label>
                <select id="Tzone" name="Tzone">
                  <option value="egypt">(GMT +0200) Egypt Time</option>
                  <option value="uk">(GMT +000) United Kingdom Time</option>
                </select>
              </div>
              <br />
              <br />
              <div className="selector">
                <label for="lang">Event page language</label>
                <select id="lang" name="lang">
                  <option value="EN">English US</option>
                  <option value="AR">Arabic</option>
                </select>
              </div>
            </div>
            <br />
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BasicInfo;
