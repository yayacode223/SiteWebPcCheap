import { Navigate } from "react-router-dom"; // Correction : "react-router-dom" au lieu de "react-router"
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children }) => {
    const { user, loading } = useAuth();

    if (loading) {
        return (
            <div className="w-full h-[100vh] flex items-center justify-center">

                <div className="flex items-center justify-center space-x-2">
                    <div className="w-4 h-4 rounded-full animate-pulse bg-blue-600"></div>
                    <div className="w-4 h-4 rounded-full animate-pulse bg-blue-600"></div>
                    <div className="w-4 h-4 rounded-full animate-pulse bg-blue-600"></div>
                </div>
         
            </div>
        ); // Afficher un indicateur de chargement
    }

    // Vérification sécurisée du rôle ADMIN
    const isAdmin = user && Array.isArray(user.roles) && user.roles.includes("ROLE_ADMIN");

    return isAdmin ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
