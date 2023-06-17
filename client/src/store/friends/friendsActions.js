import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

const backendURL = "http://localhost:3003/v1/api/users"

export const getFriends = createAsyncThunk(
    'friends/friendslist',
    async ({token} , {rejectWithValue }) => {
        try {
            const config = {
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            }
            const response = await axios.get(`${backendURL}/friends`, config)
            const friends = response.data
            const response2 = await axios.get(`${backendURL}/requests`, config)
            const friendRequests = response2.data
            return {friends, friendRequests}
        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
              } else {
                return rejectWithValue(error.message)
              }
        }
    }
)