import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">        
        <header className="App-header">
          <div className="App-header-box">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              This is my first set-up...
            </p>        
          </div>   
        </header>                  
      </div>      
    );
  }
}
export default App;
