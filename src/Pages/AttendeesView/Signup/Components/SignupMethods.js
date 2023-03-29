import Button from 'react-bootstrap/Button'
import { ButtonGroup, Col, Row } from 'react-bootstrap';
import * as FcIcons from 'react-icons/fc';
import * as TiIcons from 'react-icons/ti';
import Container from 'react-bootstrap/Container';
import { Link } from "@mui/material";
import '../Signup.scss'
/**
 * 
 * @param {name: Name of this element after creation} props 
 * @returns Login button methods for signing in with email, Google, Apple, Facebook
 */
export const SignupMethods = (props) => {




    return (
        <Container className='m-0 p-0' style={{ minWidth: "200px" }} >
            <ButtonGroup vertical style={{ width: "100%" }}>
                <Button variant="secondary"> <FcIcons.FcGoogle size="1.5em" />{" Sign in with Google"}</Button>
            </ButtonGroup>
            <div style={{ margin: "1.5rem 0" }}>Other sign up methods</div>
            <Container style={{ margin: "1rem 0" }}>
                <Row xs={1} md={4} lg={4}>

                    <Col>
                        <div id="circular-icon">
                            <TiIcons.TiSocialFacebook color="white" size="32px">
                            </TiIcons.TiSocialFacebook>
                        </div>
                    </Col>
                </Row>
            </Container>

        </Container >

    );
}

export default (SignupMethods);