import React from 'react';
import Form from 'react-bootstrap/Form';
import './HornForm.css'


class HornForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      howToFilter: '',
      hornsRawData: this.props.data,
    }
  }

  handleChange = (event) => {
    event.preventDefault();
    const numHorns = parseInt(event.target.value);
    
    if (numHorns === 1) {
      let newData = this.state.hornsRawData.filter((value) => value.horns === 1);
      this.props.updatedHornBeast(newData)
    } else if (numHorns === 2) {
      let newData = this.state.hornsRawData.filter((value) => value.horns === 2);
      this.props.updatedHornBeast(newData)
    } else if (numHorns === 3) {
      let newData = this.state.hornsRawData.filter((value) => value.horns === 3);
      this.props.updatedHornBeast(newData)
    } else if (numHorns === 100) {
      let newData = this.state.hornsRawData.filter((value) => value.horns === 100);
      this.props.updatedHornBeast(newData)
    } else {
      this.props.updatedHornBeast(this.state.hornsRawData)
    }
  }

  render() {


    return (
      <>
        <Form id="hornForm">
          <Form.Label id="hornLabel">Filter by number of horns
            <Form.Select name="selected" onChange={this.handleChange}>
              <option value="default">Unfiltered</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="100">100</option>
            </Form.Select>
          </Form.Label>
        </Form>
      </>
    )
  }
}

export default HornForm;
