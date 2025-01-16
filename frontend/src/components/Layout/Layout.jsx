import React from 'react';
import Header from '../Header/Header';
import Router from '../../router/Router';
import Footer from '../Footer/Footer';

const Layout = () => {
    return (
        <div>
            <Header></Header>
            <Router></Router>
            <Footer></Footer>
        </div>
    );
};

export default Layout;