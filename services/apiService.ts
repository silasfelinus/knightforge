import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://api.example.com', // Replace with your API base URL
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default {
  getProjects() {
    return apiClient.get('/projects');
  },
  // Add more methods for other API endpoints
};
