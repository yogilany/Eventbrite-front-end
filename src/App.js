// import "./App.css";
// import { Layout } from "./app/layout";
// import AuthenticatedApp from "./app/AuthenticatedApp";
// import UnauthenticatedApp from "./app/UnauthenticatedApp";
// import { useSelector } from "react-redux";
// import { selectUserToken } from "./features/authSlice";
// function App() {
//   const token = useSelector(selectUserToken);
//   console.log("Token = ", token);

//   return (
//     <>
//       {token ? (
//         <Layout>
//           <AuthenticatedApp />
//         </Layout>
//       ) : (
//         <Layout>
//           <UnauthenticatedApp />
//         </Layout>

//       )}
//     </>
//   );
// }

// export default App;

// Alternate App.js for route protection
import "./App.css";
import { useSelector } from "react-redux";
import { selectUserToken } from "./features/authSlice";
import { Navigate, Route, Routes } from "react-router";
import { HomePage } from "./Pages/AttendeesView/HomePage/HomePage";
import Signup from "./Pages/AttendeesView/Signup/Signup";
import { ProtectedRoute } from "./app/ProtectedRoute";
import Likes from "./Pages/AttendeesView/Likes/Likes";
import FollowingOrgEvents from "./Pages/AttendeesView/FollowingOrganizersEvents/Following";
import { BrowserRouter } from "react-router-dom";
import Login from "./Pages/AttendeesView/Login/Login";
import { Layout } from "./app/layout";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import AllEvents from "./Pages/AttendeesView/BrowseEvents/AllEvents";
import Organizer from "./Pages/AttendeesView/Organizer/Organizer";
import Details from "./Pages/CreatorsView/Details/Details";
import Publish from "./Pages/Publishpage/Publish";
import Dashboard from "./Pages/CreatorsView/Dashboard/Dashboard";
import SearchPage from "./Pages/AttendeesView/HomePage/Components/SearchPage";
import EventsByCategory from "./Pages/AttendeesView/EventsByCategory/EventsByCategory";
import SingleEvent from "./Pages/AttendeesView/SingleEvent/SingleEvent";
import Profile from "./Pages/AttendeesView/Profile/Profile";
import VerifyUser from "./Pages/AttendeesView/VerifyUser/VerifyUser";
import Tickets from "./Pages/CreatorsView/TicketsPage/TicketsPage";
import CreateEvent from "./Pages/CreatorsView/CreateEvent/CreateEvent";
import ResetPassword from "./Pages/AttendeesView/Login/ResetPassword";
import AddAttendees from "./Pages/CreatorsView/AddAttendees/AddAttendees";
import SalesReport from "./Pages/CreatorsView/Dashboard/Components/SalesReport";
import TicketsReport from "./Pages/CreatorsView/Dashboard/Components/TicketsReport";
import ManageEvents from "./Pages/CreatorsView/ManageEvents/ManageEvents";
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
            <Route path="/sales-report" element={<SalesReport />} />
            <Route path="/tickets-report" element={<TicketsReport />} />

            <Route element={<ProtectedRoute />} errorElement={<ErrorPage />}>
              <Route path="/likes" element={<Likes />} />
              <Route path="/all-events" element={<AllEvents />} />
              <Route path="/details" element={<Details />} />
              <Route path="/following" element={<FollowingOrgEvents />} />
              <Route path="/Publish" element={<Publish />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/create-event" element={<CreateEvent />} />
              <Route path="/Profile" element={<Profile />} />
              <Route path="/tickets" element={<Tickets />} />
              <Route path="/manage-events" element={<ManageEvents />} />
              <Route path="/add-attendees" element={<AddAttendees />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Layout>
    </>
  );
}

export default App;
