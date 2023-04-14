import { Row, Col, Container } from 'react-bootstrap';
/**
 * Returns an image with a caption at the bottom right 
 * @date 3/29/2023 - 2:54:09 AM
 * @author h4z3m
 *
 * @param {*} props
 * @returns {*}
 */
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
        fontWeight: "400"
    }

    return (
        <Container style={ImageStyle} data-testid={props.data_testid}>
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
                            <strong>
                                {props.img_caption}
                            </strong>
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