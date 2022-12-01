import React, { useState } from "react";
import { createContext, useContext, useEffect } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth"
import { auth } from "../utils/firebase/credenciales";
export const authContext = createContext()

export const useAuth = () => {
    const context = useContext(authContext)
    if (!context) {
        throw new Error("There is no auth provider")
    }
    return context
}
export function AuthProvider({ children }) {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(loading)


    const signUp = (email, password) =>
        createUserWithEmailAndPassword(auth, email, password)


    const login = async (email, password) =>
        signInWithEmailAndPassword(auth, email, password)

    const logOut = () => signOut(auth)

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => unsub()
    }, [])

    return (
        <>
            <authContext.Provider value={{ signUp, login, user, logOut, loading }}>
                {children}
            </authContext.Provider></>
    )
}