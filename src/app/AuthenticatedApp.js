import "../App.css";
import { Col, Row, Container } from "react-bootstrap";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "../Pages/AttendeesView/HomePage/HomePage";
import Likes from "../Pages/AttendeesView/Likes/Likes";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import { AllEvents } from "../Pages/AttendeesView/BrowseEvents/AllEvents";
import Organizer from "../Pages/AttendeesView/Organizer/Organizer";
function AuthenticatedApp() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/likes",
      element: <Likes />,
    },
    {
      path: "/all-events",
      element: <AllEvents />,
    },
    {
      path: "/organizer",
      element: <Organizer />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default AuthenticatedApp;
