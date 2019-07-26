import React, { Component } from 'react';


import Button from '@material-ui/core/Button';

import TextField from '@material-ui/core/TextField';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value : ''
    };
  }


handleChange = (event) => {
  this.setState({
    value: event.target.value
  });
}


search = (event) => {

    fetch(`/db/search/?keyword=${this.state.value}`, {
      credentials: 'include',
      method: 'get'
    })
    .then(function(response) {
      if(!response.ok){
        return false;
      }
        return true;
    })
    .catch(function(error) {
      window.alert('There has been a problem with your fetch operation: ' + error.message);
    });



}

  render = () => {
      return (
        <div style={{ display: 'inline-flex' }}>
          <div>
            <TextField
              id="standard-name"
              label="keyword"
              onChange = {this.handleChange}
              margin="normal"
            />
          </div>
          <div style={{ alignSelf: 'center' }}>
            <Button variant="outlined" onClick = {this.search}>
              Search
            </Button>
          </div>
        </div>
);
}
}




export default SearchBar;
