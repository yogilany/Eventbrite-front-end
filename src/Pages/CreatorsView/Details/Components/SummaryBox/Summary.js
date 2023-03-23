import React from "react";
import "./summary.css";
import { RxText } from "react-icons/rx";
import Text from "../../../../../components/Text/Text";
const Summary = () => {
  return (
    <div className="summary__container">
      <RxText className="text__logo" />
      <h1 style={{ marginBottom: "7px", fontSize: "30px", fontWeight: "700" }}>
        Summary
      </h1>
      <p style={{ fontSize: "14px" }}>
        Grab people's attention with a short description about your event.
        Attendees will see this at the top of your event page. (140 characters
        max).
        <a href="#" className="see__examples">
          {" "}
          See Examples
        </a>
      </p>
      <Text className="text" />
    </div>
  );
};

export default Summary;
