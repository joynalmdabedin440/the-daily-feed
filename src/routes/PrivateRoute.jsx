import { useContext } from "react";
import { AuthContext } from "../auth/AuthProvider";
import { Navigate } from "react-router";
import PropTypes from "prop-types";


const PrivateRoute = ({children}) => {
 const {user} = useContext(AuthContext)

    if (user) {
       return children
    }
    
    else {
        return <Navigate to="/auth/login" />
    }
    
    
   
};



PrivateRoute.propTypes = {
    children:PropTypes.object
}

export default PrivateRoute;