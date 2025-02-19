import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase.init";
import { GoogleAuthProvider } from "firebase/auth";

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    
    const [loading, setLoading] = useState(true)

    const provider = new GoogleAuthProvider()
    

    const loginWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth,provider)
        
    }
    

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
        loginWithGoogle,
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