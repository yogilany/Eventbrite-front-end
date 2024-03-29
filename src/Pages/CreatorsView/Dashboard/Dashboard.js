// Importing Dependencies
import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import { Col, Container, Row } from "react-bootstrap";
import "./Dashboard.scss";
import URLBox from "./Components/URLBox-1";
import SalesTable from "./Components/SalesTable-1";
import OrdersTable from "./Components/OrdersTable-1";
import DashboardHeader from "./Components/DashboardHeader-1";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectUserToken } from "src/features/authSlice";
import CreatorHeader from "../Details/Components/creatorHeader/CreatorHeader";

/**
 * @author Yousef Gilany
 * @description This is the dashboard page that shows the sales and orders of the event, it also shows the url of the event, and the tickets of the event, it also contains the sidebar.
 * @returns {React.FC}
 */
const Dashboard = ({ event }) => {

  // console.log("event in dashhhhhh", event);
  const token = useSelector(selectUserToken);
  const [tickets, setTickets] = useState([]);
  const [orders, setOrders] = useState([]);

  const [totalTickets, setTotalTickets] = React.useState(0);
  const [SoldTickets, setSoldTickets] = React.useState(0);
  const [gross, setGross] = React.useState(0);

  const fetchTickets = async () => {
    await axios
      .get(`${process.env.REACT_APP_BASE_API}/tickets/event_id/${event.id}`, {
        headers: {
          ContentType: "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then(function (response) {
        // console.log("tickets", response.data);
        setTickets(response.data);
        // console.log("ticketssss", tickets);
        setTotalTickets(0);
        setSoldTickets(0);
        setGross(0);
        response.data.map((ticket) => {
          setTotalTickets(totalTickets + ticket.max_quantity);
          setSoldTickets(
            SoldTickets + (ticket.max_quantity - ticket.available_quantity)
          );
          setGross(
            gross +
              (ticket.max_quantity - ticket.available_quantity) * ticket.price
          );
        });
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };
  useEffect(() => {
    window.scrollTo(0, 0)

  },[])
  const fetchOrders = async () => {
    await axios
      .get(`${process.env.REACT_APP_BASE_API}/orders/event_id/${event.id}`, {
        headers: {
          ContentType: "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then(function (response) {
        // console.log("ordders", response.data);
        setOrders(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  useEffect(() => {
    fetchTickets();
    fetchOrders();
  }, []);

  return (
    <>
      <CreatorHeader data_testid="HDID" />
      {/* <Sidebar /> */}
      <div style={{ marginLeft: 450, marginTop: 20 }}>
        <Container fluid>
          <Container>
            <Row>
              <Col>
                <h1
                  className="pubhead"
                  style={{
                    fontSize: "52px",
                    fontFamily: "Neue Plak Bold !important",
                    fontWeight: "bold",
                  }}
                >
                  Dashboard
                </h1>
              </Col>
            </Row>
          </Container>

          <DashboardHeader
            tickets={tickets}
            total={totalTickets}
            sold={SoldTickets}
          />
          <URLBox event={event} />
          <SalesTable tickets={tickets} event={event} />
          <OrdersTable orders={orders} event={event} />
        </Container>
      </div>
    </>
  );
};

export default Dashboard;
