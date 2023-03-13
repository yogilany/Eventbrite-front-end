import "./App.css";
import { Layout } from "./app/layout";
import { Col, Row, Container } from "react-bootstrap";
import { Header } from "./components/HomePage/Header";
import { Events } from "./components/HomePage/Events";
import { HomePage } from "./components/HomePage/HomePage";
import { BrowseEventsPage } from "./components/BrowseEventsPage/BrowseEventsPage";
import { Login } from "./components/Login/Login.js";
import { Signup } from "./components/Signup/Signup.js";
import Event from "./components/Events/Event";
import Details from "./Pages/Details/Details";
import Likes from "./Pages/Likes/Likes";
import Following from "./Pages/Following/Following";
// import Likes from "./Pages/Likes/Likes";
// import Following from "./Pages/Following/Following";
import Organizer from "./Pages/Organizer/Organizer";
import Basicinfo from "./Pages/Basicinfo/Basicinfo";
function App() {
  return (
    // <Event></Event>
    // <Details />
    // <Following />
    // <Likes />
    // <Following />
    // <Signup />
    // <>
    <Login />
    // {/* <Login></Login> */}
    // </>
    // <Layout>
    //   <BrowseEventsPage />
    // </Layout>
  );
}

export default App;
