import React, { Component } from 'react';
import 'whatwg-fetch';
import './App.css';
import SearchBar from "./components/SearchBar"
import Chart from "./components/Chart"
import Table from "./components/Table"


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      column: [],
      data: [],
    };
  }

  setData = (newState) => {
    this.setState(newState);
  }

  render = () => {
    return (
      <React.Fragment>
        <div className="App">
          <Table setData = {this.setData}/>
          <Chart column = {this.state.column} data = {this.state.data}/>
        </div>
      </React.Fragment>
    )
  }
}

export default App;


/**/
