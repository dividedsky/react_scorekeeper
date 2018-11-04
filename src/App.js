import React, { Component } from 'react';
import './App.css';
import AtBatBox from './components/AtBatBox';

class App extends Component {
  constructor() {
    super();
    this.state = {
      outs: 0,
    }
  }

  addOut = () => {
    console.log('out!');
    this.setState((prevState) => {
      return { outs: prevState.outs + 1 }
    });
  }

  render() {
    return (
      <div className="App">
          <AtBatBox addOut={this.addOut}/>
      </div>
    );
  }
}

export default App;
