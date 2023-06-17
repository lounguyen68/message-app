import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

const backendURL = "http://localhost:3003/v1/api/users"

export const registerUser = createAsyncThunk(
    'auth/register',
    async ({ username, email, urlAvatar, password }, { rejectWithValue }) => {
      try {
        const config = {
          headers: {
            'Content-Type': 'application/json',
          },
        }
        await axios.post(
          `${backendURL}/signup`,
          { email, username, urlAvatar, password },
          config
        )
      } catch (error) {
        if (error.response && error.response.data.message) {
          return rejectWithValue(error.response.data.message)
        } else {
          return rejectWithValue(error.message)
        }
      }
    }
)

export const loginUser = createAsyncThunk(
    'auth/login',
    async ({ username, password }, { rejectWithValue }) => {
      try {
        // configure header's Content-Type as JSON
        const config = {
          headers: {
            'Content-Type': 'application/json',
          },
        }
        const { data } = await axios.post(
          `${backendURL}/login`,
          { username, password },
          config
        )
        // store user's token in local storage
        localStorage.setItem('accessToken', data.userToken.accessToken)
        localStorage.setItem('refreshToken', data.userToken.refreshToken)
        localStorage.setItem('userInfo', JSON.stringify(data.userInfo))
        return data
      } catch (error) {
        // return custom error message from API if any
        if (error.response && error.response.data.message) {
          return rejectWithValue(error.response.data.message)
        } else {
          return rejectWithValue(error.message)
        }
      }
    }
)

export const logoutUser = createAsyncThunk(
  'auth/logout',
    async ({ token }, { rejectWithValue }) => {
      try {
        // configure header's Content-Type as JSON
        const config = {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        }

        await axios.delete(
          `${backendURL}/logout`,
          config
        )
        // remove user's info in local storage
        localStorage.removeItem('accessToken')
        localStorage.removeItem('refreshToken')
        localStorage.removeItem('userInfo')
      } catch (error) {
        // return custom error message from API if any
        if (error.response && error.response.data.message) {
          return rejectWithValue(error.response.data.message)
        } else {
          return rejectWithValue(error.message)
        }
      }
    }
)
