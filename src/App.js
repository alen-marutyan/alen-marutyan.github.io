import React from 'react';
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import {useSelector} from "react-redux";
import Profile from "./pages/Profile/Profile";
import Post from "./pages/Post/Post";
import NotFound from "./pages/NotFound/NotFound";

const App = ()=> {

    const { userInfo } = useSelector(state => state.auth);

  return (
      <div className='App'>
          <Navbar userInfo={userInfo}/>
          <Routes>
              <Route path='/' element={<Home/>} />
              <Route path={'/posts/:id'} element={<Post/>}/>
              <Route path='/profile' element={<Profile userInfo={userInfo}/>} />
              <Route path={'*'} element={<NotFound/>}/>
          </Routes>
      </div>
  );
}
export default App;
