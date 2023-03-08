import "./App.css";
import { Layout } from "./app/layout";
import { Col, Row, Container } from "react-bootstrap";
import { Header } from "./components/HomePage/Header";
import { Events } from "./components/HomePage/Events";
import Likes from './Pages/Likes/Likes'
import Following from './Pages/Following/Following'
function App() {
  return (
    <Layout>
      {/* <Header />
      <Events /> */}
      {/* <Likes /> */}
      <Following />
    </Layout>
  );
}

export default App;
