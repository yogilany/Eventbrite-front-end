import { Row, Col, Container } from 'react-bootstrap';
import LoginImageCSS from './LoginImage.module.css'
/**
 * Returns an image with a caption at the bottom right 
 * @date 3/29/2023 - 2:54:09 AM
 * @author h4z3m
 *
 * @param {*} props
 * @returns {*}
 */
export const LoginImage = (props) => {

    return (
        <Container className={LoginImageCSS.login_image}
            style={{ backgroundImage: `url(${props.img_url})` }}
            data-testid={props.data_testid}
            >
            data-testid={props.data_testid}
            >
            <Row style={{ height: "100vh" }}>
                <Col md={4} >
                </Col>
                <Col md={4}>
                </Col>
                <Col md={4} className="d-flex 
                justify-content-end 
                flex-column ml-3" style={{ marginBottom: "150px" }}>
                    <div className={` p-3  ${LoginImageCSS.caption_image}`} >
                        <div
                            data-testid="img_caption"
                            id="img_caption"
                            style={{ fontWeight: "700" }}>
                            <strong>
                                {props.img_caption}
                            </strong>
                        </div>
                        <div
                            data-testid="img_credit"
                            id="img_credit"
                        >
                        <div
                            data-testid="img_credit"
                            id="img_credit"
                        >
                            {props.img_credit}
                        </div>
                        <div
                            data-testid="img_location"
                            id="img_location"
                        >
                        <div
                            data-testid="img_location"
                            id="img_location"
                        >
                            {props.img_location}
                        </div>
                    </div>
                </Col>

            </Row>
        </Container >)
}

export default LoginImage;