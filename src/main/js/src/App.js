import React, { Component } from 'react';
import 'whatwg-fetch';
import './App.css';
import SearchBar from "./components/SearchBar"
import Chart from "./components/Chart"
import Table from "./components/Table"






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
    console.log("SETDATA APP");
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
