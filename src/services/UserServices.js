import axiosInstance from "../utils/AxiosInstance";

const UserServices = {

    getAll: async () => {
        const response = await axiosInstance.get('/admin/users');

        return response.data;
    },

    delete: async (id) => {
        await axiosInstance.post(`/admin/delete_user/${id}`);
    }
}

export default UserServices;