import { Container, Stack } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { unstable_extendSxProp } from "@mui/system";
import styled from '@emotion/styled'

export const FooterLink = styled.a(`
    color: white;
    padding: 0.15rem 0;
    font-size:0.75rem;
    font-weight: 200;
    width: auto;

        &: hover {
    text-decoration: underline;
    }
`)
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
                            <FooterLink href="google.com">Create Events</FooterLink>
                            <FooterLink href="google.com">Pricing</FooterLink>
                            <FooterLink href="google.com">Eventbrite Boost</FooterLink>
                            <FooterLink href="google.com">Eventbrite Mobile Ticket App</FooterLink>
                            <FooterLink href="google.com">Eventbrite Check-In App</FooterLink>
                            <FooterLink href="google.com">Eventbrite App Marketplace</FooterLink>
                            <FooterLink href="google.com">Event Registration Software</FooterLink>
                            <FooterLink href="google.com">Content Standards</FooterLink>
                            <FooterLink href="google.com">FAQs</FooterLink>
                        </Stack>

                        <FooterLink href="google.com">Sitemap</FooterLink>
                    </Container>
                </Col>

                <Col>
                    <Container>
                        <strong>Plan Events</strong>
                        <Stack style={StackStyle}>
                            <FooterLink href="google.com">Sell Tickets Online</FooterLink>
                            <FooterLink href="google.com">Event Planning</FooterLink>
                            <FooterLink href="google.com">Sell Concert Tickets Online</FooterLink>
                            <FooterLink href="google.com">Event Payment System</FooterLink>
                            <FooterLink href="google.com">Solutions for Professional Services</FooterLink>
                            <FooterLink href="google.com">Event Management Software</FooterLink>
                            <FooterLink href="google.com">Community Engagement</FooterLink>
                            <FooterLink href="google.com">Virtual Events Platform</FooterLink>
                            <FooterLink href="google.com">QR Codes for Event Check-In</FooterLink>
                            <FooterLink href="google.com">Post your event online</FooterLink>
                        </Stack>
                    </Container>
                </Col>

                <Col>
                    <strong>Find Events</strong>
                    <Stack style={StackStyle}>
                        <FooterLink href="google.com">New Orleans Food & Drink Events</FooterLink>
                        <FooterLink href="google.com">San Francisco Holiday Events</FooterLink>
                        <FooterLink href="google.com">Tulum Music Events</FooterLink>
                        <FooterLink href="google.com">Denver Hobby Events</FooterLink>
                        <FooterLink href="google.com">Atlanta Pop Music Events</FooterLink>
                        <FooterLink href="google.com">New York Events</FooterLink>
                        <FooterLink href="google.com">Chicago Events</FooterLink>
                        <FooterLink href="google.com">Events in Dallas Today</FooterLink>
                        <FooterLink href="google.com">Los Angeles Events</FooterLink>
                        <FooterLink href="google.com">Washington Events</FooterLink>
                    </Stack>
                </Col>

                <Col>
                    <Container>
                        <strong>Connect With Us</strong>
                        <Stack style={StackStyle}>
                            <FooterLink href="google.com">Contact Support</FooterLink>
                            <FooterLink href="google.com">Twitter</FooterLink>
                            <FooterLink href="google.com">Facebook</FooterLink>
                            <FooterLink href="google.com">LinkedIn</FooterLink>
                            <FooterLink href="google.com">Instagram</FooterLink>
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