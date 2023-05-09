import { useState } from "react";
import { useEffect } from "react";
import default_image from "../../../../assets/adel-full-cover.png";
const EventImage = (props) => {
  // start off in the loading state
  const [loading, setLoading] = useState(true);

  // keep track whether props.img_url returns valid result
  const [isValid, setIsValid] = useState(null);

  const DivStyle = {
    borderRadius: "3vmin",
    height: "65 vh",
    display: "flex",
    justifyContent: "center",
    overflow: "hidden",
  };
  const BackgroundStyle = {
    filter: "blur(50px) brightness(0.9)",
    transform: "scale(1.3)",
    height: "400px",
    width: "100%",
    objectFit: "cover",
  };
  useEffect(() => {
    fetch(props.img_url).then((res) => {
      setIsValid(res.status === 200);
      setLoading(false);
    });
  }, []);
  // if still loading or invalid: return fallback image
  if (loading || !isValid) {
    return;

    <div style={DivStyle}>
      <img source={default_image} style={BackgroundStyle}></img>
      <img
        source={default_image}
        style={{
          position: "absolute",
          maxWidth: "940px",
          width: "100%",
          height: "400px",
          objectFit: "cover",
        }}
      ></img>
    </div>;
  }
  return (
    <div style={DivStyle}>
      <img source={{ uri: props.img_url }} style={BackgroundStyle}></img>
      <img
        source={{ uri: props.img_url }}
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
};
export default EventImage;
