import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import { useState } from "react";

const inputStyle = {
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
// eslint-disable-next-line react/prop-types
const Modal = ({ handleClose, open, allData, setAllData }) => {
  const [data, setData] = useState({
    id: Math.random().toString(),
    data: new Date().toDateString(),
    text: "",
    body: "",
  });

  const handleData = (e) => {
    e.preventDefault();
    setAllData([...allData, data]);
    setData({
      text: "",
      body: "",
    });
  };
  return (
    <div>
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
        <DialogTitle id="alert-dialog-title">Add Data</DialogTitle>
        <DialogContent>
          <Box>
            <Typography color="#fff">
              <span style={{ color: "red" }}>*</span> Name
            </Typography>
            <input
              value={data.text}
              onChange={(e) =>
                setData({
                  ...data,
                  text: e.target.value,
                })
              }
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
              onChange={(e) =>
                setData({
                  ...data,
                  body: e.target.value,
                })
              }
              value={data.body}
              style={{
                ...inputStyle,
                border: "2px solid gray",
              }}
              type="text"
              placeholder={"Description"}
            />
          </Box>
          <Button type="submit" onClick={handleData}>
            Submit
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Modal;
