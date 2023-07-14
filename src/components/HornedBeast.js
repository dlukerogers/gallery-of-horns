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

  handleModalShowOnClick = () => {
    this.props.handleShowModalTitle(this.props.title);
    this.props.handleShowModalDescription(this.props.description);
    this.props.handleShowModalImage(this.props.image_url);
    this.handleFavorites();
  }


  render () {
    return (
      <Card style={{ width: '100%' }} className="horned-beast p-1 h-100">
        <Card.Img 
          variant="top" 
          src={this.props.image_url} 
          alt={this.props.description} 
          title={this.props.title} 
          onClick={this.handleModalShowOnClick}
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
