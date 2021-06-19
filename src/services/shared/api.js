import axios from 'axios';
import jwt_decode from 'jwt-decode';

export const TOKEN_KEY = "AUTH_TOKEN";
export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const deleteToken = () => localStorage.removeItem(TOKEN_KEY);
export const isTokenExpired = token => {
    let decodedToken = jwt_decode(token);
    return ((decodedToken.exp * 1000) < Date.now());
};

const api = axios.create({
    baseURL: "https://localhost:5001/api",
    headers: {
        "Content-type": "application/json"
    }
});

api.interceptors.request.use(async config => {
    const token = getToken();

    if (token) {
        if (isTokenExpired(token)) {
            deleteToken();
            window.location.href = "/";
        }

        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});

export default api;
