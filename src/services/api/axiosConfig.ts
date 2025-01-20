import axios from 'axios';

const backendUrl = import.meta.env.VITE_BACKEND_URL;
const api = axios.create({
    baseURL: backendUrl,
    headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token')
    },
});

api.interceptors.request.use((config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default api;