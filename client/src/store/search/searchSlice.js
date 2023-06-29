import { createSlice } from "@reduxjs/toolkit";
import { searchUsers } from "./searchActions";
const initialState = {
    loading: false,
    error: null,
    users: []
}

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {},
    extraReducers: (builder) => 
        builder
            .addCase(searchUsers.pending, (state) => {
                state.loading = true;
            })
            .addCase(searchUsers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload.error
            })
            .addCase(searchUsers.fulfilled, (state, action) => {
                state.loading = false;
                state.users = action.payload.users
            })
})

export default searchSlice.reducer;