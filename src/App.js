import "./App.css";
import { Layout } from "./app/layout";
import { Col, Row, Container } from "react-bootstrap";
import { Header } from "./components/HomePage/Header";
import { Events } from "./components/HomePage/Events";
import { HomePage } from "./components/HomePage/HomePage";
import { BrowseEventsPage } from "./components/BrowseEventsPage/BrowseEventsPage";
import { Login } from "./components/Login/Login.js"
function App() {
  return (
    <Login></Login>
    // <Layout>
    //   <Header />
    //   <Events />
    // </Layout>
    <Layout>
      <BrowseEventsPage />
    </Layout>
  );
}

export default (App);
