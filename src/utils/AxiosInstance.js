import axios from "axios";

export const BASE_URL = "https://46f4-196-89-202-236.ngrok-free.app/api";

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


