import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Box } from "@mui/material";
import { MenuItem } from "@mui/material";

const showTimings = [
  {
    label: "09:30 am",
    value: "Morning Show",
  },
  {
    label: "12:30 pm",
    value: "Afternoon Show",
  },
  {
    label: "06:30 pm",
    value: "Evening Show",
  },
  {
    label: "09:30 pm",
    value: "Night Show",
  },
];

export default function Formpage({ name }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen}>
        Book Tickets
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Book Show Tickets</DialogTitle>
        <DialogContent>
          <DialogContentText>To Book Show Tickets</DialogContentText>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <div>
              <TextField
                disabled
                id="outlined-required"
                label="Show Name"
                defaultValue={name}
              />
              <TextField required id="outlined-disabled" label="Name" />
              <TextField
                required
                id="outlined-email-input"
                label="Email"
                type="email"
                autoComplete="current-email"
              />
              <TextField
                required
                id="outlined-number"
                label="Number"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                id="outlined-select-currency"
                select
                label="Select"
                defaultValue="EUR"
                helperText="Please select your show time"
              >
                {showTimings.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </div>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Continue</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
