import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
    this.updateDisplay = this.updateDisplay.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  

  componentDidMount() {
    window.addEventListener('message', this.updateDisplay);
  }

  updateDisplay(event) {
    if(event.data !== null) {
      console.log(event.data.val)
      this.value = event.data.val
    } else {
      this.value = 0
    }
    this.handleCount(this.value)
  }

  handleCount(value) {
    this.setState({ count: value });
  }

  render() {
    return (
      <div className="App">
        <h4> Display </h4>
          <table>
              <tbody>
                  <tr><td>{this.state.count}</td></tr>
              </tbody>
          </table>
      </div>
    );
  }
}

export default App;
