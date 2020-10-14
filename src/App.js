import React from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Features from './components/Features/Features'
import Details from './components/Details/Details'
import Calendar from './components/Calendar/Calendar'


import './style.css';


function App() {
  return (
    <>
      <Header />
      <Main />
      <Features/>
      <Details/>
      <Calendar/>
      <Footer/>
    </>
  );
}

export default App;
