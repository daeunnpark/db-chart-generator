import React, { Component } from 'react';
import 'whatwg-fetch';
import './App.css';
import Chart from "./components/Chart"
import Table from "./components/Table"


class App extends Component {
  constructor(props) {
    super();
    this.state = {
      column: [],
      data: [],
    };
  }

  setChartData = (newState) => {
    this.setState(newState);
  }

  render = () => {
    return (
      <React.Fragment>
        <div className="App">
          <Table setChartData = {this.setChartData}/>
          <Chart column = {this.state.column} data = {this.state.data}/>
        </div>
      </React.Fragment>
    )
  }
}

export default App;
