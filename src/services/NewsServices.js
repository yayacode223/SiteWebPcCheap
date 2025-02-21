import axiosInstance from "../utils/AxiosInstance";

const NewsService = {

    getAll: async () => {
        const response = await axiosInstance.get('/admin/news');

        return response.data
    },

    getOne: async (id) => {
        const response = await axiosInstance.get(`/admin/news/${id}`);

        return response.data
    },

    add: async (newNews) => {
        const formData = new FormData();
        formData.append("title", newNews.title);
        formData.append("body", newNews.body);
        formData.append("image", newNews.image);

        const response = await axiosInstance.post('/admin/news/create', formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            },

        });

        return response.data;
    },

    update: async (id, newNews) => {

        const formData = new FormData();
        formData.append("title", newNews.title);
        formData.append("body", newNews.body);
        formData.append("image", newNews.image);

        const response = await axiosInstance.post(`/admin/edit_news/${id}`, formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            },

        }); 

        return response.data;
    },

    delete: async (id) => {
        await axiosInstance.get(`/admin/delete_news/${id}`);
    },

}

export default NewsService;