import React, { Component } from 'react';

class SearchBar extends Component{
  constructor(props){
    super(props);

    // Default values
     this.state = {
      keyword: ''
    };

  }

  onChange = (event) => {

    event.preventDefault();

    const target = event.target;

    // For checkbox type, value is a boolean
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });


  }
  onSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.keyword);

  }
  render(){
    return  <div className = "searchEngine">

              <h3>Search</h3>

              <form onSubmit={this.onSubmit}>
                <div>
                    <div className = "container">
                      <div id = "div1" className="form-group">
                        <label className = "label">
                          Text
                        </label><br/>
                        <input
                          className = "inputClass"
                          type="text"
                          name = "keyword"
                          value = {this.state.keyword}
                          onChange={this.onChange}
                          required
                          />
                      </div>

                  </div>

                  <button type="submit" className="btn btn-primary">SEARCH</button>

                </div>
              </form>

            </div>

    }


}
export default SearchBar;
