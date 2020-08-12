import React from 'react';
// eslint-disable-next-line
import logo from './logo.svg';
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Header from './template/Header';
import Main from './template/Main';
import SideNavbar from './template/SideNavbar';
import Footer from './template/Footer';
import HeaderNavbar from './template/HeaderNavbar';


function App() {
  return (
    <div className="app">
      <HeaderNavbar/>
      <Header/>
      <Main/>
      {/* <SideNavbar/> */}
      <Footer/>
    </div>
  );
}

export default App;
