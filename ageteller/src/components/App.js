import React, {Component} from 'react';
import { Form, FormControl, Button} from 'react-bootstrap';
import './App.css'
import AgeStatus from './AgeStatus';

class App extends Component {
  constructor() {
    super();

    this.state = {
      newDate: '',
      birthday: '1992-06-21'
    }
  }

  handleChange = (event) => {
    this.setState({
      newDate: event.target.value
    })
  }

  handleSubmit = () => {
    this.setState({
      birthday: this.state.newDate
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
          <AgeStatus date={this.state.birthday} />
        </Form>
      </div>
    )
  }
}

export default App;