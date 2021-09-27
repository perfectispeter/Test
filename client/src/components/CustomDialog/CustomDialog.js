import React, { Component } from "react";
import { Dialog } from "@material-ui/core/Dialog";
import { DialogTitle } from "@material-ui/core/DialogTitle";
import { DialogContent } from "@material-ui/core/DialogContent";
import { DialogContentText } from "@material-ui/core/DialogContentText";
import { DialogActions } from "@material-ui/core/DialogActions";
import { Button } from "@material-ui/core";

class Customdialog extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  submitData = () => {
    this.props.close();
  };

  cancelClick = () => {
    this.props.close("");
  };

  closeDialog = (e, reason) => {
    if (reason !== "backdropClick") {
      this.props.close();
    }
  };

  render() {
    return (
      <Dialog
        maxWidth="md"
        fullWidth
        open={this.props.open}
        onClose={this.closeDialog}
        disableEscapeKeyDown={true}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">{this.props.title}</DialogTitle>
        <DialogContent>
          <DialogContentText>{this.props.content}</DialogContentText>
          {this.props.children}
        </DialogContent>
        <DialogActions>
          <Button onClick={this.cancelClick} color="primary">
            Cancel
          </Button>
          <Button onClick={this.submitData.bind(this)} color="primary">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default Customdialog;
