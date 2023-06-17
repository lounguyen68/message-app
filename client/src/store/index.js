import { configureStore } from '@reduxjs/toolkit';
import authSlice from './auth/authSlice';
import friendsSlice from './friends/friendsSlice';

const store = configureStore({
    reducer: {
        auth: authSlice,
        friends: friendsSlice
    }
})

export default store;