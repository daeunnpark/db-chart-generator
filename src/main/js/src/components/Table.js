import React, { Component } from 'react';
import MaterialTable from 'material-table';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import "../App.css"

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
    ],
    isLoading: false
  };
}


saveToDb = () => {

//this.setState({isLoading : true})
console.log(this.state.isLoading);

fetch(new Request('/demo/addAllData', {
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

console.log(this.state.isLoading);
//this.setState({isLoading:false})

}


addToDb = (data) => {


fetch(new Request('/demo/addOrUpdateData', {
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
  //event.preventDefault();

console.log("called");

fetch(new Request('/demo/deleteData', {
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

  this.saveToDb();

}
    render = () => {
        return (
          <div>
          <h2>Ezops - DB chart generator</h2>
          <div>
            <Input
                id="raised-button-file"
                    id  = "FileUploadBtn"
                    type="file"
                    accept=".csv"
                  onChange = {this.uploadCsvFile}
            />
          </div>

            <h3>Database Table</h3>
            <MaterialTable
               options={{
                  showTitle: false,
                  toolbarButtonAlignment: "left"
                }}
              isLoading={this.state.isLoading}
               columns={this.state.columns}
               data={this.state.data}
               editable={{
                 onRowAdd: newData =>
                   new Promise((resolve, reject) => {
                     setTimeout(() => {
                       {
                         const data = this.state.data;
                         data.push(newData);
                         console.log(newData);
                         this.addToDb(newData);

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
                         this.addToDb(newData);
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
           <button onClick = {this.setData}>UpdateChart</button>
        </div>
        );
        }
}
export default Table;
