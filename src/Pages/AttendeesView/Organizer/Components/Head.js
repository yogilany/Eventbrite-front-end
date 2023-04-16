import React from "react";
import ReactRoundedImage from "react-rounded-image";
import Button from "react-bootstrap/Button";
import "./Head.css";
function Head(props) {
  return (
    <div className="profilecard">
      <div className="avatar">
        <ReactRoundedImage
          image={props.photo}
          roundedSize="0"
          imageWidth="180"
          imageHeight="180"
        />
      </div>

      <div className="Orgname">
        <p>{props.name}</p>
      </div>

      <div className="Btns">
        <Button variant="outline-primary" size="lg" className="follow">
          Follow
        </Button>{" "}
        <Button variant="outline-secondary" size="lg" className="contact">
          Contact
        </Button>{" "}
      </div>

      <div className="nums">
        <div className="followers">
          <span>
            <strong>{props.followers}</strong>
          </span>
          <p>Followers</p>
        </div>
        <div className="totalevents">
          <span>
            <strong>{props.totalevents}</strong>
          </span>
          <p>Total Events</p>
        </div>
      </div>

      <div className="orginfo">
        <p>{props.info}</p>
      </div>

      <div className="socialmedia">
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        ></link>
        <a href="#" className="fa fa-facebook"></a>
        <a href="#" className="fa fa-twitter"></a>
      </div>
    </div>
  );
}

export default Head;
