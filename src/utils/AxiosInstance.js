import axios from "axios";

export const BASE_URL = "https://3e86-41-142-157-149.ngrok-free.app/api";


const axiosInstance = axios.create({
    baseURL: BASE_URL,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
    },
});


axiosInstance.interceptors.response.use(
    response => response,
    async error => {
        if (error.response && error.response.status === 401) {
            console.warn("Session expirée, déconnexion...");
            alert('Session expirée, déconnexion...')
            // Déclencher le logout automatique
            window.location.reload(); 
        }
        return Promise.reject(error);
    }
);


export default axiosInstance;


