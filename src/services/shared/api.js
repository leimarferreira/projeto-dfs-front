import axios from 'axios';

export const TOKEN_KEY = "AUTH_TOKEN";
export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const deleteToken = () => localStorage.removeItem(TOKEN_KEY);

const api = axios.create({
    baseURL: "https://localhost:5001/api",
    headers: {
        "Content-type": "application/json"
    }
});

api.interceptors.request.use(async config => {
    const token = getToken();
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});

api.interceptors.response.use(async response => {
    return response;
}, async error => {
    if (error.response.status === 401) {
        const token = getToken();

        if (token) {
            deleteToken();
        }

        return error;
    }
});

export default api;
