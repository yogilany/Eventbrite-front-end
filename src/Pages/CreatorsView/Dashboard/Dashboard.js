import React, { useRef, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Headerpub from "../../Publishpage/Headerpub";
import { Col, Container, Row, Card, Table } from "react-bootstrap";
import "./Dashboard.scss";
import TicketsCard from "./components/TicketsCard-1";
import ViewsCard from "./components/ViewsCard-1";
import Recommendations from "./components/Recommendations-1";
import URLBox from "./components/URLBox-1";
import SalesTable from "./components/SalesTable-1";
import OrdersTable from "./components/OrdersTable-1";
import DashboardHeader from "./components/DashboardHeader-1";
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
