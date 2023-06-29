import { configureStore } from '@reduxjs/toolkit';
import authSlice from './auth/authSlice';
import friendsSlice from './friends/friendsSlice';
import chatsSlice from './chats/chatsSlice';
import searchSlice from './search/searchSlice';

const store = configureStore({
    reducer: {
        auth: authSlice,
        friends: friendsSlice,
        chats: chatsSlice,
        search: searchSlice
    }
})

export default store;