import React from "react";
import "./Publish.css";
import Radpub from "./Radpub";
import Tipsbox from "./Tipsbox";
import Containerpub from "./Containerpub";
import CreatorHeader from "../CreatorsView/Details/Components/creatorHeader/CreatorHeader";
/**
 * @author Ziad Ezzat
 * @param {*} props
 * @description This is container of Publish Page which shows the events publised with some data related to this data,Choosing if it can be public or private and if you want to publish now or wait for scheduling it.
 * @returns {JSX.Element}
 */
const Publish = ({ event, setEvent }) => {
  window.scrollTo(0, 0)

  // console.log("event in publish: ", event);
  return (
    <div>
      <CreatorHeader data_testid="HDID" />

      <div className="ppt">
        <h1 className="pubhead">Publish Your Event</h1>
        <Containerpub data_testid="CDID" event={event} />
        <div className="radtipp">
          <Radpub
            className="radd"
            data_testid="RADID"
            event={event}
            setEvent={setEvent}
          />
          <Tipsbox className="tipp" data_testid="TBID" />
        </div>
      </div>
    </div>
  );
};

export default Publish;
