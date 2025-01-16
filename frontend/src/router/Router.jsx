import React from 'react';
import {Routes,Route,Navigate} from 'react-router-dom'
import Home from '../pages/Home';
import Tours from '../pages/Tours';
import TourDetails from '../pages/TourDetails';
import Login from '../pages/Login';
import Register from '../pages/Register';

import SearchResult from '../pages/SearchResult';
const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Navigate to='/home/'></Navigate>}></Route>
            <Route path='/home' element={<Home></Home>}></Route>
            <Route path='/tour' element={<Tours></Tours>}></Route>
            <Route path='/tour/:id' element={<TourDetails></TourDetails>}></Route>
            <Route path='/login' element={<Login></Login>}></Route>
            <Route path='/register' element={<Register></Register>}></Route>
            <Route path='/tour/search' element={<SearchResult></SearchResult>}></Route>

        </Routes>
    );
};

export default Router;