import "../App.css";
import { Col, Row, Container } from "react-bootstrap";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "../Pages/AttendeesView/HomePage/HomePage";
import Likes from "../Pages/AttendeesView/Likes/Likes";
import Login from "../Pages/AttendeesView/Login/Login";
import { Signup } from "../Pages/AttendeesView/Signup/Signup";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import AllEvents from "../Pages/AttendeesView/BrowseEvents/AllEvents";
import Organizer from "../Pages/AttendeesView/Organizer/Organizer";
import SearchPage from "../Pages/AttendeesView/HomePage/Components/SearchPage";
import SingleEvent from "../Pages/AttendeesView/SingleEvent/SingleEvent";
function UnauthenticatedApp() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/login",
      element: <Login />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/all-events",
      element: <AllEvents />,
    },
    {
      path: "/organizer",
      element: <Organizer />,
    },
    {
      path: "/search",
      element: <SearchPage />,
    },
    {
      path: "/event",
      element: <SingleEvent />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default UnauthenticatedApp;
