import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase.init";

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {

    const [user,setUser]=useState(null)
    

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth,email,password)
    }


    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth,email,password)
    }

    const updateUserProfile = (userDetails) => {
        return updateProfile(auth.currentUser,userDetails)
    }

    useEffect(() => {
        const unMount = onAuthStateChanged(auth, (user) => {
            setUser(user)
        })

        return () => {
            unMount()
        }
    },[])


    const userInfo = {
        createUser,
        loginUser,
        user,
        updateUserProfile
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