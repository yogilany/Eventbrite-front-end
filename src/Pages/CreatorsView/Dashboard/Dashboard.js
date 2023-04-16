import React, { useRef, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Headerpub from "../../Publishpage/Headerpub";
import { Col, Container, Row, Card, Table } from "react-bootstrap";
import "./Dashboard.scss";
import TicketsCard from "./components/TicketsCard";
import ViewsCard from "./components/ViewsCard";
import Recommendations from "./components/Recommendations";
import URLBox from "./components/URLBox";
import SalesTable from "./components/SalesTable";
import OrdersTable from "./components/OrdersTable";
import DashboardHeader from "./components/DashboardHeader";
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
