import React from "react";
import "./LikeComp.css";
import eventphoto from "../../../../assets/like3.jpeg";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { FiShare } from "react-icons/fi";
import {
  useLikeEventMutation,
  useUnlikeEventMutation,
} from "src/features/api/userApi";
import { useDispatch } from "react-redux";

/**
 * @author Ziad Ezzat
 * @param {string} props.data_testid
 * @description This container shows the like component used in profile page showing The liked event with some information of this event like date and location.
 * @returns {JSX.Element of like component found in profile page}
 */
const LikeComp = (props) => {
  const [imgSrc, setImgSrc] = React.useState(props.image_link);
  const [isClicked, setIsClicked] = React.useState(false);
  const [likeEvent] = useLikeEventMutation();
  const [unlikeEvent] = useUnlikeEventMutation();

  const handleClick = async () => {
    setIsClicked(!isClicked);
    if (isClicked) {
      console.log("ID with like :", props.id);
      const res = await likeEvent(props.id).unwrap();
      console.log(res);
    } else {
      console.log("id with unlike :", props.id);
      const res = await unlikeEvent(props.id).unwrap();
      console.log(res);
    }
  };

  const handleImgError = () => {
    setImgSrc(eventphoto);
  };
  const ht_proff = {
    color: isClicked ? "grey" : "#d10000",
  };
  return (
    <div className="box_prof" data-testid={props.data_testid}>
      <div className="cont_prof">
        <img className="img_prof" src={imgSrc} onError={handleImgError} />
        <div className="circle_prof">
          <BsFillSuitHeartFill
            className="ht_prof"
            style={ht_proff}
            onClick={handleClick}
          />
        </div>
      </div>

      <div style={{ marginTop: 25, paddingLeft: 10 }}>
        <div className="desc_prof">{props.title}</div>
        <div className="dat_prof">{props.start_date_time}</div>
        <div
          className="desc_prof"
          style={{ fontSize: "18px", fontWeight: "600", marginBottom: "5px" }}
        >
          Demo Day: Present Your Project to get your dream job - GoMyCode Egypt
        </div>
        <div
          className="dat_prof"
          style={{ color: "#d1410c", marginBottom: "5px" }}
        >
          Thu, Mar 30 ,8:00 PM
        </div>
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
