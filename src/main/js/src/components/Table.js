import React, { Component } from 'react';
import MaterialTable, { MTableToolbar } from 'material-table';
import Button from '@material-ui/core/Button';
import SearchBar from './SearchBar';
import Papa from 'papaparse';
import { default as Modal } from './Modal';
import { default as Alert } from './Alert';

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
      success:null,
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
    (parsedColumns[0])['editable']='onAdd';

    result.data.forEach(function(data) {
      let newData = {};
      for (var key in data) {
        if (data.hasOwnProperty(key)) {
          newData[key.toLowerCase()] = data[key]
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
        });
        this.setAlert(true);
       } else{
         this.setAlert(false);
       }
       this.setState({
         isLoading: false
       });
    });//.catch(failureCallback);
}

  addAllDataToDb = (data) => {
    return fetch(new Request('/db/addAllData', {
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
    return fetch(new Request('/db/addData', {
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
    return fetch(new Request('/db/updateData', {
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
    return fetch(new Request('/db/deleteData', {
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
                  addRowPosition:'first'
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
                                 const data = this.state.data;
                                 data.push(newData);
                                 this.setState({ data }, () => resolve());
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
                            const data = this.state.data;
                            const index = data.indexOf(oldData);
                            data[index] = newData;
                            this.setState({ data }, () => resolve());
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
                            let data = this.state.data;
                            const index = data.indexOf(oldData);
                            data.splice(index, 1);
                            this.setState({ data }, () => resolve());
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
                                    <div>
                                      <MTableToolbar {...props} />
                                        <SearchBar/>
                                    </div>
                                  )
                }}
             />
            <Modal columns = {this.state.columns} setSelectedCategoryData = {this.setSelectedCategoryData}/>
          </div>
          <Alert success= {this.state.success}/>
        </div>
      );
    }
}

const style = { padding:'0 8px'}


export default Table;
