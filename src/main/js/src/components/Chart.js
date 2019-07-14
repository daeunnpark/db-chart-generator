import React, { Component } from 'react';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'



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

const pie_options =
{
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
      barChart_options : bar_options,
      pieChart_options : pie_options
    };

  }



  setData = () => {
    //console.log("SET DATAAAAA");
    //console.log(this.props);

    this.setState( {
      barChart_options :
      {
          xAxis: {
              categories: [
                this.props.columns[0],
                this.props.columns[1],
                this.props.columns[2]
              ]
          },
          series: [{
              name: this.props.data[0].ID,
              data: [this.props.data[0].col2, this.props.data[0].col3, this.props.data[0].col4]

          }, {
            name: this.props.data[1].ID,
            data: [this.props.data[1].col2, this.props.data[1].col3, this.props.data[1].col4]

          }]
        }
    });

  }


  componentDidMount(){
  //console.log("DID MOUNTTT2222");
  //console.log(this.props);
  }



  render(){
    return(
      <div>
      <HighchartsReact
        highcharts={Highcharts}
        options = {this.state.barChart_options}
      />
      <HighchartsReact
        highcharts={Highcharts}
        options = {this.state.pieChart_options}
      />
      <button onClick = {this.setData}>HHH</button>
      </div>

    );

}
}
export default Chart;



/*
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

      }]*/
