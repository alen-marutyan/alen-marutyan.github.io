import React from 'react';
import {useDispatch} from "react-redux";
import {userLogOut} from "../../store/Reducers/authSlice";
import {useNavigate} from "react-router-dom";

const Profile = ({userInfo}) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logOutHandle = () => {
      dispatch(userLogOut());
      navigate('/')
    }

    return (
        <div>
            <img src={userInfo.picture} alt="userImage" />
            <h3>User Logged in</h3>
            <p>Name: {userInfo.name}</p>
            <p>Email Address: {userInfo.email}</p>
            <br />
            <br />
            <button onClick={logOutHandle}>Log Out</button>
        </div>
    );
};

export default Profile;
