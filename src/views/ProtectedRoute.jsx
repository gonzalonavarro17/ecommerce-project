/*import { Navigate, useLocation } from "react-router-dom";
import  useAuth  from "../hooks/useAuth"

function ProtectedRoute({ children }) {
    const { isLoggedIn } = useAuth();

    const location = useLocation();

    return isLoggedIn ?  children : <Navigate to={"/login"} state={location} />
}

export default ProtectedRoute;
*/

import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function ProtectedRoute({ children, adminOnly }) {
    const { isLoggedIn, userData } = useAuth();

    if (!isLoggedIn) {
        return <Navigate to="/login" replace />;
    }

    if (adminOnly && userData.role !== 'admin') {
        return <Navigate to="/" replace />;
    }

    return children;
}

export default ProtectedRoute;