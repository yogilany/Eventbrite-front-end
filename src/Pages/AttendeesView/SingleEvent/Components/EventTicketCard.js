import React from 'react'
import { Button } from 'react-bootstrap';
import { Container, Row, Col } from 'react-bootstrap';
import * as BiIcons from 'react-icons/bi'
import * as AiIcons from 'react-icons/ai'
export const EventTicketCard = (props) => {
    return (

        <Container fluid style={{ width: "25%", border: "#eeedf2 1px solid", borderRadius: "1.5vmin", padding: "2%" }}>
            <Col >
                <Row style={{ border: "#3659e3 3px solid", borderRadius: "1.5vmin", padding: "3%", marginBottom: "2rem" }}>
                    <Row>
                        <Col md={7}>
                            <strong>
                                Exhibition Ticket
                            </strong>
                        </Col>
                        <Col className="d-flex justify-content-end">
                            <AiIcons.AiFillMinusSquare color="#3d64ff" size="2rem" style={{ padding: "0", borderRadius: "1vmin" }} />
                            &nbsp;1&nbsp;
                            <AiIcons.AiFillPlusSquare color="#3d64ff" size="2rem" style={{ padding: "0", borderRadius: "1vmin" }} />
                        </Col>
                    </Row>
                    <Row>
                        <div>
                            <strong>
                                Free&nbsp;
                            </strong>
                            <BiIcons.BiInfoCircle color="#2d49be" />
                        </div>
                    </Row>
                </Row>
                <Row>
                    <Button variant="outline-dark" style={{ color: "white", backgroundColor: "#d1410c" }}>Reserve a spot</Button>
                </Row>
            </Col>

        </Container>
    )
}
