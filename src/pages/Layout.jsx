import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import ScrollToTop from '../components/General/ScrollToTop';

const Layout = () => {
  return (
    <div className="flex flex-col w-full min-h-screen bg-(--color-bg)">
        <ScrollToTop />
        <Header />
        <Outlet />
        <Footer />
    </div>
  )
}

export default Layout;