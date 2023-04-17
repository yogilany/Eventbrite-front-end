import { Suspense } from "react";
import {
  Button,
  Container,
  Form,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
// import Loading from "../Components/loading";
import Footer from "../Components/footer/Footer";
export const Layout = ({ children }) => {
  return (
    <>
      {/* <Header /> */}

      <main id="centerView" className="">
        {/* <Suspense fallback={<Loading />}>{children}</Suspense> */}
      </main>
      {/* <Footer /> */}
    </>
  );
};
