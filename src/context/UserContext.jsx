import userServices from "../services/UserServices";
import { Children, createContext, useContext, useEffect, useState } from "react";


const UserContext = createContext();

export const UserProvider = ({children}) => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        fechAllUsers();
    }, [])

    const fechAllUsers = async () => {
        setLoading(true);
        try{
            const data = await userServices.getAll();
            setUsers(data);
        }
        catch(error){
            console.error('erreur lors du chargement des user: '+ error)
        }
        setLoading(false)
    }

    const deleteUser = async (id) => {
        try{
            setLoading(true);
            await userServices.delete(id);
            // la mise à jour local
            setUsers(users.filter((user)=>user.id !== id));
        }
        catch(error){
            console.error('erreur lors de la suppression du user: '+error)
        }
        setLoading(false)
    }

    const makeAdmin= async (id) => {
        try{
            setLoading(true)
            await userServices.makeAdmin(id);
            await fechAllUsers();

            console.log(`l'utilisateur avec id= ${id} est devenu admin`)
        }
        catch(error){
            console.log(`erreur lors de l'ajout du roles admin ${error}`)
        }
        setLoading(false)
    }
    const dismissAdmin= async (id) => {
        try{
            setLoading(true)
            await userServices.disMissAdmin(id);
            await fechAllUsers();
            console.log(`l'utilisateur avec id= ${id} n'est plus admin`)
        }
        catch(error){
            console.log(`erreur lors de la suppression du roles admin: ${error}`)
        }
        setLoading(false)
    }

    return (
        <UserContext.Provider value={{loading, users, deleteUser, makeAdmin, dismissAdmin}}>
            {children}
        </UserContext.Provider>
    )

    
}

export const useUsers = () => useContext(UserContext);