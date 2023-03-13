import React from 'react'
import { Container, Row, Col } from 'react-bootstrap/'
import * as Ricons from 'react-icons/md/'
import * as MUIcons from '@mui/icons-material'

export const EventLocation = (props) => {
    const MainHeaderStyle = {
        color: "#1e0a3c",

    }
    const HeaderStyle = {
        color: "#1e0a3c",
        FontFace: "Neue Plak",
        fontWeight: "600"
    }

    const DetailsStyle = {
        fontSize: "40px"
    }

    return (
        <Container>
            <h3 style={MainHeaderStyle}>When and where</h3>
            <Row>

                <Col >
                    <Row>
                        <Col md={1}>
                            <MUIcons.CalendarToday style={{ color: "#0124e9", border: "1px #f8f7fa solid", borderRadius: "10%", backgroundColor: "#f8f7fa", padding: "0.2rem" }} sx={{ fontSize: 24 }} />
                        </Col>
                        <Col>
                            <h6 style={HeaderStyle}>Date and time</h6>
                            <p style={{ color: "#6f7287", fontSize: "small" }}>{props.date}Fri, March 10, 2023,<br></br> 9:00 AM – 9:00 PM EET</p>
                        </Col>
                        <Col md={1} style={{ borderLeft: "1px solid #dbdae3" }}  >
                            <MUIcons.LocationOn style={{ color: "#0124e9", border: "1px #f8f7fa solid", borderRadius: "10%", backgroundColor: "#f8f7fa", padding: "0.2rem" }} sx={{ fontSize: 24 }} />
                        </Col>
                        <Col >
                            <h6 style={HeaderStyle}>Location</h6>
                            <p style={{ color: "#6f7287", fontSize: "small" }}>{props.location}Greek Campus Youssef El-Gendy Ad Dawawin, Cairo Governorate 4280102</p>
                        </Col>
                    </Row>

                </Col>

                <Col>
                </Col>
            </Row>
        </Container>

    )
}


export default EventLocation;
