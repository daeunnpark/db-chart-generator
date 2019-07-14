import React, { Component } from 'react';
import 'whatwg-fetch';
import './App.css';
import SearchBar from "./components/SearchBar"
import Chart from "./components/Chart"
import Table from "./components/Table"


import Papa from 'papaparse';



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
    this.setState(newState);
  }

    handleChange = (event) => {
      this.setState( {request: event.target.value} )
    }

    handleSubmit = (event) => {
      event.preventDefault();
      //this.setData();
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



    Papa.parse(event.target.files[0], {
          header: true,
          skipEmptyLines: true,
          complete: this.updateTable
        });
      }



  updateTable = (result) => {
    console.log(result);

    console.log(result.meta.fields)

  }



  render = () => {
    return (
      //<div className="App">
  <React.Fragment>

        <SearchBar/>

      <Table setData = {this.setData}/>
      <Chart columns = {this.state.columns} data = {this.state.data}/>


      </React.Fragment>
    )
  }
}

export default App;


/**/
