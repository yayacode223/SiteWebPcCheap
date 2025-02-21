import axiosInstance from "../utils/AxiosInstance";


const categoryServices = {
    getAll: async () => {
        const response = await axiosInstance.get('/admin/categories');

        return response.data
    },


    getOne: async (id) => {
        const response = await axiosInstance.get(`/admin/categories/${id}`)

        return response.data
    },

    add: async (newcategory) => {
        const response = await axiosInstance.post('/admin/category/create', {
            'category': newcategory
        });

        return response.data
    },

    update: async (id, newcategory) => {

        const response = await axiosInstance.post(`/admin/edit_category/${id}`, {
            'category': newcategory
        });

        return response.data;
    },

    delete: async (id) => {
        const response = await axiosInstance.get(`/admin/delete_category/${id}`);

        return response.data;
    }
}

export default categoryServices;