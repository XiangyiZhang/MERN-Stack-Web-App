import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from '../api/';

export const loadQuestions = createAsyncThunk('questions/fetchAllQuestions',
    async () =>{
        const allQues = await api.fetchAllQuestions();
        return allQues.data;
    }
)

export const addQuestion = createAsyncThunk('questions/addQuestion',
    async (question) =>{
        const res = await api.addQuestion(question);
        return res.data;
    }
)

export const questionSlice = createSlice({
    name: 'question',
    initialState: {
        questions: [{}],
    },
    reducers:{

    },

    extraReducers:{
        [addQuestion.fulfilled](state, { payload }){
            state.questions = [...state.questions, payload];
        },
        [loadQuestions.fulfilled](state, { payload }){
            state.questions = payload;
        }
    }
})

export const selectQuestions = (state) => state.questions;

export default questionSlice.reducer;
