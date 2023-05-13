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
import { createContext } from "react";
export const AppCreateEvent = createContext({});
const CreateEvent = () => {
  const [eventTitle, setEventTitle] = useState("");
  const [disableDashboard, setDisableDashboard] = useState(true);
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
      publish_date_time: new Date(),
    },
    date_and_time: {
      start_date_time: new Date(),
      end_date_time: new Date(),
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
    <AppCreateEvent.Provider value={{ disableDashboard, setDisableDashboard }}>
      <Tab.Container
        defaultActiveKey={"first"}
        onSelect={() => window.scrollTo(0, 0)}
      >
        <Container fluid className="p-0" style={{ overflow: "hidden" }}>
          <Sidebar eventTitle={eventTitle} />
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

            <Tab.Pane eventKey="fifth"></Tab.Pane>
          </Tab.Content>
        </Container>

        <CreatorHeader />
      </Tab.Container>
    </AppCreateEvent.Provider>
  );
};

export default CreateEvent;
