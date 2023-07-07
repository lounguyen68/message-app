import { createSlice } from "@reduxjs/toolkit";
import { getChats, getMessages, postMessage } from './chatsActions'

const initialState = {
    loading: false,
    error: null,
    chats: [],
    messages: []
}

const chatsSlice = createSlice({
    name: 'chats',
    initialState,
    reducers: {},
    extraReducers: (builder) => 
        builder
        .addCase(getChats.pending,(state)=>{
            state.loading = true;
        })
        .addCase(getChats.rejected,(state, action)=>{
            state.loading = false;
            state.error = action.error
        })
        .addCase(getChats.fulfilled,(state, action)=>{
            state.loading = false;
            state.chats = action.payload;
        })
        .addCase(getMessages.pending,(state)=>{
            state.loading = true;
        })
        .addCase(getMessages.rejected,(state, action)=>{
            state.loading = false;
            state.error = action.error
        })
        .addCase(getMessages.fulfilled,(state, action)=>{
            state.loading = false;
            state.messages = action.payload.reverse();
        })
        .addCase(postMessage.fulfilled,(state, action)=>{
            state.messages = [action.payload ,...state.messages]
        })
        .addCase(postMessage.rejected,(state, action)=>{
            state.error = action.error;
        })
        .addCase(postMessage.pending,(state, action)=>{
            state.loading = false;
        })
})

export default chatsSlice.reducer;