import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import test_image from '../Login/side_image.jpg'
import LoginImage from '../Login/LoginImage'
import SignupForm from './SignupForm';
import LoginTitle from '../Login/Title'
import SignupMethods from './SignupMethods';
import AboutFooter from '../Login/AboutFooter'
export const Signup = (props) => {
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

    const HeaderStyle = {
        color: "#1e0a3c",
        fontSize: "3.5rem",
        fontWeight: "700",
        width: "50%"
    }

    return (
        <div className={props.name}>
            <LoginTitle ></LoginTitle>
            <Container fluid>
                <Row>
                    <Col>
                        <div id="login-left-div" style={LoginColumnStyle}>

                            <h1 id="login-signup-h1" style={HeaderStyle}>Create an account</h1>

                            <SignupForm name="login-form-div" />

                            {/* divider in progress */}
                            <div style={{ margin: "2rem ", maxWidth: "50%" }}>
                                <hr></hr>
                            </div>

                            <SignupMethods name="login-methods-div" />

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
                <Row>
                    <AboutFooter/>
                </Row>
            </Container>
        </div >);
}

export default Signup;