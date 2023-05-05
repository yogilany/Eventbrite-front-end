import "../App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "../Pages/AttendeesView/HomePage/HomePage";
import Login from "../Pages/AttendeesView/Login/Login";
import { Signup } from "../Pages/AttendeesView/Signup/Signup";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import AllEvents from "../Pages/AttendeesView/BrowseEvents/AllEvents";
import Organizer from "../Pages/AttendeesView/Organizer/Organizer";
import SearchPage from "../Pages/AttendeesView/HomePage/Components/SearchPage";
import SingleEvent from "../Pages/AttendeesView/SingleEvent/SingleEvent";
import EventsByCategory from "../Pages/AttendeesView/EventsByCategory/EventsByCategory";
import VerifyUser from "../Pages/AttendeesView/VerifyUser/VerifyUser";
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
      path: "/events/:category/:location",
      element: <EventsByCategory />,
    },
    {
      path: "/event/:id",
      element: <SingleEvent />,
    },
    {
      path: "/verify",
      element: <VerifyUser />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default UnauthenticatedApp;
