import React, { useState } from 'react';
import Header from '../Header/Header';
import Router from '../../router/Router';
import Footer from '../Footer/Footer';

const Layout = () => {
      const [user, setUser]= useState(null);
    return (
        <div>
            <Header user={user}></Header>
            <Router></Router>
            <Footer></Footer>
        </div>
    );
};

export default Layout;