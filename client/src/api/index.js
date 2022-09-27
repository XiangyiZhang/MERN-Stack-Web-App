import axios from 'axios';

const url = 'http://localhost:3001/'

// Answers api
export const fetchAllAns = () => axios.get(url);


// Questions api
export const addQuestion = (newQuestion) => axios.post(url, newQuestion);
export const fetchAllQuestions = () => axios.get(url + 'questions');

// Auth api
export const signIn = (user) => axios.post(url + 'auth/signin', user);
export const signUp = (user) => axios.post(url + 'auth/signup', user);