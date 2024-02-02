import { useEffect, useState } from "react";
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
  const [open, setOpen] = useState(false);
  const [showTime, setShowTime] = useState("Morning Show");
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const userdata = { username, email, number, showTime };

  useEffect(() => {
    if (localStorage.getItem("userdata")) {
      const data = JSON.parse(localStorage.getItem("userdata"));
      setUserName(data.username);
      setEmail(data.email);
      setNumber(data.number);
      setShowTime(data.showTime);
    }
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleContinue = () => {
    localStorage.setItem("userdata", JSON.stringify(userdata));
    handleClose();
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
              <TextField
                required
                id="outlined-disabled"
                label="Name"
                type="name"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
              />
              <TextField
                required
                id="outlined-email-input"
                label="Email"
                type="email"
                value={email}
                autoComplete="current-email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                required
                id="outlined-number"
                label="Contact Number"
                type="contact"
                value={number}
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={(e) => setNumber(e.target.value)}
              />
              <TextField
                id="outlined-select-currency"
                select
                label="Show Time"
                defaultValue={showTime}
                helperText="Please select your show time"
                onChange={(e) => setShowTime(e.target.value)}
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
          <Button onClick={handleContinue}>Continue</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
