import { createContext, useContext, useState, useEffect } from "react";
import favoryServices from "../services/FavoryServices";

const FavoryContext = createContext();

export const FavoryProvider = ({children}) => {
    const [favories, setFavories] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchFavories();
    }, []);

    const fetchFavories = async () => {
        setLoading(true);

        try{
            const data = await favoryServices.getAll();
            setFavories(data);
        } catch(error) {
            console.error("Erreur lors du chargement des des favoris :", error);
        }

        setLoading(false);
    }

    

    const addFavory = async (id) => {
        setLoading(true)
        try{
            await favoryServices.add(id);
            fetchFavories();

        } catch(error) {
            console.error("erreur lors de l'ajout d'un favoris: ", error);
        }
        setLoading(false)
    };

    


    const deleteFavory = async (id) => {
        setLoading(true)
        try{
            await favoryServices.delete(id);
            fetchFavories();
        } catch (error) {
            console.error("Erreur lors de la suppression :", error);
        }
        setLoading(false)
    }


    return (
        <FavoryContext.Provider value={{favories, loading, fetchFavories, addFavory, deleteFavory}}>
            {children}
        </FavoryContext.Provider>
    )
}

export const useFavory = () => useContext(FavoryContext);

