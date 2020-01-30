import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// component
function Greetings() {
  return <h1>Hello World</h1>;
}

// props
function Greeting(props) {
  return <h1>hello {props.name} - {props.age}</h1>
}

// penggunaan state
class Timer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      time : props.start
    }
  }

  // penggunaan lifecycle
  componentDidMount() {
    this.addInterval = setInterval( () => this.increase(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.addInterval)
  }

  increase() {
    this.setState((state, props) => ({
      time: parseInt(state.time) + 1
    }))
  }

  render() {
    return (
      <div>Waktu : {this.state.time} Detik</div>
    )
  }
}

// penggunaan event
class Toggle extends Component {
  constructor(props) {
    super(props)

    this.state = {
      toggleStatus: true
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState(state => ({
      toggleStatus: !state.toggleStatus
    }))
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.toggleStatus ? 'ON' : 'OFF'}
      </button>
    )
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <Greetings />
        {/* reusable */}
        <Greeting name="World" age="15" />
        <Timer start="0" />
        
        <p><Toggle /></p>
      </header>
    </div>
  );
}

export default App;
