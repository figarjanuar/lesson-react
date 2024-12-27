import axios, { AxiosError } from "axios"
import { Recipe } from "../types"

const API_BASE_URL = 'https://my-json-server.typicode.com/figarjanuar/lesson-react/'

const recipeService = {
    async getAllRecipes(): Promise<Recipe[]> {
        try {
            const response = await axios.get(`${API_BASE_URL}/recipes`)
            return response.data
        } catch (error) {
            if (axios.isAxiosError(error)) {
                // Penanganan error Axios
                const axiosError = error as AxiosError;
                console.error("Error fetching recipes:", axiosError.response?.data || axiosError.message);
                throw axiosError; // Re-throw untuk ditangani di komponen
              } else {
                // Penanganan error non-Axios (misalnya, error jaringan)
                console.error("An unexpected error occurred:", error);
                throw new Error("An unexpected error occurred.");
              }
        }
    },

    async getRecipeById(id: number): Promise<Recipe> {
        try {
            const response = await axios.get(`${API_BASE_URL}/recipes/${id}`)
            return response.data
        } catch (error) {
            if (axios.isAxiosError(error)) {
                // Penanganan error Axios
                const axiosError = error as AxiosError;
                console.error("Error fetching recipes:", axiosError.response?.data || axiosError.message);
                throw axiosError; // Re-throw untuk ditangani di komponen
              } else {
                // Penanganan error non-Axios (misalnya, error jaringan)
                console.error("An unexpected error occurred:", error);
                throw new Error("An unexpected error occurred.");
              }
        }
    }
}

export default recipeService