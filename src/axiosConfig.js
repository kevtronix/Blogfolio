import axios from 'axios';

const axiosConfig = axios.create({
    baseURL: process.env.REACT_APP_API_URL
});

axiosConfig.interceptors.response.use((response) => {
    return response;
}, async (error) => {
    // If error is 401, try to refresh token
    const originalRequest = error.config;
    // If error is not 401 or if it's the refresh token endpoint, return error
    if (error.response.status !== 401 || originalRequest.url === '/token/refresh/') {
        return Promise.reject(error);
    }
    // If error is 401 and it's not the refresh token endpoint, try to refresh token
    if (error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;

        // Attempt to refresh token
        const refreshToken = localStorage.getItem('refresh'); 
        const res = await axiosConfig.post('/token/refresh/', {
            refresh: refreshToken,
        })
        if (res.status === 200) {
            // Update token and retry original request
            const token = res.data.access;
            localStorage.setItem('token', token);
            axiosConfig.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            // Retry original request
            return axiosConfig(originalRequest);
        }
    }
    return Promise.reject(error);
});

export default axiosConfig;