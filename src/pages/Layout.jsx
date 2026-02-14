import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { Outlet } from 'react-router-dom';
import ScrollToTop from '../components/General/ScrollToTop';

const Layout = () => {
  return (
    <div className="App flex flex-col w-full h-screen">
        <ScrollToTop />
        <Header />
        <Outlet />
        <Footer />
    </div>
  )
}

export default Layout;