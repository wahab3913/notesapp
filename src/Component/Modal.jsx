import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import * as React from "react";

export const inputStyle = {
  background: "#504982",
  height: "40px",
  border: "3px solid rgba(82, 89, 96, 0.26)",
  borderRadius: "18px",
  outline: "none",
  paddingLeft: "16px",
  paddingRight: "16px",
  fontSize: "17px",
  fontFamily: "Open Sans",
  fontWight: 400,
  width: "60%",
  color: "#fff",
  flexBasis: "100%",
  paddingTop: "10px",
  paddingBottom: "10px",
};
const Modal = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{
          "& .MuiDialog-paper": {
            background: "#0D1117",
            border: "1px solid gray",
            width: "100%",
          },
        }}
      >
        <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <Box>
            <Typography color="#fff">
              <span style={{ color: "red" }}>*</span> Name
            </Typography>
            <input
              style={{
                ...inputStyle,
                border: "2px solid gray",
              }}
              type="text"
              placeholder={"Enter your Title"}
            />
          </Box>
          <Box>
            <Typography color="#fff">
              <span style={{ color: "red" }}>*</span> Description
            </Typography>
            <input
              style={{
                ...inputStyle,
                border: "2px solid gray",
              }}
              type="text"
              placeholder={"Description"}
            />
          </Box>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Modal;
