import { createContext, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUserToken } from "../features/authSlice";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const token = useSelector(selectUserToken);
    const navigate = useNavigate();

    // call this function when you want to authenticate the user
    const login_navigate = async (data) => {
        navigate("/");
    };

    // call this function to sign out logged in user
    const logout_navigate = () => {
        navigate("/login", { replace: true });
    };

    const value = useMemo(
        () => ({
            token,
            login: login_navigate,
            logout: logout_navigate
        }),
        [token]
    );
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
    return useContext(AuthContext);
};