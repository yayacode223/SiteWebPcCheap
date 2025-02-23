import axiosInstance from "../utils/AxiosInstance";

const ProductServices = {
    getAll: async () => {
        const response = await axiosInstance.get("/admin/products");
        return response.data;
    },

    getOne: async (id) => {
        const response = await axiosInstance.get(`/admin/products/${id}`);

        return response.data;
    },

    add: async (product) => {
        const formData = new FormData();
        formData.append("name", product.name);
        formData.append("mark", product.mark);
        formData.append("category_id", product.category);
        formData.append("stock", product.stock);
        formData.append("promo", product.promos);
        formData.append("description", product.description);

        product.images.forEach((image) => formData.append("images[]", image));

        formData.append(`features`, `[${product.features.map(item => "\""+item+"\"")}]`);
       

        const response = await axiosInstance.post("/admin/product/create", formData, {
            headers: { "Content-Type": "multipart/form-data" },
        });

        return response.data;
    },

    update: async (id, product) => {
        const formData = new FormData();
        formData.append("name", product.name);
        formData.append("mark", product.mark);
        formData.append("category_id", product.category);
        formData.append("stock", product.stock);
        formData.append("promo", product.promos);
        formData.append("description", product.description);

        product.images.forEach((image) => formData.append("images[]", image));
        
        formData.append(`features`, `[${product.features.map(item => "\""+item+"\"")}]`);


        const response = await axiosInstance.post(`/admin/edit_product/${id}`, formData, {
            headers: { "Content-Type": "multipart/form-data" },
        });

        return response.data;
    },
    
    delete: async (id) => {
        await axiosInstance.get(`/admin/delete_product/${id}`);
    },
};

export default ProductServices;
