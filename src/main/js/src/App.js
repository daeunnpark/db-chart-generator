import React, { Component } from 'react';
import 'whatwg-fetch';
import './App.css';
import SearchBar from "./components/SearchBar"





class App extends Component {
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


  render = () => {
    return (
      <div className="App">

        <div>
          <SearchBar/>
        </div>
      </div>
    )
  }
}

export default App;


/**/
