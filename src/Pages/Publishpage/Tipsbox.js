import "./Publish.css";
import bulb from "../../assets/bulb.png";
import { AiOutlineRight } from "react-icons/ai";
/**
 * @author Ziad Ezzat
 * @param {string} props.data_testid
 * @description This container shows the Tipsbox container component used in publish page showing some tips you can use like making promocodes for your ev ent.
 * @returns {JSX.Element}
 */
const Tipsbox = (props) => {
  return (
    <div data-testid={props.data_testid} className={props.className}>
      <div style={{ display: "flex" }}>
        <img src={bulb} alt="bulbLogo" style={{ width: 35, height: 35 }} />
        <p className="tpyp">Tips before you publish</p>
      </div>
      <div
        style={{
          marginTop: 12,
          backgroundColor: "#f8f7fa",
          width: 485,
          height: 125,
        }}
      >
        <div style={{ padding: 15 }}>
          <div style={{ display: "flex" }}>
            <p
              style={{
                fontSize: 14,
                color: "#3659e3",
                cursor: "pointer",
                marginLeft: 30,
                fontWeight: 600,
                fontFamily:
                  "Neue Plak,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,Helvetica,Tahoma,Arial,sans-serif",
              }}
            >
              Create promo codes for your event
            </p>
            <AiOutlineRight
              style={{
                marginLeft: 10,
                color: "blue",
                width: "12",
                marginTop: 5,
                cursor: "pointer",
              }}
              className="arr"
            />
          </div>
          <div style={{ display: "flex" }}>
            <p
              style={{
                fontSize: 14,
                color: "#3659e3",
                cursor: "pointer",
                marginLeft: 30,
                fontWeight: 600,
                fontFamily:
                  "Neue Plak,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,Helvetica,Tahoma,Arial,sans-serif",
              }}
            >
              Customize your order form
            </p>
            <AiOutlineRight
              style={{
                marginLeft: 10,
                color: "blue",
                width: "12",
                marginTop: 5,
                cursor: "pointer",
              }}
              className="arr"
            />
          </div>
          <div style={{ display: "flex" }}>
            <p
              style={{
                fontSize: 14,
                color: "#3659e3",
                cursor: "pointer",
                marginLeft: 30,
                fontWeight: 600,
                fontFamily:
                  "Neue Plak,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,Helvetica,Tahoma,Arial,sans-serif",
              }}
            >
              Add this event to collection to increase visibility
            </p>
            <AiOutlineRight
              style={{
                marginLeft: 10,
                color: "blue",
                width: "12",
                marginTop: 5,
                cursor: "pointer",
              }}
              className="arr"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tipsbox;
