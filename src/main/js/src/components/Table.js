import React, { Component } from 'react';

import Papa from 'papaparse';

import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import MaterialTable, { MTableToolbar } from 'material-table';

import { default as Dialog } from './UpdateChartsDialog';
import TextField from '@material-ui/core/TextField';

import SearchBar from './SearchBar';
import Alert from './Alert';

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [],
      data: [],
      isLoading: false,
      success:false,
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

  search = (term, rowData) => {
  console.log("search called");
  return term == rowData.name.length;
}
  updateTable = (result) => {
    const{ newColumns, newData } = this.parseData_table(result);
    this.setState({
      columns: newColumns,
      data: newData,


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

  setMsg = ( newSuccess) => {
//const flag= this.state.flag;
  this.setState({success: newSuccess });

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
                         {
                            //this.setMsg("successfully added to the database.");
                            this.addDataToDb(newData).then(success => {
                               if(success){
                                 const data = this.state.data;
                                 data.push(newData);
                                 this.setState({ data }, () => resolve());
                                this.setMsg(true);

                                //window.alert("successfully added to the database.");
                                } else{
                                  reject();
                                  //window.alert("Add error - ID should be unique.");
                                  this.setMsg(false);
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
                            this.setMsg(true);


                           } else{
                             reject();
                             this.setMsg(false);
                           }
                       });
                     }
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
                            this.setMsg(true);
                           } else{
                             reject();
                             this.setMsg(false);
                           }
                       });
                     }
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
            <Dialog columns = {this.state.columns} setSelectedCategoryData = {this.setSelectedCategoryData}/>
          </div>
          <Alert success= {this.state.success}/>
        </div>

      );
    }
}

const style = { padding:'0px' }

export default Table;
