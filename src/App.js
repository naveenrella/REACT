import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.calculate = this.calculate.bind(this);
  }

  subComponent() {
    return (<div>I'm (content) from another sub-component</div>);
  }

  calculate(){
    // let  inputValue = [1,2,3];
    let inputValue = document.getElementById('inputField').value;
    const array = inputValue.split(",");
    let sum = array.reduce(add,0);
    function add(a,b){
      return parseInt(a) + parseInt(b) ;
    }
    alert("value of sum of elements entered : "+sum);
  }

  render() {
    return (
      <div className="App">        
        <header className="App-header">
          <div className="App-header-box">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              content-1 : From main class
              {this.subComponent()}
              <input type="text" id="inputField" placeholder="enter numbers comma separated..." />
            </p>    
            <button className="button-submit" onClick={this.calculate}>Calculate</button>
          </div>   
        </header>                  
      </div>  
      
    );
  }
}
export default App;
