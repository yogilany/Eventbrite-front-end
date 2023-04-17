import { Suspense } from "react";
import {
  Button,
  Container,
  Form,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import Loadings from "../Components/loadings";
import Footer from "../Components/footer/Footer";
export const Layout = ({ children }) => {
  return (
    <>
      {/* <Header /> */}

      <main id="centerView" className="">
        <Suspense fallback={<Loadings />}>{children}</Suspense>
      </main>
      {/* <Footer /> */}
    </>
  );
};
