import React, { Component } from 'react';
import 'whatwg-fetch';
import './App.css';
import SearchBar from "./components/SearchBar"
import Table from "./components/Table"
import Button from '@material-ui/core/Button';


import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'





// default param in const?
class App extends Component {
  state = {
    options :
    {
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
    },
    options2 :
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
  };


  handleChange = (event) => {
    this.setState( {request: event.target.value} )
  }

  handleSubmit = (event) => {
    event.preventDefault();
    var request = this.state.request.trim();
    if (!request) {
      return;
    }
    fetch(`/echo?request=${request}`)
        .then(response => {
          return response.text();
        })
        .then(body => {
          alert(body);
        });
  }


  handleSubmit2 = (event) => {
    event.preventDefault();

    let file = event.target.files[0];
    console.log(file);

      /*
       if (file) {
           let data = new FormData();
           data.append('file', file);
           // axios.post('/files', data)...
         }
         */
  }



  render = () => {
    return (
      <div className="App">

        <div>
          <SearchBar/>

        </div>

        <Button
      variant="contained"
      component="label"
    >
      Upload File
      <input
        type="file"
        accept=".csv"
        style={{ display: "none" }}
        onChange = {this.handleSubmit2}
      />
    </Button>
    <Table/>
    <HighchartsReact
      highcharts={Highcharts}
      options = {this.state.options}
    />
    <HighchartsReact
      highcharts={Highcharts}
      options={this.state.options2}
    />


      </div>
    )
  }
}

export default App;


/**/
