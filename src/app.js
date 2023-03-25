import React from "react";
import Post from './components/Post';
import './style/App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import MainGeneral from './pages/MainGeneral/MainGeneral';
import Login from './pages/Login';
function App(){
    return (

        <Router>
            <Routes>
                <Route path='/main' element={<MainGeneral/>}/>
                <Route path='/main1' element={<Login/>}/>
                <Route path='/' element={<Post/>}/>
            </Routes>
        </Router>
    );
}

export default App;