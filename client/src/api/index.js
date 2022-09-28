import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:3001' });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('token')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('token'))}`;
  }
  return req;
});

// Questions api
export const addQuestion = (formData) => API.post('/', formData);
export const fetchAllQuestions = () => API.get('/questions');

// Answers api
export const fetchAllAns = () => API.get('/');

// Auth api
export const signIn = (user) => API.post('/auth/signin', user);
export const signUp = (user) => API.post('auth/signup', user);