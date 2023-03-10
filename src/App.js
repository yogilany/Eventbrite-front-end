import "./App.css";
import { Layout } from "./app/layout";
import { Col, Row, Container } from "react-bootstrap";
import { Header } from "./components/HomePage/Header";
import { Events } from "./components/HomePage/Events";
import { Login } from "./components/Login/Login.js"
import { Signup } from "./components/Signup/Signup.js"
import Event from './components/Events/Event'
function App() {
  return (
    <Event></Event>

    // <Signup></Signup>
    // <>
      // {/* <Login></Login> */}
    // </>
    // <Layout>
    //   <Header />
    //   <Events />
    // </Layout>
  );
}

export default (App);
