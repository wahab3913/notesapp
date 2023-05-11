import { Box, Button, Dialog, Typography } from "@mui/material";
import { useState } from "react";
import { btnStyle, inputStyle } from "./Home";

// eslint-disable-next-line react/prop-types
const Modal = ({ handleClose, open, allData, setAllData }) => {
  const [data, setData] = useState({
    id: "",
    date: "",
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
    handleClose();
  };
  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      id: new Date().getTime().toString(),
      date: new Date().toLocaleDateString(),
      [name]: value,
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
            borderRadius: "10px",
            width: "95%",
            py: 5,
          },
        }}
      >
        <Box
          sx={{
            mx: "auto",
            width: { xs: "100%", sm: "90%", md: "80%" },
            p: 1,
            boxSizing: "border-box",
          }}
        >
          <form
            onSubmit={handleData}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px 0px",
            }}
          >
            <Box sx={{ width: "100%" }}>
              <Typography color="#fff" fontWeight="bold">
                <span style={{ color: "red" }}>*</span> Name
              </Typography>
              <input
                required
                onChange={handleChangeInput}
                value={data.text}
                name="text"
                style={{
                  ...inputStyle,
                  border: "2px solid gray",
                }}
                type="text"
                placeholder={"Enter your Title"}
              />
            </Box>
            <Box>
              <Typography color="#fff" fontWeight="bold">
                <span style={{ color: "red" }}>*</span> Description
              </Typography>
              <input
                required
                onChange={handleChangeInput}
                value={data.body}
                name="body"
                style={{
                  ...inputStyle,
                  border: "2px solid gray",
                  required: true,
                }}
                type="text"
                placeholder={"Description"}
              />
            </Box>
            <Button type="submit" sx={btnStyle}>
              Add Note
            </Button>
          </form>
        </Box>
      </Dialog>
    </div>
  );
};

export default Modal;
