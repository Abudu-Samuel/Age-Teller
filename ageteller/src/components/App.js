import React, {Component} from 'react';
import { Form, FormControl, Button} from 'react-bootstrap';
import './App.css'
import AgeStatus from './AgeStatus';

class App extends Component {
  constructor() {
    super();

    this.state = {
      newDate: '',
      birthday: '1992-06-21',
      showStatus: false
    }
  }

  handleChange = (event) => {
    this.setState({
      newDate: event.target.value
    })
  }

  handleSubmit = () => {
    this.setState({
      birthday: this.state.newDate,
      showStatus: true
    })
   
  }


  render() {
    return (
      <div className="App">
        <Form inline>
          <h2>Input Your Birthday!</h2>
          <FormControl type="date" onChange={this.handleChange}>
          </FormControl>
          {' '}
          <Button onClick={this.handleSubmit}>
            Submit
          </Button>
          {
            this.state.showStatus ? 
            <div className="fade age-status">
              <AgeStatus date={this.state.birthday} /> 
            </div> :
            <div></div>
          }
        </Form> 
      </div>
    )
  }
}

export default App;