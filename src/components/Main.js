import React from 'react';
import HornedBeast from './HornedBeast.js'
import './Main.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class Main extends React.Component {
  render () {

    // iterate over the data array and create a HornedBeast component for each item in the array
    // each item in my data array I'm calling "beast" as I iterate over the data
    let hornedBeasts = this.props.data.map((beast, idx) => {
      // create an instance of my HornedBeast component out of each beast and then I'm going to push it onto the hornedBeast array
      return (
        <Col key={idx} className="mt-4">
          <HornedBeast
            title={beast.title}
            image_url={beast.image_url}
            description={beast.description}
            key={idx}
            handleShowModalTitle={this.props.handleShowModalTitle}
            handleShowModalDescription={this.props.handleShowModalDescription}
            handleShowModalImage={this.props.handleShowModalImage}
          />
        </Col>
      )
    })


    return (
      <main>
        <Row xs={1} sm={2} md={3} lg={4}>
          {hornedBeasts}
        </Row>
      </main>
    );
  }
}

export default Main;
