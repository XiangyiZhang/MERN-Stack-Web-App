import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from '../api/';

export const signIn = createAsyncThunk('auth/signIn',
    async (formData, {rejectWithValue}) =>{
        try{
            const res = await api.signIn(formData);
            console.log(res.data);
            return res.data;
        }catch(error){
            return rejectWithValue(error.response.data);
        }
    }
)

export const signUp = createAsyncThunk('auth/signup',
    async (formData) =>{
        try{
            const res = await api.signUp(formData);
            return res.data;
        }catch(error){
            console.log(error);
        }
    }
)

export const authSlice = createSlice({
    name: 'auth',
    initialState:{
        user: null,
        token: null,
    },
    reducers:{},
    extraReducers:{
        [signIn.fulfilled](state, {payload}){
            console.log(payload);
            state.user = payload.user;
            state.token = payload.token;
        },

        [signUp.fulfilled](state, {payload}){
            console.log(payload);
            state.user = payload.user;
            state.token = payload.token;
        }
    }
})

export const selectUser = (state) => state.user;

export default authSlice.reducer;