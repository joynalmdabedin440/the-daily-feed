import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase.init";

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    
    const [loading,setLoading] =useState(true)
    

    const createUser = (email, password) => {
        setLoading(true)

        return createUserWithEmailAndPassword(auth,email,password)
    }


    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const updateUserProfile = (userDetails) => {
        setLoading(true)
        return updateProfile(auth.currentUser,userDetails)
    }

    const userLogOut = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unMount = onAuthStateChanged(auth, (user) => {
            setUser(user)
            setLoading(false)
        })

        return () => {
            unMount()
        }
    },[])


    const userInfo = {
        createUser,
        loginUser,
        user,
        updateUserProfile,
        userLogOut,
        loading
        
    }


    
    return (
        <AuthContext.Provider value={userInfo} >
            {children}

        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children:PropTypes.object
}

export default AuthProvider;