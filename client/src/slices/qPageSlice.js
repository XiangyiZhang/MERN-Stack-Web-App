import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as api from '../api/';

export const loadQuestionPage = createAsyncThunk('qPage/loadQuestionPage',
    async (qId) =>{
        const qPage = await api.fetchQuestionAndAns(qId);
        return qPage.data;
    }
)

export const qPageSlice = createSlice({
    name: 'qPage',
    initialState:{
        qPageQuestion:{},
        qPageAnswers: [{}],
    },
    reducers:{},
    extraReducers:{
        [loadQuestionPage.fulfilled](state, { payload }){
            state.qPageQuestion = payload.question;
            state.qPageAnswers = payload.answers;
        }
    }
})

export const selectQuestion = (state) => state.qPageQuestion;
export const selectAnswers = (state) => state.qPageAnswers;

export default qPageSlice.reducer;