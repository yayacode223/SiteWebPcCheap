import { createContext, useState, useEffect, useContext } from "react";
import ProductServices from "../services/ProductServices";

const ProductContext = createContext();

export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState([]);    
    const [loading, setLoading] = useState(false);
    const [productId, setProductId] = useState(null);
    const [oldProduct, setOldProduct] = useState({});
    
    // 🔥 Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [categoryId, setCategoryId] = useState(0);
    const [totalPages, setTotalPages] = useState(1);
    const limit = 10; // Nombre d'éléments par page

    useEffect(() => {
        fetchProducts();
    }, [currentPage, categoryId]);

    useEffect(() => {
        if (productId !== null) {
            fetchOneProduct(productId);
        }  
    }, [productId]);

    // 🔥 Récupération des produits avec pagination
    const fetchProducts = async () => {
        setLoading(true);
        try {
            const data = await ProductServices.getAll(currentPage, limit, categoryId);
            setProducts(data.products);
            setTotalPages(data.totalPages);  // Mise à jour du nombre total de pages
        } catch (error) {
            console.error("Erreur lors du chargement des produits :", error);
        }
        setLoading(false);
    };

    // 🔥 Récupération d'un seul produit
    const fetchOneProduct = async (id) => {
        setLoading(true);
        try {
            const data = await ProductServices.getOne(id);
            setOldProduct(data);
        } catch (error){
            console.error('Erreur lors de la récupération du produit par ID :', error);
        }
        setLoading(false);
    };

    // 🔥 Ajout d'un produit
    const addProduct = async (product) => {
        setLoading(true);
        try {
            await ProductServices.add(product);
            fetchProducts();  // Rafraîchir la liste après ajout
        } catch (error) {
            console.error("Erreur lors de l'ajout du produit :", error);
        }
        setLoading(false);
    };

    // 🔥 Mise à jour d'un produit
    const updateProduct = async (id, updatedProduct) => {
        setLoading(true);
        try {
            await ProductServices.update(id, updatedProduct);
            fetchProducts();  // Rafraîchir la liste après mise à jour
        } catch (error) {
            console.error("Erreur lors de la mise à jour :", error);
        }
        setLoading(false);
    };

    // 🔥 Suppression d'un produit
    const deleteProduct = async (id) => {
        setLoading(true);
        try {
            await ProductServices.delete(id);
            fetchProducts();  // Rafraîchir la liste après suppression
        } catch (error) {
            console.error("Erreur lors de la suppression :", error);
        }
        setLoading(false);
    };

    return (
        <ProductContext.Provider value={{
            products, oldProduct, 
            currentPage, setCurrentPage, 
            totalPages, setCategoryId, 
            setProductId, loading, 
            fetchProducts, fetchOneProduct, 
            addProduct, updateProduct, deleteProduct
        }}>
            {children}
        </ProductContext.Provider>
    );
};

export const useProduct = () => useContext(ProductContext);
