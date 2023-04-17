import { ButtonGroup, Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import * as FcIcons from 'react-icons/fc';
import * as TiIcons from 'react-icons/ti';
import '../Signup.scss';
import ButtonWhiteStyled from '../../../../components/Buttons/WhiteButton';
/**
 * 
 * @param {name: Name of this element after creation} props 
 * @returns Login button methods for signing in with email, Google, Apple, Facebook
 */
export const SignupMethods = (props) => {
    return (
        <Container name={props.name} className='m-0 p-0' style={{ minWidth: "200px" }} >
            <ButtonWhiteStyled style={{ margin: "0", width: "100%" }} variant="secondary"> <FcIcons.FcGoogle size="1.5em" />{" Sign in with Google"}</ButtonWhiteStyled>
            <div style={{ margin: "1.5rem 0" }}>Other sign up methods</div>
            <Container style={{ margin: "1rem 0" }}>
                <Row xs={1} md={4} lg={4}>
                    <Col>
                        <div id="circular-icon">
                            <TiIcons.TiSocialFacebook
                                data-testid='SignupMethods-FacebookButton'
                                id='SignupMethods-FacebookButton'
                                role='button'
                                color="white" size="32px">
                            </TiIcons.TiSocialFacebook>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container >
    );
}

export default (SignupMethods);