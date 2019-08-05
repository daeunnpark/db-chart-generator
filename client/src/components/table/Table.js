import React, { Component } from 'react';
import MaterialTable, { MTableToolbar } from 'material-table';
import Button from '@material-ui/core/Button';
import SearchBar from './SearchBar';
import Papa from 'papaparse';
import { default as Modal } from '../feedback/Modal';
import { default as Alert } from '../feedback/Alert';
import "../app/App.css"

/*
Represents visual representation of actual database.
*/
class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [],
      data: [],
      isLoading: false,
      isLoaded: false,
      success:null,
      dataCopy:[],
      keyword:'',
    };
  }

  parseCsv = (event) => {

    Papa.parse(event.target.files[0], {
      header: true,
      skipEmptyLines: true,
      dynamicTyping: true,
      complete: this.updateTable
    });
  }

  parseData_table = (result) => {

    var parsedColumns = [];
    var parsedData = [];

    result.meta.fields.forEach(function(field) {
      parsedColumns.push({
        title: field.toUpperCase(),
        field: field.toLowerCase(),
        cellStyle: style,
      });
    });
    (parsedColumns[0])['editable']='onAdd'; //readonly

    result.data.forEach(function(data) {
      let newData = {};
      for (var key in data) {
        if (data.hasOwnProperty(key)) {
          newData[key.toLowerCase()] = data[key];
        }
      }
      parsedData.push(newData);
    });
    return {
        newColumns : parsedColumns,
        newData: parsedData
    };
  }

  updateTable = (result) => {

    const{ newColumns, newData } = this.parseData_table(result);

    this.setState({
      isLoading: true
    });

    this.addAllDataToDb(newData).then(success => {
      if(success){
        this.setState({
          columns: newColumns,
          data: newData,
          dataCopy: [...newData]
        });
        this.setAlert(true);
        this.setState({
          //isLoading: false,
          isLoaded: true
        });
       } else{
         this.setAlert(false);
       }
       this.setState({
        isLoading: false,
       });

    });//.catch(failureCallback);
}

  addAllDataToDb = (data) => {
    return fetch(new Request('/db/addAll', {
        method: 'POST',
        redirect: 'follow',
        headers: new Headers({
          'Content-Type': 'application/json'
        })
      }), {
        credentials: 'include',
        body: JSON.stringify(data)
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

  addDataToDb = (data) => {
    return fetch(new Request('/db/add', {
        method: 'POST',
        redirect: 'follow',
        headers: new Headers({
          'Content-Type': 'application/json'
        })
      }), {
        credentials: 'include',
        body: JSON.stringify(data)
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

  updateDataInDb = (data) => {
    return fetch(new Request('/db/update', {
        method: 'PUT',
        redirect: 'follow',
        headers: new Headers({
          'Content-Type': 'application/json'
        })
      }), {
        credentials: 'include',
        body: JSON.stringify(data)
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

  deleteDataFromDb = (data) => {
    return fetch(new Request('/db/delete', {
        method: 'DELETE',
        redirect: 'follow',
        headers: new Headers({
          'Content-Type': 'application/json'
        })
      }), {
        credentials: 'include',
        body: JSON.stringify(data)
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

  setSelectedCategoryData = (category) => {
    var newData = [];
    this.state.data.forEach(function(data) {
      newData.push(
        data[category]
      );
    });
    newData.sort(this.compare);
    this.props.setChartData({
      column: category.toUpperCase(),
      data: newData
    });
  }

  compare(a, b) {
    if (typeof(a) == "number") {
      return a - b;
    } else {
      if (a > b) {
        return 1;
      }
      if (b > a) {
        return -1;
      }
      return 0;
    }
  }

  setAlert = (bool) => {
    this.setState({
      success: bool
    });
    this.setState({
      success: null
    });
  }

  setSearchResult = (newKeyword, newData) => {
    this.setState({
      keyword: newKeyword,
      data: newData,
    });
  }

  resetSearchResult  = () => {
    this.setState({
      data : [...this.state.dataCopy],
      keyword : ''
    });
  }

  render = () => {
      return (
        <div>
          <h1>DB chart generator</h1>
          <div className = 'Section'>
            <input
              id="contained-button-file"
              type="file"
              accept=".csv"
              onChange = {this.parseCsv}
            />
            <label htmlFor="contained-button-file">
              <Button id = 'uploadBtn' variant="contained" color="primary" component="span">
                Upload CSV File
              </Button>
            </label>

            <h2>Database Table</h2>
            <MaterialTable
              options = {{
                  showTitle: false,
                  search : false,
                  toolbarButtonAlignment: 'left',
                  headerStyle: style,
                  addRowPosition:'first',
                  emptyRowsWhenPaging: false
              }}
              isLoading = {this.state.isLoading}
              columns = {this.state.columns}
              data= {this.state.data}
              editable = {{
                onRowAdd: newData =>
                 new Promise((resolve, reject) => {
                     setTimeout(() => {
                            this.addDataToDb(newData).then(success => {
                               if(success){
                                  const ndata = this.state.data;
                                  ndata.push(newData);

                                  const ndataCopy = this.state.dataCopy;
                                  ndataCopy.push(newData);

                                  this.setState({ data:ndata, dataCopy: ndataCopy}, () => resolve());
                                  this.setAlert(true);

                                } else{
                                  reject();
                                  this.setAlert(false);
                                }
                            });
                     }, 1000);
                 }),
               onRowUpdate: (newData, oldData) =>
                 new Promise((resolve, reject) => {
                   setTimeout(() => {
                       this.updateDataInDb(newData).then(success => {
                          if(success){
                            const ndata = this.state.data;
                            const index = ndata.indexOf(oldData);
                            ndata[index] = newData;

                            const ndataCopy = this.state.dataCopy;
                            var index_copy = ndataCopy.findIndex(a=> a.passengerid == oldData["passengerid"]);
                            ndataCopy[index_copy] = newData;

                            this.setState({ data:ndata, dataCopy: ndataCopy}, () => resolve());
                            this.setAlert(true);
                           } else{
                             reject();
                             this.setAlert(false);
                           }
                       });
                   }, 1000)
                 }),
               onRowDelete: oldData =>
                 new Promise((resolve, reject) => {
                   setTimeout(() => {
                       this.deleteDataFromDb(oldData).then(success => {
                            if(success){
                            let ndata = this.state.data;
                            const index = ndata.indexOf(oldData);
                            ndata.splice(index, 1);

                            let ndataCopy = this.state.dataCopy;
                            var index_copy = ndataCopy.findIndex(a=> a.passengerid == oldData["passengerid"]);
                            ndataCopy.splice(index_copy,1);

                            this.setState({ data:ndata, dataCopy: ndataCopy}, () => resolve());
                            this.setAlert(true);
                           } else{
                             reject();
                            this.setAlert(false);
                           }
                       });
                   }, 1000)
                 }),
               }}
               localization={{
                    header: {
                        actions: ''
                    },
                    body: {
                        emptyDataSourceMessage: 'No Data to Display',
                    }
                }}
                components={{
                        Toolbar: props => (
                                    <div style={{ display: 'flex', padding:'10px 0'}}>
                                        <div>
                                          <MTableToolbar {...props}  classes={{ root: "my-temp-class" }} />
                                        </div>
                                        <div style = {{  borderRadius: '5px', margin: 'auto'}}>
                                          <SearchBar keyword = {this.state.keyword} setSearchResult = {this.setSearchResult.bind(this)} resetSearchResult = {this.resetSearchResult.bind(this)} disabled = {!this.state.isLoaded} />
                                        </div>
                                    </div>
                                  ),

                }}
             />
            <Modal columns = {this.state.columns} setSelectedCategoryData = {this.setSelectedCategoryData} disabled = {!this.state.isLoaded}/>
          </div>
          <Alert success= {this.state.success}/>
        </div>
      );
    }
}

const style = { padding:'0 8px'}


export default Table;
