import React from 'react';
import HornedBeast from './HornedBeast.js'

class Main extends React.Component {
  render () {
    return (
      <main>
        <HornedBeast title = 'Bighorn Sheep' imageUrl = 'horned-ram.jpeg' description = 'A bighorn sheep has curly giant horns that are protruding from its head.'/>
        <HornedBeast title = 'Rhino' imageUrl = 'horned-rhino.jpeg' description = 'A rhino has horns that are on its nose.'/>
        <HornedBeast title = 'Longhorn Bull' imageUrl = 'long-horn.jpeg' description = 'A big longhorn bull has huge horns that end in sharp points.'/>
      </main>
    );
  }
}

export default Main;
