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
        height: "100%",

    }

    const ContainerCaptionStyle = {
        textAlign: "right",
        color: "white",
        fontSize: "0.75rem",

    }
    return (
        <Container style={ImageStyle} >
            <Row style={{ height: "100vh" }}>
                <Col md={4} >
                </Col>
                <Col md={4}>
                </Col>
                <Col md={4} className="d-flex 
                justify-content-end 
                flex-column ml-3" style={{ marginBottom: "150px" }}>
                    <div className='p-3' style={ContainerCaptionStyle}>
                        <div style={{ fontWeight: "700" }}>
                            {props.img_caption}
                        </div>
                        <div>
                            {props.img_credit}

                        </div>
                        <div>
                            {props.img_location}
                        </div>

                    </div>
                </Col>

            </Row>
        </Container >)
}

export default LoginImage;