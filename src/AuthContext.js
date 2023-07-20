import React, { useState, useEffect, createContext } from "react";
import axiosConfig from './axiosConfig';
import { useNavigate } from "react-router-dom";



// Create Auth Context
export const AuthContext = createContext();

// Create Auth Provider 
export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem('token') || null);
    const navigate = useNavigate();

    useEffect(() => {
        // change axios authorization header when token changes 
        axiosConfig.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }, [token]) 

    const logIn = (username, password, url) => {
        console.log(token);
        axiosConfig.post('/login/', {
            username: username,
            password: password,
        })
            .then(res => {
                console.log(res);
                setToken(res.data.token);
                localStorage.setItem('token', res.data.token);
                // navigate to url if login is successful
                navigate(url);
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

