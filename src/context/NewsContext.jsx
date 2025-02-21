import { createContext, useState, useEffect, useContext } from "react";
import NewsService from "../services/NewsServices";

const NewsContext = createContext();

export const NewsProvider = ({ children }) => {
    const [news, setNews] = useState([]);
    
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchNews();
    }, []);

    const fetchNews = async () => {
        setLoading(true);
        try {
            const data = await NewsService.getAll();
            setNews(data);
        } catch (error) {
            console.error("Erreur lors du chargement des news :", error);
        }
        
        setLoading(false);
    };

    const fetchOneNews = async (id) => {
        setLoading(true);
        try {
            const data = await NewsService.getOne(id);
            setLoading(true)

            return data;
        } catch (error){
            console.log('Erreur lors de la recuperation du News by Id :',error)
        }

        setLoading(false);
    }

    const addNews = async (news) => {
        try {
            const newNews = await NewsService.add(news);
            setNews([...news, newNews]); // Mise à jour locale
        } catch (error) {
            console.error("Erreur lors de l'ajout du produit :", error);
        }
    };

    const updateNews = async (id, updatedNews) => {
        try {
            const updated = await NewsService.update(id, updatedNews);
            setNews(news.map((p) => (p.id === id ? updated : p))); // Mise à jour locale
        } catch (error) {
            console.error("Erreur lors de la mise à jour :", error);
        }
    };

    const deleteNews = async (id) => {
        try {
            await NewsService.delete(id);
            setNews(news.filter((p) => p.id !== id)); // Mise à jour locale
        } catch (error) {
            console.error("Erreur lors de la suppression :", error);
        }
    };

    return (
        <NewsContext.Provider value={{ news, loading, fetchNews, fetchOneNews, addNews, updateNews, deleteNews }}>
            {children}
        </NewsContext.Provider>
    );
};

export const useNews = () => useContext(NewsContext);
