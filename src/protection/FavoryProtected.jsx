import React from 'react'
import { useAuth } from '../context/AuthContext'
import { Navigate } from 'react-router-dom';


const FavoryProtected = ({children}) => {

    const {user, loading} = useAuth();

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

    return user ? children : <Navigate to="/login" />;
  
}

export default FavoryProtected;
