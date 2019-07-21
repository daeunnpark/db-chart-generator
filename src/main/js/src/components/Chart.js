import React, {
  Component
} from 'react';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'


// Load Highcharts modules
require('highcharts/modules/histogram-bellcurve')(Highcharts);

const bar_options_test2 = {
  chart: {
    type: 'column'
  },
  title: {
    text: 'Monthly Average Rainfall'
  },
  subtitle: {
    text: 'Source: WorldClimate.com'
  },
  xAxis: {
    categories: [
      1,
      2,
    ],
    crosshair: true
  },
  yAxis: {
    min: 0,
    title: {
      text: 'Rainfall (mm)'
    }
  },
  tooltip: {
    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
    pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
      '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
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
/*
    column: {
      pointPadding: 0.2,
      borderWidth: 0
    }
*/
  },
  series: [{
    name: 'Data',
    data: [42,55]

  }]
}


const bar_options_test = {
    title: {
        text: 'Highcharts Histogram'
    },
    xAxis: [{
    title: { text: '' },

    }, {
        title: { text: 'Histogramxxxxx' },
        //tickInterval: 1,

        //alignTicks: false,

    }],

    yAxis: [{
        title: { text: '' },
    }, {
        title: { text: 'Histogramyyy' },
        tickInterval:1,

    }],

    series: [{
        name: 'Histogramssss',
        type: 'histogram',
        xAxis: 1,
        yAxis: 1,
        baseSeries: 's1',
        zIndex: -1,

        //binsNumber: "rice",
    }, {
        showInLegend: false,
        name: 'Data',
        visible:false,
        data: [0,1,1,1,11,2,23,4,1,12] ,
        id: 's1',

    }]
}





const bar_options_test_histo_sample = {
    title: {
        text: 'Highcharts Histogram'
    },
    xAxis: [{
        title: { text: 'Data' },
        tickInterval:1,
        alignTicks: false
    }, {
        title: { text: 'Histogram' },
        alignTicks: false,
        opposite: true
    }],

    yAxis: [{
        title: { text: 'Data' }
    }, {
        title: { text: 'Histogram' },
        opposite: true
    }],

    series: [{
        name: 'Histogram',
        type: 'histogram',
        xAxis: 1,
        yAxis: 1,
        baseSeries: 's1',
        zIndex: -1
    }, {
        name: 'Data',
        visible:false,
        data: [0,0,0,1,1,1],
        id: 's1',

    }]
}

const pie_options_test = {
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    type: 'pie'
  },
  title: {
    text: 'Browser market shares in January, 2018'
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
    name: 'Brands',
    colorByPoint: true,
    data: [{
      name: '0',
      y: 65,
      sliced: true,
      selected: true
    }, {
      name: '1',
      y: 11.84
    }]
  }]
}



const bar_options = {
  chart: {
    type: 'column'
  },
  title: {
    text: 'Monthly Average Rainfall'
  },
  subtitle: {
    text: 'Source: WorldClimate.com'
  },
  xAxis: {
    categories: [
      'Jan',
      'Feb',
      'Mar',

    ],
    crosshair: true
  },
  yAxis: {
    min: 0,
    title: {
      text: 'Rainfall (mm)'
    }
  },
  tooltip: {
    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
    pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
      '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
    footerFormat: '</table>',
    shared: true,
    useHTML: true
  },
  plotOptions: {
    column: {
      pointPadding: 0.2,
      borderWidth: 0
    }
  },
  series: [{
    name: 'Tokyo',
    data: [49.9, 71.5, 106.4]

  }, {
    name: 'New York',
    data: [83.6, 78.8, 98.5]

  }, {
    name: 'London',
    data: [48.9, 38.8, 39.3]

  }, {
    name: 'Berlin',
    data: [42.4, 33.2, 34.5]

  }]
}

const pie_options = {
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    type: 'pie'
  },
  title: {
    text: 'Browser market shares in January, 2018'
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
    name: 'Brands',
    colorByPoint: true,
    data: [{
      name: 'Chrome',
      y: 65,
      sliced: true,
      selected: true
    }, {
      name: 'Internet Explorer',
      y: 11.84
    }, {
      name: 'Firefox',
      y: 10.85
    }, {
      name: 'Edge',
      y: 4.67
    }, {
      name: 'Safari',
      y: 4.18
    }, {
      name: 'Sogou Explorer',
      y: 1.64
    }, {
      name: 'Opera',
      y: 1.6
    }, {
      name: 'QQ',
      y: 1.2
    }, {
      name: 'Other',
      y: 2.61
    }]
  }]
}




class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      barChart_options: bar_options_test2,
      pieChart_options: pie_options_test
    };
  }

  calculate = (arr) => {

  var counts = {};
  var pie_data = [];

  var bar_cate=[];
  var bar_data = [];
  var barChart = [];


  for (var i = 0; i < arr.length; i++) {
    var num = arr[i];
    counts[num] = counts[num] ? counts[num] + 1 : 1;
  }

  Object.keys(counts).forEach(function(key) {
    let newObject = {};
    newObject = {
      name: key,
      y: counts[key]
    }
    pie_data.push(newObject);
  });


  bar_cate = Object.keys(counts);

  let newObject2 = {};
  newObject2 = {
    data: Object.values(counts)
  }
  bar_data = Object.values(counts);


  //return counts;
  return {bar_cate:bar_cate, bar_data:bar_data,pie_data:pie_data};

}

  componentDidMount(){
    var arr = ["a","b", "C"];
    //this.calculate(arr);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {

    if (prevProps !== this.props) {
        const {bar_cate, bar_data, pie_data} = this.calculate(this.props.data);

      console.log(bar_cate);
      console.log(bar_cate.length);
      console.log(bar_data);
      console.log(pie_data);

      this.setState({
        barChart_options: {
          xAxis: {
            categories: bar_cate
          },
          series: [{
            name: 'Data',
            data: bar_data

          }]
        },

        pieChart_options: {
          series: [{
            data: pie_data
          }]
        }
      });

/*
      var newCategories = this.props.columns.slice(1);

      var newChartData_bar = this.chartDataParser_bar(this.props.data);
      var newChartData_pie = this.chartDataParser_pie(newCategories, this.props.data);

      this.(newCategories, newChartData_bar, newChartData_pie);
*/
    }

    if (prevState !== this.state) {
      console.log("State diff");
      console.log(prevState);
      console.log(this.state);
    }

  }



  chartDataParser_bar = (dataList) => {

    var chartData = [];

    dataList.forEach(function(data) {
      var temp = Object.values(data);
      let newObject = {};
      newObject = {
        name: temp[0],
        data: temp.slice(1, -1).map(Number)
      }
      chartData.push(newObject);
    });

    return chartData;

  }


  chartDataParser_pie = (categories, dataList) => {

    var chartData = [];

    categories.forEach(function(category) {
      let newObject = {};
      var sum = 0;

      dataList.forEach(function(data) {
        sum += Number(data[category.toLowerCase()]);
      });

      newObject = {
        name: category,
        y: sum
      }
      chartData.push(newObject);
    });

    return chartData;

  }


  setChartData = (newCategories, newChartData_bar, newChartData_pie) => {

    this.setState({
      barChart_options: {
        xAxis: {
          categories: newCategories
        },
        series: newChartData_bar
      },

      pieChart_options: {
        series: {
          data: newChartData_pie
        }
      }
    });

  }

  render(){
    return(
      <div>
      <h3>Charts</h3>


      <HighchartsReact
        highcharts={Highcharts}
        options = {this.state.barChart_options}
      />
      <HighchartsReact
        highcharts={Highcharts}
        options = {this.state.pieChart_options}
      />

      </div>

    );

}
}
export default Chart;
