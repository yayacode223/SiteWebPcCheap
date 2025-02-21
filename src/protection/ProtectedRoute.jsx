import { Navigate } from "react-router";
import {useAuth} from '../context/AuthContext';


const ProtectedRoute = ({ children }) => {
    const { user, loading } = useAuth();
  
    if (loading) return <p>Chargement...</p>;

  
    return (user && user.roles.includes("ROLE_ADMIN")) ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;