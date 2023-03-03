import axios from 'axios';

// Create an instance of axios
const api = axios.create({
  baseURL: 'http://34.170.144.67:1001/api/',
  // withCredentials: true,
});

export default api;
