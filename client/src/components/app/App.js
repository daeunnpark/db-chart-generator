import React, { Component } from 'react';
import Chart from "../chart/Chart"
import Table from "../table/Table"
import * as styles from '../../constants/styles';

const app_style = styles.APP;

/**
 * Represents App containing Table component and Chart component
 */
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
        <div style = {app_style}>
          <Table setChartData = {this.setChartData}/>
          <Chart column = {this.state.column} data = {this.state.data}/>
        </div>
      </React.Fragment>
    )
  }
}


export default App;
