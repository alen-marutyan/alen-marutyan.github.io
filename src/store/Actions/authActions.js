import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {useGoogleLogin} from "@react-oauth/google";

export const authLogin = createAsyncThunk(
    'getAllPost',
    async (_,{rejectedWithValue}) => {

        return useGoogleLogin({
            onSuccess: async (response) => {
                try {
                    const {data} = await axios.get("https://www.googleapis.com/oauth2/v3/userinfo", {headers: {"Authorization": `Bearer ${response.accessToken}`}});
                    return data;
                }catch (e) {
                    if (e.response && e.response.data.message){
                        return rejectedWithValue(e.response.data.message);
                    }else {
                        return rejectedWithValue(e.message);
                    }
                }
            }
        })

        // try {
        //     const response = await axios.get(URL);
        //     return response.data;
        // }catch (e) {
        //     if (e.response && e.response.data.message){
        //         return rejectedWithValue(e.response.data.message);
        //     }else {
        //         return rejectedWithValue(e.message);
        //     }
        // }


    }
);
