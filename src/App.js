import React from 'react';
//import component files that I want to use in App
import Main from './components/Main.js';
import Header from './components/Header';
import Footer from './components/Footer.js';
import SelectedBeast from './components/SelectedBeast.js';
import data from './data.json'
import './App.css';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      // hearts: '',
      isModalDisplaying: false,
      beastTitle: ''
    }
  }

  handleShowModalTitle = (title) => {
    this.setState({
      isModalDisplaying: true,
      beastTitle: title,
    });
  }
  
  handleShowModalDescription = (description) => {
    this.setState({
      isModalDisplaying: true,
      beastDescription: description
    })
  }

  handleShowModalImage = (image_url) => {
    this.setState({
      isModalDisplaying: true,
      beastImage: image_url
    })
  }

  handleCloseModal = () => {
    this.setState({
      isModalDisplaying: false
    });
  }

  render() {
    return (
      <>
        <Header
        />
        <Main
          handleShowModalTitle={this.handleShowModalTitle}
          handleShowModalDescription={this.handleShowModalDescription}
          handleShowModalImage={this.handleShowModalImage}
          data={data}
        />
        <Footer/>
        <SelectedBeast
          isModalDisplaying={this.state.isModalDisplaying}
          beastTitle={this.state.beastTitle}
          beastDescription={this.state.beastDescription}
          beastImage={this.state.beastImage}
          handleCloseModal={this.handleCloseModal}
        />
      </>
    );
  }
};

export default App;
