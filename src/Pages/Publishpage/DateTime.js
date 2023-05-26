import "./Publish.css";
import { CiCalendar, CiClock2 } from "react-icons/ci";
import { useState } from "react";
import { useCreateEventMutation } from "../../features/api/eventApi";
import { useNavigate } from "react-router";
import { useEffect } from "react";
/**
 * @author Ziad Ezzat
 * @param {string} props.data_testid 
 * @description Used for testing
 * @param {string} props.public      
 * @description Boolean to see if event is public or private
 * @param {string} props.event       
 * @description Event itself
 * @description This container shows the radio button container component used in publish page showing some data related to date and time of your event.
 * @returns {JSX.Element}
 */
const DateTime = (props) => {
  const [val, setval] = useState("now");
  const [createEvent] = useCreateEventMutation();
  const event = props.event;
  const dateandtime = event?.date_and_time?.start_date_time;
  // const date = new Date(dateandtime);

  const [dateInput, setDate] = useState(new Date().toISOString().slice(0, -14));
  const [timeInput, setTime] = useState("12:30");
  const publicevent = props.public;

  const navigate = useNavigate();

  const readorwrite = (event) => {
    setval(event.target.value);
  };

  const saveData = async () => {
    try {
      const [time, meridian] = timeInput.split(" ");
      const [hours, minutes, seconds] = time.split(":");

      const timeInMs =
        hours * 60 * 60 * 1000 + minutes * 60 * 1000 + seconds * 1000;

      console.log(dateInput);
      console.log(timeInMs);

      const publish_datetime = new Date(dateInput);
      publish_datetime.setTime(timeInMs + publish_datetime.getTime());

      const response = await createEvent({
        ...props.event,
        state: {
          is_public: publicevent,
          publish_date_time:
            val === "now"
              ? new Date().toISOString().slice(0, -5)
              : publish_datetime.toISOString().slice(0, -5),
        },
      }).unwrap();
      console.log("response: ", response);
      navigate(`/event/${response.id}`, { replace: true });
    } catch (error) {
      console.log("Error creating event : ", error);
    }
  };
  // useEffect(() => {
  //   console.log(date);
  //   console.log(time);
  //   props.setEvent({
  //     ...props.event,
  //     state: {
  //       is_public: publicevent,
  //       publish_date_time:
  //         val === "now"
  //           ? new Date().toISOString().slice(0, -5)
  //           : new Date(
  //               date.getDate() +
  //                 "T" +
  //                 time.slice(0, 2) +
  //                 ":" +
  //                 time.slice(3, 5) +
  //                 ":" +
  //                 time.slice(6, 8)
  //             )
  //               .toISOString()
  //               .slice(0, -5),
  //     },
  //   });
  //   return () => {};
  // }, []);

  return (
    <div
      class="mb-2"
      data-testid={props.data_testid}
      style={{ paddingBottom: 70 }}
    >
      <h2 className="rdh">{props.title}</h2>
      <div style={{ display: "flex" }}>
        <input
          type="radio"
          id="publish_now"
          value="now"
          name="nowlater"
          onChange={readorwrite}
          checked={val === "now"}
          style={{ cursor: "pointer" }}
        ></input>
        <p
          class="mb-2"
          style={{ marginLeft: 20, marginTop: 15, color: "#39364f" }}
        >
          {props.c1}
        </p>
      </div>
      <div style={{ display: "flex", lineHeight: 0, marginBottom: 10 }}>
        <input
          type="radio"
          id="publish_sch"
          value="sch"
          name="nowlater"
          onChange={readorwrite}
          checked={val === "sch"}
          style={{ cursor: "pointer" }}
        ></input>
        <p
          class="mb-2"
          style={{ marginLeft: 20, marginTop: 10, color: "#39364f" }}
        >
          {props.c2}
        </p>
      </div>
      <div style={{ display: "flex" }}>
        <div style={{ backgroundColor: "#f2f2f5", width: 240, height: 50 }}>
          <div style={{ display: "flex" }}>
            <CiCalendar
              style={{ height: 50, width: 20, marginLeft: 10 }}
            ></CiCalendar>
            <div style={{}}>
              <p
                style={{ fontSize: ".8rem", marginLeft: 12, color: "#aaaaab" }}
              >
                Start date
              </p>
              <input
                type="date"
                id="Date_id_pub"
                defaultValue={new Date().toISOString().slice(0, -14)}
                className="dd"
                readOnly={val === "now"}
                onChange={(e) => {
                  setDate(e.target.value);
                }}
              />
            </div>
          </div>
        </div>
        <div
          style={{
            marginLeft: 10,
            backgroundColor: "#f2f2f5",
            width: 240,
            height: 50,
          }}
        >
          <div style={{ display: "flex" }}>
            <CiClock2
              style={{ height: 50, width: 20, marginLeft: 10 }}
            ></CiClock2>
            <div style={{ marginTop: 0 }}>
              <p
                style={{
                  fontSize: ".8rem",
                  marginLeft: 12,
                  color: "#aaaaab",
                }}
              >
                Start time
              </p>
              <input
                type="time"
                id="Time_id_pub"
                defaultValue={new Date().toISOString().slice(11, -5)}
                className="dd  "
                readOnly={val === "now"}
                onChange={(e) => {
                  setTime(e.target.value);
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <p style={{ fontSize: ".875rem", lineHeight: "1.25rem" }}>
          Time zone is same as your event's
        </p>
      </div>
      {val === "sch" && (
        <div className="ft">
          <button id="sch_butt" className="ftbtn" onClick={saveData}>
            Schedule
          </button>
        </div>
      )}
      {val === "now" && (
        <div className="ft">
          <button id="pub_button" className="ftbtn" onClick={saveData}>
            Publish
          </button>
        </div>
      )}
    </div>
  );
};

export default DateTime;
