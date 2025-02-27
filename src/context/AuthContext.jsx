import { createContext, useState, useEffect, useContext } from "react";
import axiosInstance from "../utils/AxiosInstance";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true); // Chargement au début

    useEffect(() => {
        checkUser();
    }, []);

    const login = async (email, password) => {
        try {
            await axiosInstance.post('/login', { email, password }, { withCredentials: true });

            // Vérifier l'utilisateur après connexion
            await checkUser();
            console.log("✅ Connexion réussie !");
        } catch (error) {
            console.error('❌ Erreur de connexion', error);
        }
    };

    const register = async (username, email, password) => {
        try {
            await axiosInstance.post('/register', { username, email, password }, { withCredentials: true });

            // Se connecter directement après inscription
            await login(email, password);
        } catch (error) {
            console.error(`❌ Erreur d'inscription: ${error}`);
            throw error.response?.data || "Erreur d'inscription";
        }
    };

    const checkUser = async () => {
        setLoading(true);
        try {
            // Récupérer l'utilisateur avec le cookie de session httpOnly
            const response = await axiosInstance.get('/user/profile', { withCredentials: true });

            if (response.data) {
                setUser(response.data);
            } else {
                setUser(null);
            }
        } catch (error) {
            console.error(`❌ Erreur lors de la vérification du profil : ${error}`);
            setUser(null);
        }
        setLoading(false);
    };

    const logout = async () => {
        try {
            await axiosInstance.post('/logout', {withCredentials: true});

            setUser(null);
            console.log("✅ Déconnexion réussie !");
        } catch (error) {
            console.alert('❌ Erreur de déconnexion', error);
        }
    };

    return (
        <AuthContext.Provider value={{ user, login, register, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
