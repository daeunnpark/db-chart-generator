import React, { Component } from 'react';

import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/styles';

import * as messages from '../chartSettings/messages';
import ErrorIcon from '@material-ui/icons/Error';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import SnackbarContent from '@material-ui/core/SnackbarContent';

const SUCCESS = messages.SUCCESS;
const ERROR = messages.ERROR;


const icons = [
  CheckCircleIcon, ErrorIcon
];

const iconStyle = {
  marginRight: 10
};

const snackbarContentStyles = [
  {backgroundColor: 'blue', display: 'flex', alignItems: 'center'}, {backgroundColor: 'red' , display: 'flex', alignItems: 'center'}
]

const snackbarContentStyle_span = {
  display: 'flex',
  alignItems: 'center'
};


class Alert extends Component {
  constructor(props) {
  super(props);
  this.state = {
    open: false,
    vertical: 'top',
    horizontal: 'center',
    message: '',
    success: false,
    flag: 0
  };
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {

      const newMessage = this.props.success ? SUCCESS : ERROR;
      const newFlag = this.props.success ? 0 : 1;
      this.setState({
        message: newMessage,
        open: true,
        flag: newFlag
      });
    }
  }

  handleClose = () => {
    this.setState({
      open: false
    });
  }

  messageWrapper(){
      const Icon = icons[this.state.flag];
      const snackbarContentStyle = snackbarContentStyles[this.state.flag];
      return(
          <SnackbarContent
            style = {snackbarContentStyle}
            aria-describedby="client-snackbar"
            message={
              <span id="client-snackbar" style = {snackbarContentStyle_span}>
                <Icon style = {iconStyle}/>
                {this.state.message}
              </span>
            }
            action={[
              <IconButton key="close" aria-label="close" color="inherit" onClick={this.handleClose}>
                <CloseIcon/>
              </IconButton>,
            ]}
          />
      );
  }

  render = () => {
      return (
        <div>
          <Snackbar
            anchorOrigin={{vertical: this.state.vertical, horizontal: this.state.horizontal }}
            open={this.state.open}
            autoHideDuration={3000}
            onClose={this.handleClose}
          >
           {this.messageWrapper()}
          </Snackbar>
        </div>
      );
    }
  }


export default Alert;
