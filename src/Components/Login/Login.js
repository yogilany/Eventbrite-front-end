import Button from 'react-bootstrap/Button'
import Login_form from './Login_form';
import './Login.css'
import { ButtonGroup, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import * as icons from 'react-icons/fc';
import Login_methods from './Login_methods';
import test_image from './side_image.jpg'

/**
 * 
 * @param {name: Name of this element after creation} props 
 * @returns Login page
 */
function Login(props) {

    const LoginColumnStyle = {
        margin: "4rem 0 0 12rem"
    }
    const dividerStyle = {
        outerHeight: "30rem"
        , display: "inline-block"
    }
    const ImageStyle = {
        backgroundImage: `url(${test_image})`, backgroundSize: "cover",
        width: "100%", height: "100%", backgroundRepeat: "no-repeat", backgroundPosition: "0",
    }

    return (
        <div className={props.name}>
            <Container fluid>
                <Row >
                    <Col>
                        <div id="login-left-div" style={LoginColumnStyle}>
                            <h1 id="login-login-h1" >Log in</h1>
                            {Login_form({ name: "login-form-div" })}
                            <div style={{ margin: "2rem ", maxWidth: "50%" }}>
                                <hr></hr>
                            </div>
                            {Login_methods({ name: "login-methods-div" })}
                        </div>
                    </Col>
                    <Col >
                        <div style={ImageStyle}></div>
                    </Col>
                </Row>
            </Container>
        </div >);
}

export default (Login);