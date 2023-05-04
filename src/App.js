import "./App.css";
import { Layout } from "./app/layout";
import AuthenticatedApp from "./app/AuthenticatedApp";
import UnauthenticatedApp from "./app/UnauthenticatedApp";
import { useSelector } from "react-redux";
import { selectUserToken } from "./features/authSlice";
function App() {
  const token = useSelector(selectUserToken);
  console.log("Token = ", token);

  return (
    <>
      {token ? (
        <Layout>
          <AuthenticatedApp />
        </Layout>
      ) : (
        <Layout>
          <UnauthenticatedApp />
        </Layout>

      )}
    </>
  );
}

export default App;

// Alternate App.js for route protection
// import "./App.css";
// import { useSelector } from "react-redux";
// import { selectUserToken } from "./features/authSlice";
// import { Route, Routes, useRoutes } from "react-router";
// import { HomePage } from "./Pages/AttendeesView/HomePage/HomePage";
// import Signup from "./Pages/AttendeesView/Signup/Signup";
// import { ProtectedRoute } from "./app/ProtectedRoute";
// import Likes from "./Pages/AttendeesView/Likes/Likes";
// import FollowingOrgEvents from "./Pages/AttendeesView/FollowingOrganizersEvents/Following";
// import { BrowserRouter } from "react-router-dom";
// import Login from "./Pages/AttendeesView/Login/Login";

// function App() {
//   const userToken = useSelector(selectUserToken);

//   console.log("Token = ", userToken);
//   return (
//     <>
//       <BrowserRouter>

//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/signup" element={<Signup />} />
//           <Route
//             path="/likes"
//             element={
//               <ProtectedRoute>
//                 <Likes />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/following"
//             element={
//               <ProtectedRoute>
//                 <FollowingOrgEvents />
//               </ProtectedRoute>
//             }
//           />
//         </Routes>
//       </BrowserRouter>

//     </>
//   );
// }

// export default App;
