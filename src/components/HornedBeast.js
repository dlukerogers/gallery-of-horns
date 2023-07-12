import React from 'react';
import './HornedBeast.css';
import Card from 'react-bootstrap/Card';


class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state  = {
      favorites: 0
    }
  }

  handleFavorites = () => {
    // increase the number of favorites in the value in state
    this.setState({
      favorites: this.state.favorites + 1
    })
  }


  render () {
    return (
      <Card style={{ width: '18rem' }} className="horned-beast">
        <Card.Img 
          variant="top" 
          src={this.props.image_url} 
          onClick={this.handleFavorites} 
          alt={this.props.description} 
          title={this.props.title} 
        />
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>
            💙 {this.state.favorites}
          </Card.Text>
          <Card.Text>{this.props.description}</Card.Text>
        </Card.Body>
      </Card>
          
    );
  }
}


export default HornedBeast;
