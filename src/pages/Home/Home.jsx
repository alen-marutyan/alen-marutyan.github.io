import React from 'react';
import Login from "../../components/Auth/Login";
import {useSelector} from "react-redux";
import List from "../../components/List/List";

const Home = () => {
    const { userInfo } = useSelector(state => state.auth);

    return (
        <div className='Home'>
            { (userInfo)
                ? <List/>
                : <Login/> }
        </div>
    );
};

export default Home;
