import React, {Component} from 'react';
import { Form, FormControl, Button} from 'react-bootstrap';
import './App.css'

class App extends Component {
  constructor() {
    super();

    this.state = {
      newDate: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      newDate: event.target.value
    })
  }

  handleSubmit = () => {
    console.log(this.state);
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
        </Form>
      </div>
    )
  }
}

export default App;