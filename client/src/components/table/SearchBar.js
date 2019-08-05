import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Reset from '@material-ui/icons/Close';
import InputAdornment from '@material-ui/core/InputAdornment';

/*
Represent search bar in the database.
*/
class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value : '',
      disabled: false
    };
  }

  componentDidMount() {

      this.setState({
        value: this.props.keyword
      });

  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value
    });
  }

  search = (event) => {
      fetch(`/db/search/?keyword=${this.state.value}`, {
        credentials: 'include',
        method: 'GET'
      })
      .then(function(response) {
        if(!response.ok){
          return false;
        }
        return response.json();
      })
      .then((data) => {
          this.props.setSearchResult(this.state.value, data);
          return data;
      })
      .catch(function(error) {
        window.alert('There has been a problem with your fetch operation: ' + error.message);
      });

  }

  iconClick  = (event) => {
    this.setState({
      value : ''
    });
    this.props.resetSearchResult();
  }

  render = () => {
      return (
        <div style={{  display: 'inline-flex', margin:15}}>
          <div style={{marginRight:20, marginBottom:10}}>
            <TextField
              id="standard-name"
              label="keyword"
              onChange = {this.handleChange}
              value = {this.state.value}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Reset onClick = {this.iconClick}/>
                  </InputAdornment>
                ),
              }}
            />
          </div>
          <div style={{ alignSelf: 'center'}}>
            <Button variant="outlined" color="inherit" onClick = {this.search} disabled = {this.props.disabled}>
              Search
            </Button>
          </div>
        </div>
      );
  }

}

export default SearchBar;
