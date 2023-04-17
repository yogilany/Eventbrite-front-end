import React from "react";
import "./Publish.css";
import Radpub from "./Radpub";
import Headerpub from "./Headerpub";
import Tipsbox from "./Tipsbox";
import Sidebar from "../../Pages/CreatorsView/Sidebar/Sidebar";
import Containerpub from "./Containerpub";
/**
 * @author Ziad Ezzat
 * @param {}
 * @description This is container of Publish Page which shows the events publised with some data related to this data,Choosing if it can be public or private and if you want to publish now or wait for scheduling it.
 * @returns {JSX.Element of Publish Page}
 */
const Publish = () => {
  return (
    <div>
      <Headerpub data_testid="HDID" />
      <Sidebar />

      <div style={{ marginLeft: 450, marginTop: 20 }}>
        <h1 className="pubhead">Publish Your Event</h1>
        <Containerpub data_testid="CDID" />
        <div className="radtipp">
          <Radpub className="radd" data_testid="RADID" />
          <Tipsbox className="tipp" data_testid="TBID" />
        </div>
      </div>
    </div>
  );
};

export default Publish;
