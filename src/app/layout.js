import { Suspense } from "react";
import {
  Button,
  Container,
  Form,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import Loading from "../components/loading";
import logo from "../assets/eventbrite-logo.svg";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
export const Layout = ({ children }) => {
  return (
    <>
      <Header />

      <main id="centerView" className="">
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </main>
      <Footer />
    </>
  );
};
