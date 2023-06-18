import { configureStore } from '@reduxjs/toolkit';
import authSlice from './auth/authSlice';
import friendsSlice from './friends/friendsSlice';
import chatsSlice from './chats/chatsSlice';

const store = configureStore({
    reducer: {
        auth: authSlice,
        friends: friendsSlice,
        chats: chatsSlice
    }
})

export default store;