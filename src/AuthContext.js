import React, { useState, useEffect, createContext } from "react";
import axiosConfig from './axiosConfig';
import { useNavigate } from "react-router-dom";



// Create Auth Context
export const AuthContext = createContext();

// Create Auth Provider 
export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem('token') || null);
    const [refresh, setRefresh] = useState(localStorage.getItem('refresh') || null);
    const navigate = useNavigate();

    useEffect(() => {
        // change axios authorization header when token changes 
        axiosConfig.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        // set the new item in local storage when token changes
        localStorage.setItem('token', token);
    }, [token]) 

    useEffect(() => {
        // set new refresh token in local storage when refresh token changes
        localStorage.setItem('refresh', refresh);
    }, [refresh])

    const logIn = (username, password, url) => {
        console.log(token);
        axiosConfig.post('/token/', {
            username: username,
            password: password,
        })
            .then(res => {
                console.log(res);
                setToken(res.data.access);
                setRefresh(res.data.refresh);
                // navigate to url if login is successful
                navigate(url);
            })
            .catch(err => {
                console.log(err); 
            })
    }


    return (
        <AuthContext.Provider value={{ token, refresh, logIn }}>
            {children}
        </AuthContext.Provider>
    )
}

