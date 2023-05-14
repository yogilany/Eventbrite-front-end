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
import AddAttendees from "../AddAttendees/AddAttendees";
import { useParams } from "react-router-dom";
import { useGetEventByIdQuery } from "src/features/api/eventApi";
import { set } from "date-fns";
import { useGetTicketsQuery } from "src/features/api/ticketApi";
import { useGetPromocodesQuery } from "src/features/api/promocodeApi";

const ManageEvent = () => {
  const { id } = useParams();
  const {
    data: fetchedTickets,
    isSuccess: success2,
    isFetching: isFetching2,
  } = useGetTicketsQuery(id);
  const {
    data: fetchedPromocodes,
    isSuccess: success3,
    isFetching: isFetching3,
  } = useGetPromocodesQuery(id);
  const {
    data: fetchedEvent,
    isSuccess: success,
    isFetching: isFetching,
  } = useGetEventByIdQuery(id);
  const [eventTitle, setEventTitle] = useState("");
  // const [isFetching, setIsFetching] = useState(true);
  console.log(id);
  console.log("success", success);

  const [event, setEvent] = useState(null);

  useEffect(() => {
    if (success && success2 && success3) {
      // setIsFetching(true);
      console.log("got event", fetchedEvent);
      console.log(" event", event);
      setEvent({
        ...fetchedEvent,
        tickets: fetchedTickets,
        promocodes: fetchedPromocodes,
      });
      console.log("event: ", event);
    }
    // setIsFetching(false);
  }, [success, success2, success3]);

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
        <Sidebar eventTitle={event ? event.basic_info.title : ""} inCreateEvent={false} />
        {isFetching ?       <div class="flex items-center m-24 justify-center w-full h-56 border border-gray-200 rounded-lg bg-gray-50 ">
                  <div role="status" className="">
                    <svg
                      aria-hidden="true"
                      class="w-8 h-8 mr-2 text-gray-200 animate-spin  fill-blue-600"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                      />
                    </svg>
                    <span class="sr-only">Loading...</span>
                  </div>
                </div> : null}

        {success && success2 && success3 && event ? (
          <Tab.Content>
            <Tab.Pane eventKey="first">
              {event ? (
                <Basicinfo
                  event={event}
                  setEvent={setEvent}
                  setEventTitle={setEventTitle}
                />
              ) :       null
          }
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
              <Dashboard event={event} />
            </Tab.Pane>
            <Tab.Pane eventKey="sixth">
              <AddAttendees event={event} />
            </Tab.Pane>
          </Tab.Content>
        ) :       null}
      </Container>

      <CreatorHeader />
    </Tab.Container>
  );
};

export default ManageEvent;
