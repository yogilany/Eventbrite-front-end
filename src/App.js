import "./App.css";
import { Layout } from "./app/layout";
import { Col, Row, Container } from "react-bootstrap";
import BasicInfo from "./Pages/CreatorsView/Basicinfo/BasicInfo";
import Likes from "./Pages/AttendeesView/Likes/Likes";
import FollowingOrgEvents from "./Pages/AttendeesView/FollowingOrganizersEvents/Following";
import SingleEvent from "./Pages/AttendeesView/SingleEvent/SingleEvent";
import Login from "./Pages/AttendeesView/Login/Login";
import { HomePage } from "./Pages/AttendeesView/HomePage/HomePage";
import { AllRoutes } from "./app/Routes";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthenticatedApp from "./app/AuthenticatedApp";
import UnauthenticatedApp from "./app/UnauthenticatedApp";
function App() {
  const user = true;
  return (
    <>
      {user ? (
        <Layout>
          <AuthenticatedApp />
        </Layout>
      ) : (
        <UnauthenticatedApp />
      )}
    </>
  );
}

export default App;
