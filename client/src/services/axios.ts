import axios from "axios";

const API = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
});

export const getMessage = async () => {
    try {
        const response = await API.get('/api/message', {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response;
    } catch (error) {
        console.error(`Error: ${error}`);
        throw error;
    }
};

export const fetchAllMessage = async () => {
    try {
        const response = await API.get('/api/messages', {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response;
    } catch (error) {
        console.error(`Error: ${error}`);
        throw error;
    }
};