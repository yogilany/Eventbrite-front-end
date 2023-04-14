import { Container, Stack, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from '@emotion/styled'
export const FooterLink = styled(Link)`
    color: white;
    padding: 0.15rem 0;
    font-size:0.75rem;
    font-weight: 200;
    width: auto;

        &: hover {
    text-decoration: underline;
    }
`
export const AboutFooter = (props) => {
    const ContainerStyle = {
        backgroundColor: "#1e0a3c",
        color: "white",
        fontSize: "0.8rem",
        paddingTop: "5rem 0"
    }

    const StackStyle = {
        paddingTop: "1rem"
    }
    return (

        <Container style={ContainerStyle} data-testid={props.data_testid}>
            <Row className="pt-4">
                <Col>
                    <Container >
                        <strong>Use Eventbrite</strong>
                        <Stack style={StackStyle}>
                            <FooterLink to="/signup">Create Events</FooterLink>
                            <FooterLink to="/signup">Pricing</FooterLink>
                            <FooterLink to="/signup">Eventbrite Boost</FooterLink>
                            <FooterLink to="/signup">Eventbrite Mobile Ticket App</FooterLink>
                            <FooterLink to="/signup">Eventbrite Check-In App</FooterLink>
                            <FooterLink to="/signup">Eventbrite App Marketplace</FooterLink>
                            <FooterLink to="/signup">Event Registration Software</FooterLink>
                            <FooterLink to="/signup">Content Standards</FooterLink>
                            <FooterLink to="/signup">FAQs</FooterLink>
                        </Stack>

                        <FooterLink to="/signup">Sitemap</FooterLink>
                    </Container>
                </Col>

                <Col>
                    <Container>
                        <strong>Plan Events</strong>
                        <Stack style={StackStyle}>
                            <FooterLink to="/signup">Sell Tickets Online</FooterLink>
                            <FooterLink to="/signup">Event Planning</FooterLink>
                            <FooterLink to="/signup">Sell Concert Tickets Online</FooterLink>
                            <FooterLink to="/signup">Event Payment System</FooterLink>
                            <FooterLink to="/signup">Solutions for Professional Services</FooterLink>
                            <FooterLink to="/signup">Event Management Software</FooterLink>
                            <FooterLink to="/signup">Community Engagement</FooterLink>
                            <FooterLink to="/signup">Virtual Events Platform</FooterLink>
                            <FooterLink to="/signup">QR Codes for Event Check-In</FooterLink>
                            <FooterLink to="/signup">Post your event online</FooterLink>
                        </Stack>
                    </Container>
                </Col>

                <Col>
                    <strong>Find Events</strong>
                    <Stack style={StackStyle}>
                        <FooterLink to="/signup">New Orleans Food & Drink Events</FooterLink>
                        <FooterLink to="/signup">San Francisco Holiday Events</FooterLink>
                        <FooterLink to="/signup">Tulum Music Events</FooterLink>
                        <FooterLink to="/signup">Denver Hobby Events</FooterLink>
                        <FooterLink to="/signup">Atlanta Pop Music Events</FooterLink>
                        <FooterLink to="/signup">New York Events</FooterLink>
                        <FooterLink to="/signup">Chicago Events</FooterLink>
                        <FooterLink to="/signup">Events in Dallas Today</FooterLink>
                        <FooterLink to="/signup">Los Angeles Events</FooterLink>
                        <FooterLink to="/signup">Washington Events</FooterLink>
                    </Stack>
                </Col>

                <Col>
                    <Container>
                        <strong>Connect With Us</strong>
                        <Stack style={StackStyle}>
                            <FooterLink to="/signup">Contact Support</FooterLink>
                            <FooterLink to="/signup">Twitter</FooterLink>
                            <FooterLink to="/signup">Facebook</FooterLink>
                            <FooterLink to="/signup">LinkedIn</FooterLink>
                            <FooterLink to="/signup">Instagram</FooterLink>
                        </Stack>
                    </Container>

                </Col>

            </Row>
            {/* <Row
                style={{
                    fontSize: "80%"
                }}
            >
                <Col><a>About</FooterLink></Col>
                <Col><a>Blog</FooterLink></Col>
                <Col><a>Help</FooterLink></Col>
                <Col><a>Careers</FooterLink></Col>
                <Col><a>Press</FooterLink></Col>
                <Col><a>Investors</FooterLink></Col>
                <Col><a>Security</FooterLink></Col>
                <Col><a>Developers</FooterLink></Col>
                <Col><a>Terms</FooterLink></Col>
                <Col><a>Privacy</FooterLink></Col>
                <Col><a>CA Privacy Notice</FooterLink></Col>
                <Col><a>Accessibility</FooterLink></Col>
                <Col><a>Cookies</FooterLink></Col>
            </Row> */}

        </Container >

    )
}
export default AboutFooter;