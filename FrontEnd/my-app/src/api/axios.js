import axios from "axios";
import apiClient from './axios'; // Adjust the path as necessary
// Create an Axios instance
const apiClient = axios.create({
    baseURL: 'http://localhost:81', // Base URL for your API
    timeout: 10000, // Optional: Set a timeout (10 seconds in this case)
    headers: {
        'Content-Type': 'application/json', // Default content type
        // You can add more headers here as needed
    },
});

// Optionally, add interceptors for requests and responses
apiClient.interceptors.request.use(
    (config) => {
        // You can add authorization tokens or other modifications here
        return config;
    },
    (error) => {
        // Handle request error
        return Promise.reject(error);
    }
);

apiClient.interceptors.response.use(
    (response) => {
        // Handle response data
        return response;
    },
    (error) => {
        // Handle response error
        return Promise.reject(error);
    }
);


// Example function to fetch data
const fetchProducts = async () => {
    try {
        const response = await apiClient.get('/api/products');
        console.log('Products:', response.data);
    } catch (error) {
        console.error('Error fetching products:', error);
    }
};

// Call the function to fetch products
fetchProducts();
// Export the configured Axios instance
export default apiClient;


export const baseURL ='http://localhost:80';
