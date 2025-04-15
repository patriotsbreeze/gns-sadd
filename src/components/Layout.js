import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import '../styles/Layout.css';
import logo from '../assets/sadd_logo.png';


function Layout() {
  return (
    <div className="layout">
      
      <title>GNS SADD</title> 
      

      
      <meta name="description" content="GNS SADD is a club dedicated to promoting safe driving habits and creating awareness campaigns." />
      <meta name="keywords" content="GNS SADD, safe driving, awareness, community outreach" />
      <meta name="author" content="GNS SADD" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="og:title" content="GNS SADD" />
      <Navbar />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
