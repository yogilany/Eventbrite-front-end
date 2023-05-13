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
import Headerpub from "src/Pages/Publishpage/Headerpub";
import AddAttendees from "../AddAttendees/AddAttendees";
import { useParams } from "react-router-dom";
import { useGetEventByIdQuery } from "src/features/api/eventApi";
import { set } from "date-fns";

const ManageEvent = () => {
  const { id } = useParams();
  const { data: fetchedEvent, isSuccess: success, isFetching: isFetching } = useGetEventByIdQuery(id);

  const [eventTitle, setEventTitle] = useState("");
  // const [isFetching, setIsFetching] = useState(true);
  console.log(id);
  console.log("success", success);


  const [event, setEvent] = useState(fetchedEvent ? fetchedEvent : null);

  


  useEffect(() => {
    // setIsFetching(true);
    console.log("got event", fetchedEvent);   
    console.log("got event", fetchedEvent);    console.log(" event", event);
    setEvent(fetchedEvent);
    // setIsFetching(false);

  
  
  }, [success]);

 

  // useEffect(() => {
  //   setEvent(fetchedEvent);
  // }, [fetchedEvent]);

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
        <Sidebar eventTitle={eventTitle} />
        {isFetching ? <h1>Loading</h1> : null }
        { event ? <Tab.Content>
          <Tab.Pane eventKey="first">
            {event ? <Basicinfo
              event={event}
              setEvent={setEvent}
              setEventTitle={setEventTitle}
            /> : null}
          </Tab.Pane>

          <Tab.Pane eventKey="second">
            <Details event={event} setEvent={setEvent} />
          </Tab.Pane>

          <Tab.Pane eventKey="third">
            {event ? <TicketsPage event={event} setEvent={setEvent} /> : null}
          </Tab.Pane>

          <Tab.Pane eventKey="fourth">
            <Publish event={event} setEvent={setEvent} />
          </Tab.Pane>

          <Tab.Pane eventKey="fifth">
            <Dashboard event={event}/>
          </Tab.Pane>
          <Tab.Pane eventKey="sixth">
            <AddAttendees />
          </Tab.Pane>
        </Tab.Content> : null}
      </Container>

      {/* <Headerpub data_testid="HDID" /> */}
      {/* <CreatorHeader /> */}
      <Headerpub />
    </Tab.Container>
  );
};

export default ManageEvent;
