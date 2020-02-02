import React, { Component, Fragment } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Button, TextField } from '@material-ui/core';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import axios from "axios";


class AddAccountDialogButton extends Component {

  state = {
    open: false,
    accountName: ''
  }

  handleToggle = () => {
    this.setState({ open: !this.state.open })
  }

  handleChange = () => ({ target: { value } }) => {
    this.setState({ accountName: value })
  }

  handleSubmit = () => {
    axios.post('/v1/nos/account/newaccount', { login: this.state.accountName }).then(resp => {
      console.log('OK:', resp);
      this.props.callAccountsRequest();
    }, error => console.log('Error', error));
    
    this.setState({ accountName: ''})
    this.handleToggle();
  }

  render() {
    const { open, accountName } = this.state;

    return (
      <Fragment>
        <Fab color="primary" size="small" aria-label="add" onClick={this.handleToggle}>
          <AddIcon />
        </Fab>


        <Dialog open={open} onClose={this.handleToggle} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Add Account</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Input a name for new account
          </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Account Name"
              value={accountName}
              onChange={this.handleChange('accountName')}
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleToggle} color="primary">
              Cancel
          </Button>
            <Button onClick={this.handleSubmit} color="primary">
              Add
          </Button>
          </DialogActions>
        </Dialog>
      </Fragment>
    )
  }
}

export default AddAccountDialogButton;