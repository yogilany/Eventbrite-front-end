import "./App.css";
import { Layout } from "./app/layout";
import { Col, Row, Container } from "react-bootstrap";
import { Header } from "./components/HomePage/Header";
import { Events } from "./components/HomePage/Events";

function App() {
  return (
    <Layout>
      <Header />
      <Events />
    </Layout>
  );
}

export default App;
