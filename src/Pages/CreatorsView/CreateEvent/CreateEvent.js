import React, { useEffect } from "react";
import { Tab } from "react-bootstrap";
import { Container } from "react-bootstrap";
import Sidebar from "../Sidebar/Sidebar";
import Details from "../Details/Details";
import Basicinfo from "../Basicinfo/BasicInfo";
import Publish from "../../Publishpage/Publish";
import Dashboard from "../Dashboard/Dashboard";
import { useState } from "react";
import CreatorHeader from "../Details/Components/creatorHeader/CreatorHeader";
import TicketsPage from "../../../Pages/CreatorsView/TicketsPage/TicketsPage";
const CreateEvent = () => {
  const [eventTitle, setEventTitle] = useState("");
  const [event, setEvent] = useState({
    basic_info: {
      title: "",
      organizer: "",
      category: "",
      sub_category: "Loyalty",
    },
    image_link: "",
    summary: "",
    description: "",
    state: {
      is_public: null,
      publish_date_time: "",
    },
    date_and_time: {
      start_date_time: new Date(),
      end_date_time: new Date() + 24 * 60 * 60 * 1000,
      is_display_start_date: null,
      is_display_end_date: null,
      time_zone: "",
      event_page_language: "",
    },
    location: {
      city: "",
      is_online: false,
    },
    tickets: [],
    promocodes: [],
  });

  useEffect(() => {
    console.log("event: ", event);
  }, [event]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Tab.Container
      defaultActiveKey={"first"}
      onSelect={() => window.scrollTo(0, 0)}
    >
      <Container fluid className="p-0" style={{ overflow: "hidden" }}>
        <Sidebar DashboardStatus={true} eventTitle={eventTitle} />
        <Tab.Content>
          <Tab.Pane eventKey="first">
            <Basicinfo
              event={event}
              setEvent={setEvent}
              setEventTitle={setEventTitle}
            />
          </Tab.Pane>

          <Tab.Pane eventKey="second">
            <Details event={event} setEvent={setEvent} />
          </Tab.Pane>

          <Tab.Pane eventKey="third">
            <TicketsPage event={event} setEvent={setEvent} />
          </Tab.Pane>

          <Tab.Pane eventKey="fourth">
            <Publish event={event} setEvent={setEvent} />
          </Tab.Pane>

          <Tab.Pane eventKey="fifth">
            <Dashboard />
          </Tab.Pane>
        </Tab.Content>
      </Container>

      {/* <Headerpub data_testid="HDID" /> */}
      <CreatorHeader />
    </Tab.Container>
  );
};

export default CreateEvent;
