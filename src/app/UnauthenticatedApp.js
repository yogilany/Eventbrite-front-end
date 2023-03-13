import "../App.css";
import { Col, Row, Container } from "react-bootstrap";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "../Pages/AttendeesView/HomePage/HomePage";
import Likes from "../Pages/AttendeesView/Likes/Likes";
import Login from "../Pages/AttendeesView/Login/Login";
import { Signup } from "../Pages/AttendeesView/Signup/Signup";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
function UnauthenticatedApp() {
  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default UnauthenticatedApp;
