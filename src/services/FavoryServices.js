import axiosInstance from "../utils/AxiosInstance";


const favoryServices = {
    getAll: async () => {
        const response = await axiosInstance.get('user/favory/list');

        return response.data
    },


    add: async (id) => {
        const response = await axiosInstance.post(`/user/favory/add/${id}`);

        return response.data
    },

    
    delete: async (id) => {
        const response = await axiosInstance.post(`/user/favory/remove/${id}`);

        return response.data;
    }
}

export default favoryServices;