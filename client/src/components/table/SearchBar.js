import React, { Component } from 'react';
import Reset from '@material-ui/icons/Close';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import * as styles from '../../constants/styles';

const btn_style = styles.SEARCH_BTN;
const wrapper_style = styles.SEARCHBAR_WRAPPER;
const textField_style = styles.SEARCH_TEXTFIELD;
/*
Represents Search bar in Table component.
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

  handleReset = (event) => {
    this.setState({
      value : ''
    });
    this.props.resetSearchResult();
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value
    });
  }

  render = () => {
      return (
        <div style={wrapper_style}>
          <div style={textField_style}>
            <TextField
              id="standard-name"
              label="keyword"
              onChange = {this.handleChange}
              value = {this.state.value}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Reset onClick = {this.handleReset}/>
                  </InputAdornment>
                ),
              }}
            />
          </div>
          <div style={btn_style}>
            <Button onClick = {this.search} disabled = {this.props.disabled} variant="outlined" color="inherit">
              Search
            </Button>
          </div>
        </div>
      );
  }

}


export default SearchBar;
