import { data } from "react-router";
import axiosInstance from "../utils/AxiosInstance";


const AuthServices = {


    login: async (email, password) => {
        try {
            const response = await axiosInstance.post("/login", {
                email,
                password,
            });

            
            if(response.data.token && response.data.email && response.data.roles) {
                const user = {
                    username: response.data.username,
                    email: response.data.email,
                    roles: response.data.roles
                }
                sessionStorage.setItem("user", JSON.stringify(user));
                
            }

            return response.data;

        } 
        catch (error) {
            console.error(`error de connexion: ${error}`)
            throw error.response.data;
        }

    },

    logout: () => {
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('user');
    },


    register: async (username, email, password) => {

        try{

            const response = axiosInstance.post('/register',{
                username,
                email,
                password,
            });


            return response.data;            
        }
        catch(error) {
            console.error(`error d'inscription: ${error}`)
            throw error.response.data
        }
    }
}