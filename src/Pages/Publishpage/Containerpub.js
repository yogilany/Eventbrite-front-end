import { TfiTicket } from "react-icons/tfi";
import { CgProfile } from "react-icons/cg";
import { FiExternalLink } from "react-icons/fi";
import "./Publish.css";
import eventphoto from "../../assets/empt.png";
/**
 * @author Ziad Ezzat
 * @param {string} props.data_testid 
 * @description Used in testing
 * @param {string} props.event       
 * @description return the event from higher pages
 * @description This component shows the actual event that you want to publish
 * @returns {JSX.Element}
 */
const Containerpub = (props) => {
  const data = props.event;
//   console.log("data ziad: ", data);
  const title = data?.basic_info?.title;
  //  const price = data?.tickets[0]?.price; // Events don't have tickets in usual case
  //  const quant = data?.tickets[0]?.max_quantity; // Events don't have tickets in usual case
  const date = data?.date_and_time?.start_date_time;
//   console.log("date", date);
//   console.log("title");
  return (
    <div className="Full__Container" data-testid={props.data_testid}>
      <div>
        <img
          alt="Full container img"
          src={data?.image_link ? data.image_link : eventphoto}
          className="Full__Container_img"
        />
      </div>
      <div className="rtpart">
        <h1 style={{ marginTop: 28, marginLeft: 10, fontSize: 18 }}>{title}</h1>
        <div style={{ lineHeight: 1, marginTop: 12 }}>
          <p style={{ marginLeft: 10, fontSize: 13, width: "150%" }}>
            {new Date(date).toUTCString().slice(0, -7)}
          </p>
          <p
            style={{
              marginLeft: 10,
              fontSize: 13,
              width: "150%",
              marginTop: 5,
            }}
          >
            {data?.location?.city}
          </p>
          <div style={{ marginTop: 18, marginRight: 10, display: "flex" }}>
            <TfiTicket style={{ width: 45, height: 20 }} />
            {/* { <p style={{}} >{price}</p> } */}
            <div style={{ marginLeft: 10, display: "flex" }}>
              <CgProfile style={{ width: 45, height: 20 }} />
              {/* <p style={{}} >{quant}</p>  */}
            </div>
          </div>
          <div className="hline"></div>
          <div style={{ display: "block", marginLeft: "35%" }}>
            <div className="prev" style={{ display: "flex", width: "150%" }}>
              <p
                style={{
                  marginTop: 45,
                  color: "blue",
                  fontSize: 14,
                  cursor: "pointer",
                }}
              >
                Preview your event
              </p>
              <FiExternalLink
                style={{
                  width: 45,
                  height: 20,
                  color: "blue",
                  textAlign: "center",
                  marginTop: 40,
                  cursor: "pointer",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Containerpub;
