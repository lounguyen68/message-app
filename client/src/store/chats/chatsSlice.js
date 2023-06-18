import { createSlice } from "@reduxjs/toolkit";

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
    extraReducers: {}
})

export default chatsSlice.reducer;