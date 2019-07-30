import React, { Component } from 'react';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import * as defaultOptions from '../../constant/chartOptions';
require('highcharts/modules/histogram-bellcurve')(Highcharts);
require('highcharts/modules/no-data-to-display.js')(Highcharts);


const source = defaultOptions.SOURCE;
const defaultOptions_bar = defaultOptions.BAR;
const defaultOptions_pie = defaultOptions.PIE;

/*
Represents chart section containig a bar chart and a pie chart.
*/
class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      barChart: defaultOptions_bar,
      pieChart: defaultOptions_pie
    };
  }

  componentDidUpdate(prevProps) {
    console.log("ttttt");
    if (prevProps !== this.props) {
      console.log("rrrrr");
      const {
        newColumn,
        newCategories,
        newBarChartData,
        newPieChartData
      } = this.parseData(this.props);
      this.setChartData(newColumn, newCategories, newBarChartData, newPieChartData);
    }
  }

  parseData = (props) => {
    var counts = this.countFrequency(props.data);
    return {
      newColumn: props.column,
      newCategories: Object.keys(counts),
      newBarChartData: Object.values(counts),
      newPieChartData: this.parseData_helper(counts)
    };
  }

  parseData_helper = (counts) => {
    var arr = [];
    Object.keys(counts).forEach(function(key) {
      let dataObject = {};
      dataObject = {
        name: key,
        y: counts[key]
      }
      arr.push(dataObject);
    });
    return arr;
  }

  countFrequency = (arr) => {
    var counts = {};
    for (var i = 0; i < arr.length; i++) {
      var data = arr[i];
      counts[data] = counts[data] ? counts[data] + 1 : 1;
    }
    return counts;
  }

  setChartData = (newColumn, newCategories, newBarChartData, newPieChartData) => {
    this.setState({
      barChart: {
        title: {
          text: newColumn
        },
        subtitle: {
          text: source
        },
        xAxis: {
          visible:true,
          categories: newCategories
        },
        yAxis: {
          visible:true,
        },
        series: [{
          name : newColumn,
          data: newBarChartData
        }]
      },
      pieChart: {
        title: {
          text: newColumn
        },
        subtitle: {
          text: source
        },
        series: [{
          name: newColumn,
          data: newPieChartData
        }]
      }
    });
  }

  render(){
    return(
      <div className= 'Section'>
        <h2>Charts</h2>
          <div className = 'chartContainer'>
            <HighchartsReact
              highcharts={Highcharts}
              options = {this.state.barChart}/>
            </div>
          <div className = 'chartContainer'>
            <HighchartsReact
              highcharts={Highcharts}
              options = {this.state.pieChart}/>
            </div>
      </div>
    );
  }

}


export default Chart;
