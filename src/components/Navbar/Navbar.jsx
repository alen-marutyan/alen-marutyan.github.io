import React from 'react';
import './Navbar.css'
import {Link} from "react-router-dom";

const Navbar = ({userInfo}) => {

    return (
        <div className='Navbar'>
            <Link to={'/'}>Home</Link>
            <Link to={(userInfo)? '/profile' : '/'}>Profile</Link>
        </div>
    );
};

export default Navbar;
