import React from 'react';
//import component files that I want to use in App
import Main from './components/Main.js';
import Header from './components/Header';
import Footer from './components/Footer.js';
import SelectedBeast from './components/SelectedBeast.js';
import data from './data.json'
import './App.css';
import HornForm from './components/HornForm.js';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isModalDisplaying: false,
      beastTitle: '',
      filteredData: data
    }
  }

  updatedHornBeast = (value) => {
    this.setState({
      filteredData: value
    })
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
        <Header/>
        <HornForm
          updatedHornBeast={this.updatedHornBeast}
          data={data}
        />
        <Main
          handleShowModalTitle={this.handleShowModalTitle}
          handleShowModalDescription={this.handleShowModalDescription}
          handleShowModalImage={this.handleShowModalImage}
          data={this.state.filteredData}
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
