import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from '../api/';

export const loadAns = createAsyncThunk('answers/fetchAllAns', 
    async () =>{
        const allAns = await api.fetchAllAns();
        //console.log(allAns.data);
        return allAns.data;
    }
)
export const answerSlice = createSlice({
    name: 'answer',
    initialState: {
        answers: [{}],
    },
    reducers: {
        saveAns: (state, action) => {
            state.answers = action.payload;
        }
    },

    extraReducers:{
        [loadAns.fulfilled](state, { payload }){
            state.answers = payload;
        }
    }
});

export const { saveAns } = answerSlice.actions;

export const selectAns = (state) => state.answers;

export default answerSlice.reducer;

