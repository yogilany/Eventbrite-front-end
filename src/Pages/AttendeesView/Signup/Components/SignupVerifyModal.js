
import React from 'react'
import { Modal, Button, Container, Row, Col, Stack, ButtonGroup } from 'react-bootstrap';
import * as BiIcons from 'react-icons/bi'
import { Link } from 'react-router-dom';
import ButtonWhiteStyled from '../../../../components/Buttons/WhiteButton';
import ButtonOrangeStyled from '../../../../components/Buttons/OrangeButton';
import '../Signup.scss'
import './SignupVerifyModal.scss'

const SignupVerifyModal = (props) => {
    return (
        <Modal
            {...props}
            data-testid='SignupVerifyModal'
            id='SignupVerifyModal'
            style={{ borderRadius: "0" }}
            size="lg"
            centered
            autoFocus
            backdropClassName='modal-backdrop-color'
        >
            <Modal.Header closeButton style={{ border: "none" }} />
            <Modal.Body >
                <Container fluid className="text-center justify-content-center d-flex pb-5 ">
                    <Col md={2}></Col>
                    <Col md={8}>
                        <Row className='mb-3'>
                            <Col className='g-0 p-0' md={5}></Col>
                            <Col className='g-0 p-0' md={2}>
                                <div id="circular-icon" style={{
                                    width: "72px",
                                    height: "72px",
                                    backgroundColor: "#eeedf2", margin: "0"
                                }}>

                                    <BiIcons.BiInfoCircle size={40} style={{
                                        transform: "rotate(180deg) scaleX(-1)"
                                    }} />
                                </div>
                            </Col>
                            <Col className='g-0 p-0' md={5}></Col>
                        </Row>
                        <Row>
                            <h2 className='verify-modal-header'>Terms and conditions</h2>
                        </Row>
                        <Row>
                            <span className='span-text-format'>
                                {"I accept the "}
                                <Link to="/">Eventbrite Terms Of Service</Link>
                                {", "}
                                <Link to="/">Eventbrite Terms Of Service</Link>
                                {", "}
                                <Link to="/">Community Guidelines</Link>
                                {" and have read the "}
                                <Link to="/">Privacy Policy</Link>.
                            </span>
                        </Row>
                        <Row>
                            <Stack className="text-center justify-content-center d-flex " direction="horizontal" gap={5}>
                                <ButtonWhiteStyled
                                    data-testid='SignupVerifyModal-CancelButton'
                                    id='SignupVerifyModal-CancelButton'
                                    onClick={props.onCancel}
                                    style={{ width: "25%", height: "80%", fontWeight: "600", border: "2px solid #858799" }}
                                >Cancel</ButtonWhiteStyled>
                                <ButtonOrangeStyled
                                    data-testid='SignupVerifyModal-AcceptButton'
                                    id='SignupVerifyModal-AcceptButton'
                                    onClick={props.onAccept}
                                    style={{ width: "25%", height: "80%", fontWeight: "600", borderColor: "2px solid #d1410c" }}
                                >Agree</ButtonOrangeStyled>
                            </Stack>
                        </Row>
                    </Col>
                    <Col md={2}></Col>
                </Container>

            </Modal.Body>

        </Modal >
    );
}

export default SignupVerifyModal