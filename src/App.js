import React from 'react';
//import component files that I want to use in App
import Main from './components/Main.js';
import Header from './components/Header';
import Footer from './components/Footer.js';
import './App.css';


class App extends React.Component {
  render() {
    return (
      <div className="main-container">
        <Header/>
        <Main/>
        <Footer/>
      </div>
    );
  }
};

export default App;
