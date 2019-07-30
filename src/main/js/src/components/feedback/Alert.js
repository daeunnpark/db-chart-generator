import React, { Component } from 'react';

import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import * as messages from '../../constant/messages';
import * as styles from '../../constant/styles';

/*
import ErrorIcon from '@material-ui/icons/Error';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
*/

const message_SUCCESS = messages.SUCCESS;
const message_ERROR = messages.ERROR;

const icons = styles.ICONS;
const icon_styles = styles.ICON_STYLES;
const snackBarContent_styles = styles.SNACKBARCONTENT_STYlES;
const snackBarContent_styles_span = styles.SNACKBARCONTENT_STYlES_SPAN;

/*
Represents database update alert.
*/
class Alert extends Component {
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
      const snackbarContentStyle = snackBarContent_styles[this.state.flag];
      return(
          <SnackbarContent
            style = {snackbarContentStyle}
            message={
              <span id="client-snackbar" style = {snackBarContent_styles_span}>
                <Icon style = {icon_styles}/>
                {this.state.message}
              </span>
            }
            action={[
              <IconButton key="close" aria-label="close" color="inherit" onClick={this.handleClose}>
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
