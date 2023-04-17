import { Col, Row, Container } from "react-bootstrap";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "../Pages/AttendeesView/HomePage/HomePage";
import Likes from "../Pages/AttendeesView/Likes/Likes";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import AllEvents from "../Pages/AttendeesView/BrowseEvents/allEvents";
import Organizer from "../Pages/AttendeesView/Organizer/organizer";
import Details from "../Pages/CreatorsView/Details/Details";
import Following from "../Pages/AttendeesView/FollowingOrganizersEvents/following";
import Publish from "../Pages/Publishpage/Publish";
import BasicInfo from "../Pages/CreatorsView/Basicinfo/basicInfo";
import SearchPage from "../Pages/AttendeesView/HomePage/Components/SearchPage";
import SingleEvent from "../Pages/AttendeesView/SingleEvent/singleEvent";
import Login from "../Pages/AttendeesView/Login/login";
import Signup from "../Pages/AttendeesView/Signup/signup";
import Profile from "../Pages/AttendeesView/Profile/profile";
import Dashboard from "../Pages/CreatorsView/Dashboard/dashboard";
import EventsByCategory from "../Pages/AttendeesView/EventsByCategory/eventsByCategory";

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
    {
      path: "/details",
      element: <Details />,
    },
    {
      path: "/following",
      element: <Following />,
    },
    {
      path: "/Publish",
      element: <Publish />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
    {
      path: "/basic-info",
      element: <BasicInfo />,
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
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/Profile",
      element: <Profile />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default AuthenticatedApp;
