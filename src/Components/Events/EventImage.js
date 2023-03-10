const EventImage = (props) => {
    const DivStyle = {

        borderRadius: "3vmin",
        height: "65 vh",
        display: "flex",
        justifyContent: "center",
        overflow: "hidden"
    }
    const BackgroundStyle = {
        filter: "blur(50px) brightness(0.9)",
        transform: "scale(1.3)"
    }

    return (<div style={DivStyle}>
        <img src={props.img_url} alt="EventImage" style={BackgroundStyle}>
        </img>
        <img src={props.img_url} alt="EventImage" style={{ position: "absolute" }} >
        </img>
    </div>
    )
}
export default EventImage;