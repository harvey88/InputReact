import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import UserInput from './Input/UserInput';
import UserOutput from './Input/UserOutput'

class App extends Component {
  state = {
    username: 'Elijah Bador'
  }

  changeNameHandler = (event) => {
    this.setState ({
      username : event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <p>Input Homework</p>
        <UserInput 
          changeNameHandler={this.changeNameHandler} 
          username={this.state.username} />
        <UserOutput 
          username={this.state.username} 
           />
        <UserOutput />
      </div>
    );
  }
}

export default App;
