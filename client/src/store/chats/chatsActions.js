import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

const backendURL = "http://localhost:3003/v1/api/chats"

export const getChats = createAsyncThunk(
    'chats/chatslist',
    async({token}, { rejectWithValue }) => {
        try {
            const config = {
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            }

            const response = await axios.get(`${backendURL}`, config)
            const chats = response.data
            return chats
        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
              } else {
                return rejectWithValue(error.message)
              }
        }
    }
)