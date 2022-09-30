import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

const URL = 'https://dummyjson.com/posts/'

export const allPosts = createAsyncThunk(
    'getAllPost',
    async (_,{rejectedWithValue}) => {
        try {
            const response = await axios.get(URL);
            console.log(response.data);
            return response.data;
        }catch (e) {
            if (e.response && e.response.data.message){
                return rejectedWithValue(e.response.data.message);
            }else {
                return rejectedWithValue(e.message);
            }
        }


    }
);


export const getPostById = createAsyncThunk(
    'getPost',
    async (id, {rejectedWithValue}) => {
        try {
            const response = await axios.get(URL+id);
            console.log(30, response.data);
            return response.data;
        }catch (e) {
            if (e.response && e.response.data.message){
                return rejectedWithValue(e.response.data.message);
            }else {
                return rejectedWithValue(e.message);
            }
        }
    }
)


export const getCommentsById = createAsyncThunk(
    'postsComments',
    async (id, {rejectedWithValue}) => {
        try {
            const response = await axios.get(URL+id+'/comments');
            return response.data;
        }catch (e) {
            if (e.response && e.response.data.message){
                return rejectedWithValue(e.response.data.message);
            }else {
                return rejectedWithValue(e.message);
            }
        }
    }
)

