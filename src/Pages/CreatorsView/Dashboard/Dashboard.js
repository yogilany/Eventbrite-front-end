import React, { useRef, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Headerpub from "../../Publishpage/Headerpub";
import { Col, Container, Row, Card, Table } from "react-bootstrap";
import "./Dashboard.scss";
import TicketsCard from "./components/ticketsCard";
import ViewsCard from "./components/viewsCard";
import Recommendations from "./components/recommendations";
import URLBox from "./components/uRLBox";
import SalesTable from "./components/salesTable";
import OrdersTable from "./components/ordersTable";
import DashboardHeader from "./components/dashboardHeader";
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
