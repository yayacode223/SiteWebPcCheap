import axios from "axios";



export const BASE_URL = "https://backcheap.fivedev.store/public/api";
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
            console.warn("Session expirée, déconnexion...");

            // ⚠ Vérifie si on est déjà en train de rediriger pour éviter la boucle
            if (!window.localStorage.getItem("logout_triggered")) {
                window.localStorage.setItem("logout_triggered", "true");

                alert("Votre session a expiré, veuillez vous reconnecter.");
                
                // ⚠ Utilise ton contexte d'authentification
                const { logout } = useAuth();
                logout();  // Déconnecte l'utilisateur proprement

                // Redirige vers la page de connexion
                window.location.href = "/login";

                setTimeout(() => {
                    window.localStorage.removeItem("logout_triggered");
                }, 3000);
            }
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;