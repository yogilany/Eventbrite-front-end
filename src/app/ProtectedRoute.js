import { Navigate, Outlet, Route, useLocation } from "react-router";
// import { useAuth } from "./useAuth";
import { selectUserToken } from "../features/authSlice";
import { useSelector } from "react-redux";

export const ProtectedRoute = () => {
    const token = useSelector(selectUserToken);
    // const { user } = useAuth();
    const location = useLocation();
    return token ? (
        <Route>
            <Outlet />
        </Route>
    ) : (
        <Navigate to="/login" replace state={{ from: location }} />
    );
};

export default ProtectedRoute;