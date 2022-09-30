import { configureStore } from '@reduxjs/toolkit'
import authSlice from "./Reducers/authSlice";
import postsSlice from "./Reducers/postsSlice";


export const store = configureStore({
    reducer: {
        auth: authSlice,
        posts: postsSlice
    },
})
