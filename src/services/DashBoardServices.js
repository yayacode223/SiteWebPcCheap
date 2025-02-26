import axiosInstance from "../utils/AxiosInstance";

const DashBoardServices = {
    getStat: async () => {
        const response = await axiosInstance.get('/admin/dashboard');

        return response.data
    } 

}

export default DashBoardServices;