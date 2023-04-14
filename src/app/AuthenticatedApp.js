import { Col, Row, Container } from "react-bootstrap";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "../Pages/AttendeesView/HomePage/HomePage";
import Likes from "../Pages/AttendeesView/Likes/Likes";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import AllEvents from "../Pages/AttendeesView/BrowseEvents/AllEvents";
import Organizer from "../Pages/AttendeesView/Organizer/Organizer";
import Details from "../Pages/CreatorsView/Details/Details";
import Following from "../Pages/AttendeesView/FollowingOrganizersEvents/Following";
import Publish from "../Pages/Publishpage/Publish";
import BasicInfo from "../Pages/CreatorsView/Basicinfo/BasicInfo";
import SearchPage from "../Pages/AttendeesView/HomePage/Components/SearchPage";
import SingleEvent from "../Pages/AttendeesView/SingleEvent/SingleEvent";
import Login from "../Pages/AttendeesView/Login/Login";
import Signup from "../Pages/AttendeesView/Signup/Signup";
import Profile from "../Pages/AttendeesView/Profile/Profile";

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
      path: "/basic-info",
      element: <BasicInfo />,
    },
    {
      path: "/search",
      element: <SearchPage />,
    },
    {
      path: "/event",
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
