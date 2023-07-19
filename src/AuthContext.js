import React, { useState, useEffect, createContext } from "react";
import axiosConfig from './axiosConfig';



// Create Auth Context
export const AuthContext = createContext();

// Create Auth Provider 
export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem('token') || null);

    useEffect(() => {
        // change axios authorization header when token changes 
        axiosConfig.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }, [token]) 

    const logIn = (username, password) => {
        console.log(token);
        axiosConfig.post('/login/', {
            username: username,
            password: password,
        })
            .then(res => {
                console.log(res);
                setToken(res.data.token);
                localStorage.setItem('token', res.data.token);
            })
            .catch(err => {
                console.log(err); 
            })
    }

    return (
        <AuthContext.Provider value={{ token, logIn }}>
            {children}
        </AuthContext.Provider>
    )
}

