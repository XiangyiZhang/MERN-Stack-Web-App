import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from '../api/';

export const signIn = createAsyncThunk('auth/signIn',
    async (formData, {rejectWithValue}) =>{
        try{
            const res = await api.signIn(formData);
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
        user: JSON.parse(localStorage.getItem('user')),
        token: JSON.parse(localStorage.getItem('token')),
    },
    reducers:{
        logOut:(state) => {
            state.user = null;
            state.token = null;
            window.location.reload(false);
            localStorage.clear();
        },
    },
    extraReducers:{
        [signIn.fulfilled](state, {payload}){
            localStorage.setItem('user', JSON.stringify(payload.user));
            localStorage.setItem('token', JSON.stringify(payload.token));
            window.location.reload(false);
            state.user = payload.user;
            state.token = payload.token;
        },

        [signUp.fulfilled](state, {payload}){
            localStorage.setItem('user', JSON.stringify(payload.user));
            localStorage.setItem('token', JSON.stringify(payload.token));
            window.location.reload(false);
            state.user = payload.user;
            state.token = payload.token;
        }
    }
})

export const { logOut } = authSlice.actions;

export const selectUser = (state) => state.user;
export const selectToken = (state) => state.token;

export default authSlice.reducer;