import React from "react";
import "./OrderComp.css";
import eventphoto from "../../../../assets/empt.png";
import { useGetEventByIdQuery } from "src/features/api/eventApi";
import EventImage from "src/Pages/AttendeesView/SingleEvent/Components/EventImage";
/**
 * @author Ziad Ezzat
 * @param {string} props.data_testid
 * @description This container shows the order component used in profile page showing The ordered event with some information of this event like date and location.
 * @returns {JSX.Element of order component found in profile page}
 */
const OrderComp = (props) => {
  const { data: event } = useGetEventByIdQuery(props.id);
  //console.log("zeft",event);
  const [imgSrc, setImgSrc] = React.useState(event?.image_link);
  //console.log("data:",props.order); 
  const handleImgError = () => {
    setImgSrc(eventphoto);
  };
  // console.log("orders :",event);
  return (
    <div className="MainComp_prof" data-testid={props.data_testid}>
      <div className="Datee_prof">
        <p class="" style={{ color: "red" }}>
          {new Date(event?.date_and_time?.start_date_time)
            .toUTCString()
            .slice(8, 11)}
        </p>
        <p style={{ color: "grey" }}>
          {new Date(event?.date_and_time?.start_date_time)
            .toUTCString()
            .slice(4, 7)}
        </p>
      </div>
      <img
        alt={event?.basic_info?.title}
        onError={handleImgError}
        src={event?.image_link}
        className="Full_Container_img_prof"
      />
      <div className="eventdata_prof">
        <h3 class=" font-bold text-lg" style={{ paddingBottom: 0 }}>
          {event?.basic_info?.title}
        </h3>
        <div className="detaileddate_prof">
          {new Date(event?.date_and_time?.start_date_time)
            .toUTCString()
            .slice(0, -7)}{" "}
        </div>
        <div className="detaileddated_prof">
          Order#
          <div>{props.order.id}</div>Placed on
          <div>
            {new Date(props.order?.created_date).toUTCString().slice(0, -7)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderComp;
