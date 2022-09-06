import config from '~/config/config';
import axios from 'axios';

const axiosClient = () => {
    const instance = axios.create();
    instance.interceptors.request.use((axiosConfig) => {
        const token = localStorage.getItem('token');
        if (axiosConfig.headers && token) {
            axiosConfig.headers.Authorization = `Bearer ${token}`;
        }
        axiosConfig.baseURL = config.SERVER_URL;
        return axiosConfig;
    });

    return instance;
};

export default axiosClient();