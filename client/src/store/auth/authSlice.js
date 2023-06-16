import { createSlice } from '@reduxjs/toolkit'
import { registerUser, loginUser, logoutUser } from './authActions'

const userInfo = localStorage.getItem('userInfo') 
  ? JSON.parse(localStorage.getItem('userInfo'))
  : {}

const userToken = localStorage.getItem('accessToken')
  ? localStorage.getItem('accessToken')
  : null

const initialState = {
  loading: false,
  userInfo: userInfo, 
  userToken: userToken,
  error: null,
  success: false,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: {
    // register user
    [registerUser.pending]: (state) => {
      state.loading = true
      state.error = null
    },
    [registerUser.fulfilled]: (state) => {
      state.loading = false
      state.success = true // registration successful
    },
    [registerUser.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload
    },

    // login user
    [loginUser.pending]: (state) => {
      state.loading = true
      state.error = null
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.userInfo = payload.userInfo
      state.userToken = payload.userToken.accessToken
    },
    [loginUser.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload
    },
    //Logout user
    [logoutUser.pending]: (state) => {
      state.loading = true
    },
    [logoutUser.rejected]: (state) => {
      state.loading = false
    },
    [logoutUser.fulfilled]: (state) => {
      state.loading = false
      state.userInfo = {},
      state.userToken = null
    },
  },
})

export default authSlice.reducer