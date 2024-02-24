import axios from 'axios';
import { jwtDecode } from "jwt-decode";
import dayjs from 'dayjs';

// Assuming BASE_URL is defined in your environment
const baseURL: string = import.meta.env.VITE_BASE_URL;
let authTokensString = localStorage.getItem('authTokens');
let authTokens = authTokensString ? JSON.parse(authTokensString) : null;

const axiosInstance = axios.create({
    baseURL,
    withCredentials: true,
    headers: { Authorization: `Bearer ${authTokens?.accessToken}` }
});

axiosInstance.interceptors.request.use(async req => {
    let authTokensString = localStorage.getItem('authTokens');
    if (!authTokensString) {
        // Handle case where authTokens are not present
        return req;
    }
    
    try {
        authTokens = JSON.parse(authTokensString);
        req.headers.Authorization = `Bearer ${authTokens?.accessToken}`;
        
        const user: any = jwtDecode(authTokens.accessToken); // Assuming user is any type for simplicity
        const isExpired: boolean = dayjs.unix(user.exp || 1).diff(dayjs()) < 1;
        if (!isExpired) return req;

        const response = await axios.get(`${baseURL}/auth/refresh`, {
            withCredentials: true
        });
        localStorage.setItem('authTokens', JSON.stringify(response.data));
        req.headers.Authorization = `Bearer ${response.data.accessToken}`;
    } catch (error) {
        // Handle error
        console.error('Error refreshing token:', error);
    }

    return req;
});


axiosInstance.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    // console.log(response.)
    return response;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
});


export default axiosInstance;
