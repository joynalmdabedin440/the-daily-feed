import { useContext } from "react";
import { AuthContext } from "../auth/AuthProvider";
import { Navigate } from "react-router";
import PropTypes from "prop-types";


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)



    if (loading) {
        return <div>
            <span className="loading loading-spinner loading-xs"></span>
            <span className="loading loading-spinner loading-sm"></span>
            <span className="loading loading-spinner loading-md"></span>
            <span className="loading loading-spinner loading-lg"></span>
        </div>
    }
    if (user) {
        return children
    }

    else {
        return <Navigate to="/auth/login" />
    }



};



PrivateRoute.propTypes = {
    children: PropTypes.object
}

export default PrivateRoute;