import categoryServices from "../services/CategoryServices";
import { createContext, useContext, useState, useEffect } from "react";

const CategoryContext = createContext();

export const CategoryProvider = ({children}) => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchCategories();
    }, []);

    const fetchCategories = async () => {
        setLoading(true);

        try{
            const data = await categoryServices.getAll();

            setCategories(data);
        } catch(error) {
            console.error("Erreur lors du chargement des produits :", error);
        }

        setLoading(false);
    }

    const fetchOneCategory = async (id) => {

        setLoading(true);
        try {

            const data = await categoryServices.getOne(id);

            return data
        } catch (error) {
            console.log('erreur lors de fechOneCategory',
                error
            )
        }

        setLoading(false);
    }

    const addcategory = async (category) => {

        try{
            const newCategory = await categoryServices.add(category);

            setCategories([...categories, newCategory]) // mise à jour locale
        } catch(error) {
            console.error("erreur lors de l'ajout du category: ", error);
        }
         
    };

    const updateCategory = async (id, updateCategory) => {

        try {
            const updated = await categoryServices.update(id, updateCategory);

            setCategories(categories.map((c) => (c.id === id? updated : c)));
        } catch(error) {

            console.error("Erreur lors de l'ajout d'une categorie :", error)
        }
    }


    const deleleCategory = async (id) => {
        try{
            await categoryServices.delete(id);
            setCategories(categories.filter((c) => c.id === id)); // Mise à jour locale
        } catch (error) {
            console.error("Erreur lors de la suppression :", error);
        }
    }


    return (
        <CategoryContext.Provider value={{categories, loading, fetchCategories, fetchOneCategory, addcategory, updateCategory, deleleCategory}}>
            {children}
        </CategoryContext.Provider>
    )
}

export const useCategory = () => useContext(CategoryContext);

