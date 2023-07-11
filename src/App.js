import React from 'react';
//import component files that I want to use in App
import Main from './Main.js';
import Header from './Header';
import Footer from './Footer.js'


class App extends React.Component {
  render() {
    return (
      <>
        <Header/>
        <Main/>
        <Footer/>
      </>
    );
  }
};

export default App;
