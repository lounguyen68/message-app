import { createSlice } from "@reduxjs/toolkit";
import { getFriends } from '../friends/friendsActions'

const initialState = {
    loading: false,
    error: null,
    friends:[],
    friendRequests:[]
}

const friendsSlice = createSlice({
    name: 'friends',
    initialState,
    reducers: {},
    extraReducers: (builder) => 
        builder
            .addCase(getFriends.pending,(state)=>{
                state.loading = true
            })
            .addCase(getFriends.rejected, (state, payload)=>{
                state.loading = false,
                state.error = payload.error
            })
            .addCase(getFriends.fulfilled, (state, action)=>{
                state.loading = false,
                state.friends = action.payload.friends
                state.friendRequests = action.payload.friendRequests
            })
})

export default friendsSlice.reducer