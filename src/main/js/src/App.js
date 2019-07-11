import React, { Component } from 'react';
import 'whatwg-fetch';
import './App.css';
import SearchBar from "./components/SearchBar"
import Chart from "./components/Chart"
import Table from "./components/Table"
import Button from '@material-ui/core/Button';


import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'


class App extends Component {
  constructor(props){
      super(props);

      this.state = {
        columns : [
        ],
        data: [
        ],
      };
}

  setData = (newState) => {
    // Table value to App value
    this.setState(newState);
  }

    handleChange = (event) => {
      this.setState( {request: event.target.value} )
    }

    handleSubmit = (event) => {
      event.preventDefault();
      this.setData();
      /*
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
          */
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
        component="label">
        Upload File
        <input
          type="file"
          accept=".csv"
          style={{ display: "none" }}
          onChange = {this.handleSubmit}
        />
      </Button>
      <Table setData = {this.setData}/>
      <Chart columns = {this.state.columns} data = {this.state.data}/>


      </div>
    )
  }
}

export default App;


/**/
