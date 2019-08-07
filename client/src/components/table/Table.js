import React, { Component } from 'react';
import Papa from 'papaparse';
import Button from '@material-ui/core/Button';
import { TablePagination } from '@material-ui/core';
import MaterialTable, { MTableToolbar } from 'material-table';
import SelectCategoryModal from '../dialog/SelectCategoryModal';
import DbUpdateAlert from '../dialog/DbUpdateAlert';
import SearchBar from './SearchBar';
import * as styles from '../../constants/styles';

const toolbar_style = styles.TOOLBAR;
const table_style = styles.TABLE;
const container_style = styles.SEARCHBAR_CONTAINER;
const section_style = styles.SECTION;
const input_style = styles.INPUT;

/*
 Represents database
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

    if(event.target.files[0]!==undefined){
      Papa.parse(event.target.files[0], {
        header: true,
        skipEmptyLines: true,
        dynamicTyping: true,
        complete: this.updateTable
      });
    }
  }

  parseData_table = (result) => {

    var parsedColumns = [];
    var parsedData = [];

    result.meta.fields.forEach(function(field) {
      parsedColumns.push({
        title: field.toUpperCase(),
        field: field.toLowerCase(),
        cellStyle: table_style,
      });
    });
    (parsedColumns[0])['editable']='onAdd';

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
          dataCopy: [...newData],
          isLoaded: true
        });
        this.setAlert(true);
       } else {
         this.setAlert(false);
       }
       this.setState({
        isLoading: false,
       });

    });
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
        window.alert('There has been a problem with your network: ' + error.message);
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
        window.alert('There has been a problem with your network: ' + error.message);
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
        window.alert('There has been a problem with your network: ' + error.message);
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
        window.alert('There has been a problem with your network: ' + error.message);
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
          <div style = {section_style}>
            <input
              id="contained-button-file"
              type="file"
              accept=".csv"
              onChange = {this.parseCsv}
              style = {input_style}
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
                  headerStyle: table_style,
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
                        } else {
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
                          var index_copy = ndataCopy.findIndex(a=> a.passengerid === oldData["passengerid"]);
                          ndataCopy[index_copy] = newData;

                          this.setState({ data:ndata, dataCopy: ndataCopy}, () => resolve());
                          this.setAlert(true);
                         } else {
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
                        var index_copy = ndataCopy.findIndex(a=> a.passengerid === oldData["passengerid"]);
                        ndataCopy.splice(index_copy,1);

                        this.setState({ data:ndata, dataCopy: ndataCopy}, () => resolve());
                        this.setAlert(true);
                        } else{
                         reject();
                        this.setAlert(false);
                        }
                      });
                    }, 1000)
                  })
              }}
              components={{
                Toolbar: props => (
                 <div style={toolbar_style}>
                     <div>
                       <MTableToolbar {...props} />
                     </div>
                     <div style = {container_style}>
                       <SearchBar
                         keyword = {this.state.keyword}
                         setSearchResult = {this.setSearchResult.bind(this)}
                         resetSearchResult = {this.resetSearchResult.bind(this)}
                         disabled = {!this.state.isLoaded} />
                     </div>
                 </div>
                ),
                Pagination: props =>(
                  <TablePagination {...props}/>
                )
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
           <SelectCategoryModal
             columns = {this.state.columns}
             disabled = {!this.state.isLoaded}
             setSelectedCategoryData = {this.setSelectedCategoryData}/>
          </div>
          <DbUpdateAlert success= {this.state.success}/>
        </div>
      );
    }
}


export default Table;
