import React, { Component } from 'react';

import Papa from 'papaparse';

import MaterialTable from 'material-table';
import { default as Dialog } from './UpdateChartsDialog';
import "../App.css"


class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [],
      data: [],
      isLoading: false,
    };
  }

  search = () => {

  }

  parseCSV = (event) => {
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
    this.saveAllToDb();
  }


  saveAllToDb = () => {
    fetch(new Request('/db/addAllData', {
        method: 'POST',
        redirect: 'follow',
        headers: new Headers({
          'Content-Type': 'application/json'
        })
      }), {
        credentials: 'include',
        body: JSON.stringify(this.state.data)
      })
      .then(response => console.log)
      .catch(error => console.error)
  }

  addOrUpdateToDb = (data) => {
    fetch(new Request('/db/addOrUpdateData', {
        method: 'POST',
        redirect: 'follow',
        headers: new Headers({
          'Content-Type': 'application/json'
        })
      }), {
        credentials: 'include',
        body: JSON.stringify(data)
      })
      .then(response => console.log)
      .catch(error => console.error)
  }

  deleteFromDb = (data) => {
    fetch(new Request('/db/deleteData', {
        method: 'POST',
        redirect: 'follow',
        headers: new Headers({
          'Content-Type': 'application/json'
        })
      }), {
        credentials: 'include',
        body: JSON.stringify(data)
      })
      .then(response => console.log)
      .catch(error => console.error)
  }


  setSelectedCategoryData = (category) => {
    var newData = [];
    this.state.data.forEach(function(data) {
      newData.push(
        data[category]
      );
    });
    newData.sort(this.compare);
    this.props.setData({
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
            <h2>DB chart generator</h2>
              <div id = "fileUploader">
                <input
                  accept=".csv"
                  type="file"
                  onChange = {this.parseCSV}
                />
              </div>
            <h3>Database Table</h3>
            <MaterialTable
              options = {{
                  showTitle: false,
                  toolbarButtonAlignment: "left",
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
                       const data = this.state.data;
                       data.push(newData);
                       this.addOrUpdateToDb(newData);
                       this.setState({ data }, () => resolve());
                     }
                     resolve()
                   }, 1000)
                 }),
               onRowUpdate: (newData, oldData) =>
                 new Promise((resolve, reject) => {
                   setTimeout(() => {
                     {
                       const data = this.state.data;
                       const index = data.indexOf(oldData);
                       data[index] = newData;
                       this.addOrUpdateToDb(newData);
                       this.setState({ data }, () => resolve());
                     }
                     resolve()
                   }, 1000)
                 }),
               onRowDelete: oldData =>
                 new Promise((resolve, reject) => {
                   setTimeout(() => {
                     {
                       let data = this.state.data;
                       const index = data.indexOf(oldData);
                       data.splice(index, 1);
                       this.deleteFromDb(oldData);
                       this.setState({ data }, () => resolve());
                     }
                     resolve()
                   }, 1000)
                 }),
               }}
             />
          <Dialog columns = {this.state.columns} setSelectedCategoryData = {this.setSelectedCategoryData}/>
        </div>
        );
      }
}

const style = { padding:'0px' }

export default Table;
