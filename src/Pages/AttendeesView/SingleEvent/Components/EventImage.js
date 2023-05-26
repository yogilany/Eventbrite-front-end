import { useState } from "react";
import { useEffect } from "react";
import default_image from "../../../../assets/adel-full-cover.png";
import "../SingleEvent.scss";
const EventImage = (props) => {
  // console.log("props.img_url", props.img_url)
  // start off in the loading state
  const [loading, setLoading] = useState(true);

  // keep track whether props.img_url returns valid result
  const [isValid, setIsValid] = useState(null);

  const DivStyle = {
    borderRadius: "3vmin",
    display: "flex",
    width: "70%",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  };
  const ImageStyle = {
    position: "absolute",
    maxWidth: "940px",
    width: "100%",
    height: "450px",
    objectFit: "cover",
  };
  const BackgroundStyle = {
    filter: "blur(50px) brightness(0.9)",
    transform: "scale(1.3)",
    objectFit: "cover",
    width: "100%",
    height: "450px",
    overflow: "hidden",
  };
  useEffect(() => {
    fetch(props.img_url).then((res) => {
      setIsValid(res.status === 200);
      setLoading(false);
    });
  }, []);
  // if still loading or invalid: return fallback image
  if (loading || !isValid) {
    return (
      <div style={DivStyle}>
        <img
          alt="eventImage"
          source={default_image}
          style={BackgroundStyle}
        ></img>
        <img
          alt="eventImage"
          source={default_image}
          style={{
            position: "absolute",
            maxWidth: "940px",
            width: "100%",
            height: "400px",
            objectFit: "cover",
          }}
        ></img>
      </div>
    );
  }
  return (
    <>
      <div className="event-image-backdrop">
        <div style={DivStyle}>
          <img
            alt="eventImage"
            src={props.img_url}
            style={BackgroundStyle}
          ></img>
          <img alt="eventImage" src={props.img_url} style={ImageStyle}></img>
        </div>
      </div>
    </>
  );
};
export default EventImage;
