import axios from 'axios';

const url = 'http://localhost:3001/'

// Answers api
export const fetchAllAns = () => axios.get(url);


// Questions api
export const addQuestion = (newQuestion) => axios.post(url, newQuestion);
export const fetchAllQuestions = () => axios.get(url + 'questions');