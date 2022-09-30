import {createSlice} from '@reduxjs/toolkit'
import {allPosts, getCommentsById, getPostById} from "../Actions/postsActions";

const initialState = {
    loading: false,
    posts: [],
    error: null,
    change: false,
    comments: null,
    post: null
}

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    extraReducers: {
        //Post
        [getPostById.pending]: state => {
            state.loading = true;
            state.error = null
        },
        [getPostById.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.post = payload
        },
        [getPostById.rejected]: (state, { payload }) => {
            state.loading = false;
            state.error = payload
        },
        //All Posts
        [allPosts.pending]: state => {
            state.loading = true;
            state.error = null
        },
        [allPosts.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.posts = payload.posts
        },
        [allPosts.rejected]: (state, { payload }) => {
            state.loading = false;
            state.error = payload
        },

        // comments

        [getCommentsById.pending]: state => {
            state.loading = true;
            state.error = null;
        },
        [getCommentsById.fulfilled]: (state, {payload}) => {
            state.loading = false;
            state.comments = payload;
        },
        [getCommentsById.rejected]: (state, { payload }) => {
            state.loading = false;
            state.error = payload
        },
    }
})


export default postsSlice.reducer
