const EventImage = (props) => {
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

  return (
    <div style={DivStyle}>
      <img src={props.img_url} alt="EventImage" style={BackgroundStyle}></img>
      <img
        src={props.img_url}
        alt="EventImage"
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
