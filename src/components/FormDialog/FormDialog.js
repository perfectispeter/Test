import React from "react";
import {   Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Button,
    TextField, 
    Checkbox} from "@material-ui/core";

function FormDialog (props) {
    const { buttonText, profileEnabled } = props;
    
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };

    const handleCancel = () => {
      setOpen(false);
    };

    const handleConfirm = () => {
        console.log("confirmed");
        setOpen(false);
      };
    
    
    return (
    <>
        <button className="btn" onClick={handleClickOpen}>
        {buttonText}
      </button>
      <Dialog open={open} onClose={handleCancel} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Edit my Public Profile</DialogTitle>
      <DialogContent>
        <DialogContentText>
          This will change how your public profile appears when users click on your name.
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="contact"
          label="Contact Email"
          type="email"
          fullWidth
        />
        <TextField
          margin="dense"
          id="phone"
          label="Contact Phone Number"
          type="tel"
          fullWidth
        />
        <TextField
          margin="dense"
          id="description"
          label="Description"
          type="text"
          fullWidth
        />
        Make my profile visible to other users:
        <Checkbox
            id="enabled"
            checked={profileEnabled}
        />
      </DialogContent>
      <DialogActions>
        <button className="btn" onClick={handleCancel}>
            Cancel
        </button>
        <button className="btn" onClick={handleConfirm}>
            Confirm
        </button>
      </DialogActions>
    </Dialog>
    </>
    );
  };

export default FormDialog;