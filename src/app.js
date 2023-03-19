import React from "react";
import Post from './components/Post';
import './style/App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import MainGeneral from './pages/MainGeneral'
function App(){
    return (
    /*<div>
        <Post/>
    </div>*/

        <Router>
            <Routes>
                <Route path='/main' element={<MainGeneral/>}/>
                <Route path='/' element={<Post/>}/>
            </Routes>
        </Router>
    );
}

export default App;