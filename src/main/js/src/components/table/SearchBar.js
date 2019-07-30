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
      value : ''
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
      console.log(this.state.value);
      fetch(`/db/search/?keyword=${this.state.value}`, {
        credentials: 'include',
        method: 'GET'
      })
      .then(function(response) {
        if(!response.ok){
          return false;
        }
        //console.log(response.json());
        return response.json();
      })
      .then((data) => {
          console.log(data);
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
        <div style={{  display: 'inline-flex', marginBottom: 20}}>
          <div style={{ marginBottom:15, marginRight:20}}>
            <TextField
              id="standard-name"
              label="keyword"
              onChange = {this.handleChange}
              value = {this.state.value}
              margin="normal"
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
            <Button variant="outlined" color="inherit" onClick = {this.search}>
              Search
            </Button>
          </div>
        </div>
      );
  }

}

/*
<TextField
       className={classes.margin}
       id="input-with-icon-textfield"
       label="TextField"
       InputProps={{
         startAdornment: (
           <InputAdornment position="start">
             <AccountCircle />
           </InputAdornment>
         ),
       }}
     />
*/

export default SearchBar;
