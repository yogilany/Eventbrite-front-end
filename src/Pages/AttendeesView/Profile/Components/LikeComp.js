import React from "react";
import "./LikeComp.css";
import eventphoto from "../../../../assets/like3.jpeg";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { FiShare } from "react-icons/fi";
/**
 * @author Ziad Ezzat
 * @param {string} props.data_testid
 * @description This container shows the like component used in profile page showing The liked event with some information of this event like date and location.
 * @returns {JSX.Element of like component found in profile page}
 */
const LikeComp = (props) => {
  return (
    <div className="box_prof" data-testid={props.data_testid}>
      <div className="cont_prof">
        <img className="img_prof" src={eventphoto} />
        <div className="circle_prof">
          <BsFillSuitHeartFill className="ht_prof" />
        </div>
      </div>

      <div style={{ marginTop: 25, paddingLeft: 10 }}>
        <div className="desc_prof">
          Demo Day: Present Your Project to get your dream job - GoMyCode Egypt
        </div>
        <div className="dat_prof">Thu,Mar 30,8:00 PM</div>
        <div className="det_prof">GoMyCode Dokki ,Ad Doqi A</div>
      </div>
      <div style={{ display: "flex" }}>
        <div className="dfrt_prof">Free</div>
        <FiShare className="shr_prof" />
      </div>
    </div>
  );
};

export default LikeComp;
