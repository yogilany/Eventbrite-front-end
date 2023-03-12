import "./App.css";
import { Layout } from "./app/layout";
import { Col, Row, Container } from "react-bootstrap";
import { Header } from "./components/HomePage/Header";
import { Events } from "./components/HomePage/Events";
import Likes from './Pages/Likes/Likes'
import Following from './Pages/Following/Following'
import Organizer from "./Pages/Organizer/Organizer";
import Basicinfo from "./Pages/Basicinfo/Basicinfo";
function App() {
  return (
    <Layout>
      {/* <Header />
      <Events /> */}
      {/* <Likes /> */}
      {/* <Following /> */}
      {/* <Organizer /> */}
      {<Basicinfo />}
    </Layout>
  );
}

export default App;
