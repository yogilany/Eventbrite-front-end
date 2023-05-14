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
import LikeButton from "src/Components/LikeButton/LikeButton";
import { useNavigate } from "react-router";
import { useGetEventByIdQuery } from "src/features/api/eventApi";

/**
 * @author Ziad Ezzat
 * @param {string} props.image_link       @description Image of the liked event
 * @param {string} props.id               @description ID of the liked event
 * @param {string} props.data_testid      @description Used in unit testing
 * @param {string} props.title            @description Title of the liked event
 * @param {string} props.start_date_time  @description Start time of the liked event
 * @description This container shows the like component used in profile page showing The liked event with some information of this event like date and location.
 * @returns {React.FC}
 */
const LikeComp = (props) => {
  const [imgSrc, setImgSrc] = React.useState(props?.image_link);
  const { data: likedEvent } = useGetEventByIdQuery(props.id);

  const navigate = useNavigate();
  const handleImgError = () => {
    setImgSrc(eventphoto);
  };
  const hhh = () => {
    //const navigate = useNavigate();
    navigate(`/event/${props.id}`);
  };
  return (
    <div className="box_prof" data-testid={props.data_testid} >
      <div className="cont_prof">
        <img
          onClick={hhh}
          className="img_prof"
          src={imgSrc}
          onError={handleImgError}
        />
        <div className="circle_prof">
          <LikeButton id={props.id} />
        </div>
      </div>

      <div style={{ marginTop: 25, paddingLeft: 10 }}>
        <div className="desc_prof">{props.title}</div>
        <div className="dat_prof">
          {new Date(props.start_date_time).toUTCString().slice(0, -7)}
        </div>
        {/* <div
          className="desc_prof"
          style={{ fontSize: "18px", fontWeight: "600", marginBottom: "5px" }}
        >
          Demo Day: Present Your Project to get your dream job - GoMyCode Egypt
        </div> */}
        <div
          className="dat_prof"
          style={{ color: "#d1410c", marginBottom: "5px" }}
        >
          {/* {new Date(likedEvent?.date_and_time?.end_date_time)
            .toUTCString()
            .slice(0, -7)} */}
        </div>
        <div className="det_prof">{likedEvent?.location?.city}</div>
      </div>
      <div style={{ display: "flex" }}>
        <div className="dfrt_prof">
          {likedEvent?.is_free === true
            ? "Free"
            : `Starts at $${likedEvent?.price}`}
        </div>
        {/* <FiShare className="shr_prof" /> */}
      </div>
    </div>
  );
};

export default LikeComp;
