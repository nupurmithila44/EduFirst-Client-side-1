import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hook/useAuth";


const PrivateRoutes = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();
    if (loading) {
        return <span className="loading loading-spinner loading-lg"></span>
    }

    if (user) {
        return children;
    }
    return <Navigate to="/signIn" state={location.pathname} replace></Navigate>
};

export default PrivateRoutes;