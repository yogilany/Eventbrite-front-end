import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export const LoginImage = (props) => {
    const ImageStyle = {
        backgroundImage: `url(${props.img_url})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "0",
        width: "100%",
        height: "100vh",

    }

    const ContainerCaptionStyle = {
        position: "relative",
        textAlign: "right",
        color: "white",
        top: "35rem",
        left: "40rem",
        fontSize: "0.8rem"
    }
    return (
        <div style={ImageStyle}>
            <Container fluid style={ContainerCaptionStyle}>
                <Row style={{ fontWeight: "bolder" }}>
                    {props.img_caption}
                </Row>
                <Row>
                    {props.img_credit}
                </Row>
                <Row >
                    {props.img_location}
                </Row>
            </Container>
        </div >)
}

export default LoginImage;