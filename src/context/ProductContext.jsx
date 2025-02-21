import { createContext, useState, useEffect, useContext } from "react";
import ProductServices from "../services/ProductServices";

const ProductContext = createContext();

export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState([]);    
    const [loading, setLoading] = useState(false);
    const [productId, setProductId] = useState(null);
    const [oldProduct, setOldProduct] = useState(null);

    useEffect(() => {
        fetchProducts();
    }, []);

    useEffect(() => {
      if(productId !== null){
        fetchOneProduct(productId);
      }  
    },[productId]);

    const fetchProducts = async () => {
        setLoading(true);
        try {
            const data = await ProductServices.getAll();
            setProducts(data);
        } catch (error) {
            console.error("Erreur lors du chargement des produits :", error);
        }

        setLoading(false);
    };

    const fetchOneProduct = async (id) => {
        setLoading(true);
        try {
            const data = await ProductServices.getOne(id);
            setOldProduct(data);
            
        } catch (error){
            console.log('Erreur lors de la recuperation du produit by Id :',error)
        }

        setLoading(false);
    }

    const addProduct = async (product) => {
        try {
            const newProduct = await ProductServices.add(product);
            setProducts([...products, newProduct]); // Mise à jour locale
        } catch (error) {
            console.error("Erreur lors de l'ajout du produit :", error);
        }
    };

    const updateProduct = async (id, updatedProduct) => {
        try {
            const updated = await ProductServices.update(id, updatedProduct);
            setProducts(products.map((p) => (p.id === id ? updated : p))); // Mise à jour locale
        } catch (error) {
            console.error("Erreur lors de la mise à jour :", error);
        }
    };

    const deleteProduct = async (id) => {
        try {
            await ProductServices.delete(id);
            setProducts(products.filter((p) => p.id !== id)); // Mise à jour locale
        } catch (error) {
            console.error("Erreur lors de la suppression :", error);
        }
    };

    return (
        <ProductContext.Provider value={{ products, oldProduct, setProductId, loading, fetchProducts, fetchOneProduct, addProduct, updateProduct, deleteProduct }}>
            {children}
        </ProductContext.Provider>
    );
};

export const useProduct = () => useContext(ProductContext);
