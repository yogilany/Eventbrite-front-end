import Sidebar from "../Sidebar/Sidebar";
import Headerpub from "../../Publishpage/Headerpub";
import { Col, Container, Row  } from "react-bootstrap";
import "./Dashboard.scss";
import URLBox from "./Components/URLBox-1";
import SalesTable from "./Components/SalesTable-1";
import OrdersTable from "./Components/OrdersTable-1";
import DashboardHeader from "./Components/DashboardHeader-1";
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
                <h1
                  className="pubhead"
                  style={{ fontSize: "52px", fontFamily: "Neue Plak Bold !important" , fontWeight:'bold' }}
                >
                  Dashboard
                </h1>
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
