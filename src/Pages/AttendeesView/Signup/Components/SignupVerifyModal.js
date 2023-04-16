
import React from 'react'
import { Modal, Button, Container, Row, Col, Stack, ButtonGroup } from 'react-bootstrap';
import * as BiIcons from 'react-icons/bi'
import { Link } from 'react-router-dom';
import ButtonWhiteStyled from '../../../../components/Buttons/WhiteButton';
import ButtonOrangeStyled from '../../../../components/Buttons/OrangeButton';
const SignupVerifyModal = (props) => {
    return (
        <Modal
            {...props}
            size="lg"
            centered>
            <Modal.Header closeButton />
            <Modal.Body >
                <Container fluid className="text-center justify-content-center d-flex pb-5 ">
                    <Col md={2}></Col>
                    <Col md={8}>
                        <Row>
                            <div style={{
                                backgroundColor: "#eeedf2",
                                borderRadius: "100%",
                                width: "50px"
                                , height: "50px"
                            }}>

                                <BiIcons.BiInfoCircle size={48}
                                    style={{ transform: "rotate(180deg) scaleX(-1)" }} />
                            </div>
                        </Row>
                        <Row>
                            <h2>Terms & conditions</h2>
                        </Row>
                        <Row>
                            <span style={{ padding: "2rem 0" }}>
                                <text>I accept the </text>
                                <Link to="/">Eventbrite Terms Of Service</Link>
                                <text>, </text>
                                <Link to="/">Eventbrite Terms Of Service</Link>
                                <text>, </text>
                                <Link to="/">Community Guidelines</Link>
                                <text> and have read the </text>
                                <Link to="/">Privacy Policy</Link>.
                            </span>
                        </Row>
                        <Row>
                            <Stack className="text-center justify-content-center d-flex " direction="horizontal" gap={5}>
                                <ButtonWhiteStyled style={{ width: "25%", height: "100%" }}>Cancel</ButtonWhiteStyled>
                                <ButtonOrangeStyled style={{ width: "25%", height: "100%" }}>Agree</ButtonOrangeStyled>
                            </Stack>
                        </Row>
                    </Col>
                    <Col md={2}></Col>
                </Container>

            </Modal.Body>

        </Modal>
    );
}

export default SignupVerifyModal