import React, { Component } from 'react';
import List from './List'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      todoItem: '',
      items: []
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    if (this.state.todoItem !== "") {
      this.setState({
        items: [...this.state.items, this.state.todoItem],
        todoItem: ''
      })
    }
  }

  handleChange = (event) => {
    this.setState({
      todoItem: event.target.value
    })
  }

  handleClear = (event) => {
    this.setState({
      items: []
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.todoItem} onChange={this.handleChange}/>
          &nbsp;
          <button>Add</button>
          &nbsp;
          <button onClick={this.handleClear}>Clear</button>
        </form>

        <List items={this.state.items} />
      </div>
    )
  }
}

export default App;
