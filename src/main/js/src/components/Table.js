import React, { Component } from 'react';
import MaterialTable from 'material-table';
import Button from '@material-ui/core/Button';

import Papa from 'papaparse';

// default param in const?
class Table extends Component {
constructor(props) {
  super(props);
  // Default
  this.state = {
    columns: [{
        title: 'ID',
        field: 'id'
      },
      {
        title: 'COL2',
        field: 'col2',
        type: 'numeric'
      },
      {
        title: 'COL3',
        field: 'col3',
        type: 'numeric'
      },
      {
        title: 'COL4',
        field: 'col4',
        type: 'numeric'
      },
    ],

    data: [{
        id: "A",
        col2: 80,
        col3: 30,
        col4: 40
      },
      {
        id: "B",
        col2: 30,
        col3: 20,
        col4: 10
      },
    ]
  };
}



saveToDb = (event) => {
  //event.preventDefault();

/*
  var request = this.state.request.trim();
  if (!request) {
    return;
  }
  */
 /*
 var passengerId =
 var survived =
 */
  fetch(`/demo/add?PassengerId=${request}&Survived=${request}`)
      .then(response => {
        return response.text();
      })
      .then(body => {
        alert(body);
      });


}
// Table To Parent APP
setData = () => {
  console.log("SETDATA From TABLE");

  var NewColumns = [];
  var NewData = [];

  this.state.columns.forEach(function(column) {
    NewColumns.push(
      column.title
    );
  });

  NewData = this.state.data;

  this.props.setData({
    columns: NewColumns,
    data: NewData
  });

}


uploadCsvFile = (event) => {
  event.preventDefault();

  Papa.parse(event.target.files[0], {
    header: true,
    skipEmptyLines: true,
    dynamicTyping: true,
    complete: this.updateTable
  });
}


updateTable = (result) => {

  var NewColumns = [];
  var NewData = [];

  result.meta.fields.forEach(function(field) {
    NewColumns.push({
      title: field.toUpperCase(),
      field: field.toLowerCase()
    });
  });

  result.data.forEach(function(data) {
    let newObject = {};
    for (var key in data) {
      if (data.hasOwnProperty(key)) {
        newObject[key.toLowerCase()] = data[key]
      }
    }
    NewData.push(newObject);
  });

  this.setState({
    columns: NewColumns,
    data: NewData
  });

}


    render = () => {
        return (
          <div>
            <Button
            variant="contained"
            component="label">
            Upload File
            <input
              type="file"
              accept=".csv"
              style={{ display: "none" }}
              onChange = {this.uploadCsvFile}
            />
            </Button>

            <MaterialTable
               title="Table"
               columns={this.state.columns}
               data={this.state.data}
               editable={{
                 onRowAdd: newData =>
                   new Promise((resolve, reject) => {
                     setTimeout(() => {
                       {
                         const data = this.state.data;
                         data.push(newData);
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
                         this.setState({ data }, () => resolve());
                       }
                       resolve()
                     }, 1000)
                   }),
               }}
             />
           <button onClick = {this.saveToDb}>Save to DB</button>
           <button onClick = {this.setData}>UpdateChart</button>
        </div>
        );
        }
}
export default Table;
