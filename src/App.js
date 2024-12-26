import React from 'react';
import './App.css';
import Nav from "./components/Navigation"
import Main from "./components/Main"
import Headers from './components/Header';
import Menu from './components/Menu';
import Footer from './components/Footer';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <>
    <Nav/>
      <Headers/>
      <BrowserRouter>
      <Main/>
      </BrowserRouter>
      <Menu/>
      <Footer/>
    </>
  );
}

export default App;
