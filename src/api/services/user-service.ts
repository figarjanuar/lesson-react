import { User } from '@/api/types';
import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/';

const axiosInstance = axios.create({
    baseURL: API_URL,
});

axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response) {
            console.error("API Error:", error.response.status, error.response.data);
            return Promise.reject(error.response.data.message || "Server error");
        } else if (error.request) {
            console.error("No Response:", error.request);
            return Promise.reject("No response from server");
        } else {
            console.error("Request Error:", error.message);
            return Promise.reject("Request error");
        }
    }
);

const userService = {
    login: async (credential: {username: string, password: string}): Promise<User> => {
        try {
            const response = await axiosInstance.post('users', credential);
            return response.data;
        } catch (error: any) {
            throw error;
        }
    }
}

export default userService;