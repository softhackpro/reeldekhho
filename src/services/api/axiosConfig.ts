import axios from 'axios';

const token = localStorage.getItem('token');
console.log("token ", token);

// const backendUrl = import.meta.env.VITE_BACKEND_URL;
const api = axios.create({
    baseURL: 'http://localhost:3001',
    // baseURL: backendUrl,
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