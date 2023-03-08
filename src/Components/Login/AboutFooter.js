import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { unstable_extendSxProp } from "@mui/system";
export const AboutFooter = () => {
    const ContainerStyle = {
        backgroundColor: "#1e0a3c",
        color: "white",
        fontSize: "0.8rem",
    }

    return (

        <Container style={ContainerStyle}>
            <Row>
                <Col>
                    <Container>
                        <strong>Use Eventbrite</strong>
                        <Col>
                            <Row><a href="google.com">  Create Events</a></Row>
                            <Row><a href="google.com">  Pricing</a></Row>
                            <Row><a href="google.com">  Eventbrite Boost</a></Row>
                            <Row><a href="google.com">  Eventbrite Mobile Ticket App</a></Row>
                            <Row><a href="google.com">  Eventbrite Check-In App</a></Row>
                            <Row><a href="google.com">  Eventbrite App Marketplace</a></Row>
                            <Row><a href="google.com">  Event Registration Software</a></Row>
                            <Row><a href="google.com">  Content Standards</a></Row>
                            <Row><a href="google.com">  FAQs         </a></Row>
                            <a href="google.com">  Sitemap</a>
                        </Col>
                    </Container>
                </Col>

                <Col>
                    <Container>
                        <strong>Plan Events</strong>
                        <Col>
                            <Row><a href="google.com">Sell Tickets Online</a></Row>
                            <Row><a href="google.com">Event Planning</a></Row>
                            <Row><a href="google.com">Sell Concert Tickets Online</a></Row>
                            <Row><a href="google.com">Event Payment System</a></Row>
                            <Row><a href="google.com">Solutions for Professional Services</a></Row>
                            <Row><a href="google.com">Event Management Software</a></Row>
                            <Row><a href="google.com">Community Engagement</a></Row>
                            <Row><a href="google.com">Virtual Events Platform</a></Row>
                            <Row><a href="google.com">QR Codes for Event Check-In</a></Row>
                            <Row><a href="google.com">Post your event online</a></Row>
                        </Col>
                    </Container>
                </Col>
                <Col>
                    <Container>
                        <strong>Find Events</strong>
                        <Col>
                            <Row><a href="google.com"> New Orleans Food & Drink Events</a></Row>
                            <Row><a href="google.com"> San Francisco Holiday Events</a></Row>
                            <Row><a href="google.com"> Tulum Music Events</a></Row>
                            <Row><a href="google.com"> Denver Hobby Events</a></Row>
                            <Row><a href="google.com"> Atlanta Pop Music Events</a></Row>
                            <Row><a href="google.com"> New York Events</a></Row>
                            <Row><a href="google.com"> Chicago Events</a></Row>
                            <Row><a href="google.com"> Events in Dallas Today</a></Row>
                            <Row><a href="google.com"> Los Angeles Events</a></Row>
                            <Row><a href="google.com"> Washington Events</a></Row>
                        </Col>
                    </Container>

                </Col>
                <Col>
                    <Container>
                        <strong>Connect With Us</strong>
                        <Col>
                            <Row><a href="google.com">Contact Support</a></Row>
                            <Row><a href="google.com">Twitter</a></Row>
                            <Row><a href="google.com">Facebook</a></Row>
                            <Row><a href="google.com">LinkedIn</a></Row>
                            <Row><a href="google.com">Instagram</a></Row>
                        </Col>
                    </Container>

                </Col>

            </Row>
            <Row
                style={{
                    fontSize: "80%"
                }}
            >
                <Col><a>About</a></Col>
                <Col><a>Blog</a></Col>
                <Col><a>Help</a></Col>
                <Col><a>Careers</a></Col>
                <Col><a>Press</a></Col>
                <Col><a>Investors</a></Col>
                <Col><a>Security</a></Col>
                <Col><a>Developers</a></Col>
                <Col><a>Terms</a></Col>
                <Col><a>Privacy</a></Col>
                <Col><a>CA Privacy Notice</a></Col>
                <Col><a>Accessibility</a></Col>
                <Col><a>Cookies</a></Col>
            </Row>

        </Container>

    )
}
export default AboutFooter;