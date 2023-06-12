import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const login = createAsyncThunk(
    'user/login',
    async (user) => {
        const response = await axios.post('http://localhost:3003/v1/api/users/login', user);
        const data = response.data;
        localStorage.setItem('id', JSON.stringify(data.id));
        localStorage.setItem('token', JSON.stringify(data.accessToken));
        localStorage.setItem('rftoken', JSON.stringify(data.refreshToken));
        return data;
    }
)
export const getUser = createAsyncThunk(
    'user/infor',
    async () => {
        let id = localStorage.getItem('id');
        let token = localStorage.getItem('token');
        if (id) {
            const response = await axios.get('http://localhost:3003/v1/api/users/infor/'+id,{
                headers: {"Authorization" : "Bearer " +token}
            })
            return response.user;
        }
        return null;
    }
)

const userSlice = createSlice({
    name: 'user',
    initialState: {
        loading: false,
        id: null,
        error: null
    },
    extraReducers:(builder) => {
        builder.
            addCase(login.pending,(state) => {
                state.loading = true;
                state.id = null;
                state.error = null;
            })
            .addCase(login.fulfilled, (state, action)=>{
                state.loading = false;
                state.id = action.payload.id;
                state.error = null;
            })
            .addCase(login.rejected, (state, action) => {
                state.loading = false;
                state.id = null;
                if (action.error.message) {
                    state.error = action.error.message;
                }
            })
    }
})

export default userSlice;