import React, { Component } from 'react';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

require('highcharts/modules/histogram-bellcurve')(Highcharts);
require('highcharts/modules/no-data-to-display.js')(Highcharts);

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      barChart: defaultOptions_bar,
      pieChart: defaultOptions_pie
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
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
      <div>
        <h3>Charts</h3>
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

const source = 'Source: kaggle';
const defaultOptions_bar = {
  chart: {
    type: 'column'
  },
  title: {
    text: 'Bar Chart'
  },
  subtitle: {
    text: ''
  },
  xAxis: {
    visible:false,
    categories: []
  },
  yAxis: {
    visible:false,
    min: 0,
    tickInterval: 1,
    title: {
      text: 'count(person)'
    }
  },
  tooltip: {
    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
    pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
      '<td style="padding:0"><b>{point.y}</b></td></tr>',
    footerFormat: '</table>',
    shared: true,
    useHTML: true
  },
  plotOptions: {
    column: {
      pointPadding: 0,
      borderWidth: 1,
      groupPadding: 0.2,
      shadow: false
    }
  },
  series: [{
    showInLegend: false,
    colorByPoint: true,
    data: []
  }],
  lang: {
        noData: "No Data to Display"
    },
  noData: {
      style: {
          fontWeight: 'bold',
          fontSize: '15px',
          color: '#303030'
      }
  }
}

const defaultOptions_pie = {
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    type: 'pie'
  },
  title: {
    text: 'Pie Chart'
  },
  subtitle: {
    text: ''
  },
  tooltip: {
    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: 'pointer',
      dataLabels: {
        enabled: true,
        format: '<b>{point.name}</b>: {point.percentage:.1f} %'
      }
    }
  },
  series: [{
    colorByPoint: true,
    data: []
  }],
  lang: {
        noData: "No Data to Display"
    },
  noData: {
      style: {
          fontWeight: 'bold',
          fontSize: '15px',
          color: '#303030'
      }
  }
}




export default Chart;
