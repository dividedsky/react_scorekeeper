import React, { Component } from 'react';
import './App.css';
import AtBatBox from './components/AtBatBox';

class App extends Component {
  render() {
    return (
      <div className="App">
          <AtBatBox strikes={2} balls={2}/>
      </div>
    );
  }
}

export default App;
