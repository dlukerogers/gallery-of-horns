import React from 'react';
import Modal from 'react-bootstrap/Modal';
import './SelectedBeast.css'

class SelectedBeast extends React.Component {
  render() {
    return (
      <Modal
        show={this.props.isModalDisplaying}
        onHide={this.props.handleCloseModal}
        size='lg'
      >
          <Modal.Header closeButton>
            <Modal.Title id="modalTitle">{this.props.beastTitle}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src={this.props.beastImage} alt={this.props.beastDescription} title={this.props.beastTitle} />
            <p id="modalDescription">{this.props.beastDescription}</p>
          </Modal.Body>
      </Modal>
    )
  }
}

export default SelectedBeast
