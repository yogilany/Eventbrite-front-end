import React, { useRef, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Headerpub from "../../Publishpage/Headerpub";
import { Col, Container, Row, Card, Table } from "react-bootstrap";
import "./Dashboard.scss";
import TicketsCard from "./Components/TicketsCard";
import ViewsCard from "./Components/ViewsCard";
import Recommendations from "./Components/Recommendations";
import URLBox from "./Components/URLBox";
import SalesTable from "./Components/SalesTable";
import OrdersTable from "./Components/OrdersTable";
import DashboardHeader from "./Components/DashboardHeader";
const Dashboard = () => {
  return (
    <>
      <Headerpub data_testid="HDID" />
      <Sidebar />
      <div style={{ marginLeft: 450, marginTop: 20 }}>
        <Container fluid>
          <Container>
            <Row>
              <Col>
                <h1 className="pubhead">Dashboard</h1>
              </Col>
            </Row>
          </Container>

          <DashboardHeader />
          <URLBox />
          <SalesTable />
          <OrdersTable />
        </Container>
      </div>
    </>
  );
};

export default Dashboard;
