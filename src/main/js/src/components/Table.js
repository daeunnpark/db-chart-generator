import React, { Component } from 'react';

import Papa from 'papaparse';

import Button from '@material-ui/core/Button';
import MaterialTable from 'material-table';
import { default as Dialog } from './UpdateChartsDialog';

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [],
      data: [],
      isLoading: false,
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
        cellStyle: style
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
      columns: newColumns,
      data: newData
    });
    this.addAllDataToDb();

  }

  addAllDataToDb = () => {
    var temp = this;
    this.state.data.forEach(function(data) {
      temp.addDataToDb(data);
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
        if(!response.ok){ //response.status ==400
          //window.alert('Something went wrong in the database: ' + response.status);
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
        if(!response.ok){ //response.status ==400
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
        if(!response.ok){ //response.status ==400
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
                  toolbarButtonAlignment: 'left',
                  headerStyle: style,
                  addRowPosition:'first'
              }}
              isLoading = {this.state.isLoading}
              columns = {this.state.columns}
              data=  {this.state.data}
              search = {true}
              editable = {{
                onRowAdd: newData =>
                 new Promise((resolve, reject) => {
                     setTimeout(() => {
                         {
                            this.addDataToDb(newData).then(success => {
                               if(success){
                                 const data = this.state.data;
                                 data.push(newData);
                                 this.setState({ data }, () => resolve());
                                window.alert("successfully added to the database.");
                                } else{
                                  reject();
                                  window.alert("Add error - ID should be unique.");
                                }
                            });
                         }
                     }, 1000);
                 }),
               onRowUpdate: (newData, oldData) =>
                 new Promise((resolve, reject) => {
                   setTimeout(() => {
                     {
                       this.updateDataInDb(newData).then(success => {
                          if(success){
                            const data = this.state.data;
                            const index = data.indexOf(oldData);
                            data[index] = newData;
                            this.setState({ data }, () => resolve());
                            window.alert("successfully updated in the database.");
                           } else{
                             reject();
                             window.alert("update - error");
                           }
                       });
                     }
                     //resolve()
                   }, 1000)
                 }),
               onRowDelete: oldData =>
                 new Promise((resolve, reject) => {
                   setTimeout(() => {
                     {
                       this.deleteDataFromDb(oldData).then(success => {
                          if(success){
                            let data = this.state.data;
                            const index = data.indexOf(oldData);
                            data.splice(index, 1);
                            this.setState({ data }, () => resolve());
                            window.alert("successfully Deleted from  the database.");
                           } else{
                             reject();
                             window.alert("Delete - error.");
                           }
                       });
                     }
                     //resolve()
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
             />
            <Dialog columns = {this.state.columns} setSelectedCategoryData = {this.setSelectedCategoryData}/>
          </div>
        </div>
      );
    }
}

const style = { padding:'0px' }

export default Table;
