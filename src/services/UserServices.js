import axios from "axios";
import axiosInstance from "../utils/AxiosInstance";

const UserServices = {

    getAll: async () => {
        const response = await axiosInstance.get('/admin/users');

        return response.data;
    },

    delete: async (id) => {
        await axiosInstance.post(`/admin/delete_user/${id}`);
    },

    makeAdmin: async (id) => {
        await axiosInstance.post(`/user/make_admin/${id}`);
    },

    disMissAdmin: async (id) =>{
        await axiosInstance.post(`/user/dismiss_admin/${id}`)
    }

}

export default UserServices;