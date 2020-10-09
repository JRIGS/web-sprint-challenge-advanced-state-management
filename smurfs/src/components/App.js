import React, { Component } from "react";
import "./App.css";
//importing our components needed
import InputForm from './inputForm';
import SmurfList from './smurfList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS in the house! feat.Redux</h1>
    {/* our created components imported below */}
      <InputForm/>
      <SmurfList/> 

      </div>
    );
  }
}

export default App;
