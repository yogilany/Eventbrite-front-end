import { Navigate, Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AllEvents from "./Pages/AttendeesView/BrowseEvents/AllEvents";
import EventsByCategory from "./Pages/AttendeesView/EventsByCategory/EventsByCategory";
import FollowingOrgEvents from "./Pages/AttendeesView/FollowingOrganizersEvents/Following";
import SearchPage from "./Pages/AttendeesView/HomePage/Components/SearchPage";
import { HomePage } from "./Pages/AttendeesView/HomePage/HomePage";
import Likes from "./Pages/AttendeesView/Likes/Likes";
import Login from "./Pages/AttendeesView/Login/Login";
import ResetPassword from "./Pages/AttendeesView/Login/ResetPassword";
import Organizer from "./Pages/AttendeesView/Organizer/Organizer";
import Profile from "./Pages/AttendeesView/Profile/Profile";
import Signup from "./Pages/AttendeesView/Signup/Signup";
import SingleEvent from "./Pages/AttendeesView/SingleEvent/SingleEvent";
import VerifyUser from "./Pages/AttendeesView/VerifyUser/VerifyUser";
import AddAttendees from "./Pages/CreatorsView/AddAttendees/AddAttendees";
import CreateEvent from "./Pages/CreatorsView/CreateEvent/CreateEvent";
import SalesReport from "./Pages/CreatorsView/Dashboard/Components/SalesReport";
import TicketsReport from "./Pages/CreatorsView/Dashboard/Components/TicketsReport";
import Dashboard from "./Pages/CreatorsView/Dashboard/Dashboard";
import Details from "./Pages/CreatorsView/Details/Details";
import ManageEvents from "./Pages/CreatorsView/ManageEvents/ManageEvents";
import Tickets from "./Pages/CreatorsView/TicketsPage/TicketsPage";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import Publish from "./Pages/Publishpage/Publish";
import { ProtectedRoute } from "./app/ProtectedRoute";
import { Layout } from "./app/layout";
import MyEvents from "./Pages/CreatorsView/MyEvents/MyEvents";
import ManageEvent from "./Pages/CreatorsView/ManageEvent/ManageEvent";
import OrdersReport from "./Pages/CreatorsView/Dashboard/Components/OrdersReport";
function App() {
  return (
    <>
      <Layout>
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<Navigate to="/" replace />} />
            <Route
              path="/"
              element={<HomePage />}
              errorElement={<ErrorPage />}
            />
            <Route path="/login" element={<Login />} />
            <Route path="/login/resetpassword" element={<ResetPassword />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/organizer/:id" element={<Organizer />} />
            <Route path="/verify" element={<VerifyUser />} />
            <Route path="/search" element={<SearchPage />} />
            <Route
              path="/events/:category/:location"
              element={<EventsByCategory />}
            />
            <Route path="/event/:id" element={<SingleEvent />} />
            <Route path="/sales-report/:id" element={<SalesReport />} />
            <Route path="/orders-report/:id" element={<OrdersReport />} />

            <Route path="/tickets-report" element={<TicketsReport />} />

            <Route element={<ProtectedRoute />} errorElement={<ErrorPage />}>
              <Route path="/likes" element={<Likes />} />
              <Route path="/browse-events" element={<AllEvents />} />
              <Route path="/details" element={<Details />} />
              <Route path="/following" element={<FollowingOrgEvents />} />
              <Route path="/Publish" element={<Publish />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/create-event" element={<CreateEvent />} />
              <Route path="/Profile" element={<Profile />} />
              <Route path="/tickets" element={<Tickets />} />
              <Route path="/manage-events" element={<ManageEvents />} />
              <Route path="/add-attendees" element={<AddAttendees />} />
              <Route path="/manage-event/:id" element={<ManageEvent />} />


            </Route>
          </Routes>
        </BrowserRouter>
      </Layout>
    </>
  );
}

export default App;
