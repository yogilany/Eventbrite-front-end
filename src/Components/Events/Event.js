import React from 'react'
import { Container, Row, Col, Stack } from 'react-bootstrap/'
import { Layout } from '../../app/layout'
import event_image from '../../assets/event_image.png'
import organizer_avatar from '../../assets/event_organizer_avatar.png'
import EventImage from './EventImage.js'
import EventOrganizerCard from './EventOrganizerCard'
import EventLocation from './EventLocation.js'
import EventAbout from './EventAbout.js'
import { EventShare } from './EventShare'
import { EventAboutOrganizer } from './EventAboutOrganizer'
import { EventTicketCard } from './EventTicketCard'
import * as HIIcons from 'react-icons/hi'

const Event = (props) => {
    const EventNameHeaderStyle = {
        color: "#1e0a3c",
        fontWeight: "bold",
        fontSize: "48px"
    }

    return (
        <Container>
            <Layout>
            </Layout>
            <Container fluid className="pt-3" >
                <Row className="pb-5 ">
                    <Col md={12}>
                        <EventImage img_url={event_image} />
                    </Col>
                </Row>
                <Row className="mb-5">
                    <Stack gap={3}>
                        <div>
                            <Container>
                                <Row>
                                    <Col >
                                        <h3>
                                            {props.event_date} Mar 10
                                        </h3>
                                    </Col>
                                    <Col md={{ offset: 9, span: 1 }}>
                                        <HIIcons.HiOutlineHeart size="2em" />
                                    </Col>
                                    <Col md={{ span: 1 }}>
                                        <HIIcons.HiOutlineUpload size="2em" />
                                    </Col>
                                </Row>
                            </Container>

                            <h1 style={EventNameHeaderStyle}>
                                E7kky to Empower: Beyond the Story!
                            </h1>
                        </div>
                        <p>E7kky to Empower Event to celebrate Egyptian Women Journey and go beyond the story!</p>
                    </Stack>
                    <Col md={6} >
                        <EventOrganizerCard
                            avatar={organizer_avatar}
                            name="E7kky magazine"
                            follower_count="1.5k" />
                    </Col>
                </Row>
                <Row className="mb-5">
                    <EventLocation />
                </Row>
                <Row>
                    <EventAbout />
                </Row>
                <Row className="mb-5 mt-5">
                    <EventShare />
                </Row>
                <Row >
                    <EventAboutOrganizer
                        avatar={organizer_avatar}

                        organizer_name="E7kky magazine"
                        follower_count="1.4k" />
                </Row>
                <Row>

                </Row>

            </Container>
        </Container>

    )
}

export default Event;