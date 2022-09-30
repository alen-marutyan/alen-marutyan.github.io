import React from 'react';
import './Login.css'
import {useDispatch, useSelector} from "react-redux";
import {GoogleLogin, useGoogleLogin} from '@react-oauth/google';
import axios from "axios";
import {userLoginFailure, userLoginSuccess} from "../../store/Reducers/authSlice";
import {allPosts} from "../../store/Actions/postsActions";
import {BsGoogle} from "react-icons/bs";


const Login = () => {
    const { error } = useSelector(state => state.auth);
    const dispatch = useDispatch();


    const login = useGoogleLogin({
        onSuccess: async (response) => {
            try {
                console.log(response)
                const res = await axios.get("https://www.googleapis.com/oauth2/v3/userinfo", {
                    headers: {
                        "Authorization": `Bearer ${response.access_token}`
                    }
                })
                dispatch(userLoginSuccess(res.data));
            } catch (err) {
                dispatch(userLoginFailure(err.message))
            }

        }
    });

    return (
            <div className="container">

                <form>
                    <div className="row">

                        <h2 style={{textAlign: "center"}}>Login with Google or Manually</h2>
                        {
                            (error === 'popup_closed_by_user') ? <h2 style={{color: 'red', textAlign: "center"}}>Failed to Login</h2> : <></>
                        }
                        <div className="vl">
                            <span className="vl-inner-text">or</span>
                        </div>

                        <div className="col googleDiv">
                            <GoogleLogin
                                onSuccess={credentialResponse => {
                                    console.log(credentialResponse)
                                }}
                                onError={() => {
                                    console.log('Login Failed');
                                }}/>
                            <button className={'googleDivBtn'} onClick={(event)=>{
                                event.preventDefault();
                                login();
                                dispatch(allPosts());
                            }}>
                               <BsGoogle/> <p>Google Login</p>
                            </button>
                        </div>

                        <div className="col">
                            <input type="text" name="username" placeholder="Username" required/>
                            <input type="password" name="password" placeholder="Password" required/>
                            <input type="submit" value="Login"/>
                        </div>

                    </div>
                </form>
            </div>
    );
};

export default Login;
