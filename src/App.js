import "./App.css";
import { Layout } from "./app/layout";
import { Col, Row, Container } from "react-bootstrap";
import { Header } from "./components/HomePage/Header";
import { Events } from "./components/HomePage/Events";
import { HomePage } from "./components/HomePage/HomePage";
import { BrowseEventsPage } from "./components/BrowseEventsPage/BrowseEventsPage";

function App() {
  return (
    <Layout>
      <BrowseEventsPage />
    </Layout>
  );
}

export default App;
