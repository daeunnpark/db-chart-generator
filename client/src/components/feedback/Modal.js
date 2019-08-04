import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import "../../App.css"

/*
Represents the dialog asking to select a category (Update Charts button).
*/
class Modal extends Component{
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      value: ""
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.setState({
        columns: this.props.columns
      })
    }
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value
    });
  }

  handleOpen = () => {
    this.setState({
      open: true
    });
  }

  handleOk = () => {
    this.setState({
      open: false
    });
    this.props.setSelectedCategoryData(this.state.value);
  }

  handleClose = () => {
    this.setState({
      open: false
    });
  }

  render = () => {
      return (
          <div>
            <Button id ='updateChartsBtn' variant="contained" color="secondary" onClick={this.handleOpen} className = 'Btn' disabled = {this.props.disabled}>Update Charts</Button>
            <Dialog disableBackdropClick disableEscapeKeyDown open={this.state.open} onClose={this.handleClose}>
              <DialogTitle>Choose a category to generate charts.</DialogTitle>
              <DialogContent>
                <form>
                <FormControl component="fieldset">
                  <FormLabel component="legend">Category</FormLabel>
                  <RadioGroup
                    aria-label="Category"
                    name="category"
                    value={this.state.value}
                    onChange={this.handleChange}>
                    { this.props.columns.map((column) =>(
                        <FormControlLabel key = {column.field} value={column.field} control={<Radio />} label={column.title} /> ))
                    }
                  </RadioGroup>
                </FormControl>
                </form>
              </DialogContent>
              <DialogActions>
                <Button onClick={this.handleClose} color="primary">
                  Cancel
                </Button>
                <Button onClick={this.handleOk} color="primary">
                  Ok
                </Button>
              </DialogActions>
            </Dialog>
          </div>
        );
      }

}


export default Modal;
