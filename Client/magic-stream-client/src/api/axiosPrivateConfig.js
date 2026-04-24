import axios from 'axios';

const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:8080';

const axiosPrivate = axios.create({
  baseURL: apiUrl,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

// Add a request interceptor to include the token
// axiosPrivate.interceptors.request.use(
//   (config) => {
//     const userString = localStorage.getItem('user'); 
//     const user = JSON.parse(userString)
//     if (user) {
//       config.headers.Authorization = `Bearer ${user?.token}`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

export default axiosPrivate;