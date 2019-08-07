import React, { Component } from 'react';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';

import * as messages from '../../constants/messages';
import * as styles from '../../constants/styles';

const message_SUCCESS = messages.SUCCESS;
const message_ERROR = messages.ERROR;
const icons = styles.ICONS;
const icon_style = styles.ICON;
const snackBarContent_style = styles.SNACKBARCONTENT;
const snackBarContent_style_span = styles.SNACKBARCONTENT_SPAN;

/*
Represents database update alert
*/
class DbUpdateAlert extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      vertical: 'top',
      horizontal: 'center',
      message: '',
      success: null,
      flag: 0
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (null !== this.props.success && prevProps !== this.props) {
      const newMessage = this.props.success ? message_SUCCESS : message_ERROR;
      const newFlag = this.props.success ? 0 : 1;
      this.setState({
        message: newMessage,
        open: true,
        flag: newFlag
      });
    }
  }

  messageWrapper(){
      const Icon = icons[this.state.flag];
      const snackbarContentStyle = snackBarContent_style[this.state.flag];
      return(
          <SnackbarContent
            style = {snackbarContentStyle}
            message={
              <span id="client-snackbar" style = {snackBarContent_style_span}>
                <Icon style = {icon_style}/>
                {this.state.message}
              </span>
            }
            action={[
              <IconButton onClick={this.handleClose} key="close" aria-label="close" color="inherit">
                <CloseIcon/>
              </IconButton>
            ]}
          />
      );
  }

  handleClose = () => {
    this.setState({
      open: false
    });
  }

  render = () => {
      return (
        <div>
          <Snackbar
            anchorOrigin={{vertical: this.state.vertical, horizontal: this.state.horizontal}}
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


export default DbUpdateAlert;
