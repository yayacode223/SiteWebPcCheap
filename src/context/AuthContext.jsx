import { createContext, useState, useEffect, useContext } from "react";

import axiosInstance from "../utils/AxiosInstance";
import axios from "axios";

const AuthContext = createContext();


export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        checkUser();
        setLoading(false)
    }, []);

    const login = async (email, password) => {
        try{
             
            const response =  await axiosInstance.post('/login', {
                'email': email,
                'password': password
            });
            
            checkUser(); //
            console.log("login passe")
        } catch(error) {
            console.error('Erreur, de connexion', error)
        }
    };


    const register = async (username, email, password,) => {

        try {
            await  axiosInstance.post('/register', {
                'username': username,
                'email': email,
                'password': password
            })



        }
        catch (error) {
            console.error(`error de l'inscription: ${error}`)

            throw error.response.data;
        }
    }


    const checkUser = async () => {
        
        setLoading(true); 
        try {
            const response = await axiosInstance.get('/user/profile', {
                withCredentials: true,
            });

            setUser(response.data);
        } catch (error) {

            console.error(`error dans profile : ${error}`)
            setUser(null);
        }

        setLoading(false)
    };

    const logout = async () => {
        try {
            await axiosInstance.post('/logout');
            setUser(null);

        } catch (error) {
            console.error('Erreur de déconnexion', error);
        }

    };


    return (
        <AuthContext.Provider value={{user, login, register, logout, loading}} >
            {children}
        </AuthContext.Provider>
    );

}

export const useAuth = () => useContext(AuthContext);