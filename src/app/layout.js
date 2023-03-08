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
export const Layout = ({ children }) => {
  return (
    <>
      <Navbar variant="light" className="navbarPrimary">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={logo}
              width="120"
              //   height="30"
              className="d-inline-block align-top"
              alt="logo"
            />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
            </Form>
          </Nav>
          <Nav>
            <Nav.Link href="#home">Create an event</Nav.Link>
            <Nav.Link href="#features">Likes</Nav.Link>
            <Nav.Link href="#pricing">Tickets</Nav.Link>
            <NavDropdown title="Yousef Gilany" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>

      <main id="centerView" className="">
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </main>
    </>
  );
};
