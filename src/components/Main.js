import React from 'react';
import HornedBeast from './HornedBeast.js'
import data from './data.json'
// import CardColumns from 'react-bootstrap/CardColumns'
import './Main.css'

class Main extends React.Component {
  render () {

    let hornedBeasts = [];
    // iterate over the data array and create a HornedBeast component for each item in the array
    // each item in my data array I'm calling "beast" as I iterate over the data
    data.forEach((beast, idx) => {
      // create an instance of my HornedBeast component out of each beast and then I'm going to push it onto the hornedBeast array
      hornedBeasts.push(
        <HornedBeast
          title={beast.title}
          image_url={beast.image_url}
          description={beast.description}
          key={idx}
        />
      )
    })


    return (
      <main>
        {hornedBeasts}
      </main>
    );
  }
}

export default Main;
