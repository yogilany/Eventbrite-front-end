import Button from 'react-bootstrap/Button'
import LoginForm from './LoginForm';
import './Login.css'
import { ButtonGroup, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import * as icons from 'react-icons/fc';
import LoginMethods from './LoginMethods';
import test_image from './side_image.jpg'
import { Header } from "../HomePage/Header"
import { LoginTitle as LoginTitle } from './Title';
import * as CgIcons from 'react-icons/cg';
import LoginImage from './LoginImage';
/**
 * 
 * @param {name: Name of this element after creation} props 
 * @returns Login page
 */
export const Login = (props) => {

    const LoginColumnStyle = {
        margin: "4rem 0 0 12rem"
    }
    const dividerStyle = {
        outerHeight: "30rem"
        , display: "inline-block"
    }
    const ImageStyle = {
        backgroundImage: `url(${test_image})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "0",
        width: "100%",
        height: "100%",

    }

    return (
        <div className={props.name}>
            <LoginTitle ></LoginTitle>
            <Container fluid>


                <Row>
                    <Col>
                        <div id="login-left-div" style={LoginColumnStyle}>
                            <h1 id="login-login-h1" >Log in</h1>
                            
                            <LoginForm name="login-form-div" />

                            {/* divider in progress */}
                            <div style={{ margin: "2rem ", maxWidth: "50%" }}>
                                <hr></hr>
                            </div>

                            <LoginMethods name="login-methods-div" />

                        </div>

                    </Col>
                    <Col >
                        <LoginImage
                            img_url={test_image}
                            img_caption="ragel gamed"
                            img_credit="Msh ana"
                            img_location="New York, NY"
                        />

                    </Col>
                </Row>
            </Container>
        </div >);
}

export default (Login);