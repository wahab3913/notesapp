import {
  Box,
  Button,
  Container,
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";

const inputStyle = {
  background: "#181B24",
  height: "35px",
  border: "3px solid rgba(82, 89, 96, 0.26)",
  borderRadius: "8px",
  outline: "none",
  paddingLeft: "6px",
  fontSize: "17px",
  fontFamily: "Open Sans",
  fontWight: 400,
  width: "97%",
  color: "#fff",
  flexBasis: "100%",
  paddingTop: "10px",
  paddingBottom: "10px",
  // opacity:"0.6"
};
const Home = () => {
  const [data, setData] = useState({
    id: Math.random().toString(),
    data: new Date().toDateString(),
    text: "",
    body: "",
  });

  const [editId, setEditData] = useState(0);
  const handleData = (e) => {
    e.preventDefault();
    if (editId > 0) {
      const newData = allData.map((item) => {
        if (item.id === editId) {
          return {
            ...item,
            text: data.text,
            body: data.body,
          };
        }
        return item;
      });
      setAllData(newData);
      setEditData("");
    } else if (editId === 0) {
      setAllData([...allData, data]);
    }
    setData({
      text: "",
      body: "",
    });
    handleClose();
  };
  const removeData = (id) => {
    const newData = allData.filter((item) => item.id !== id);
    setAllData(newData);
  };
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [allData, setAllData] = useState([]);

  const editContent = (id) => {
    const editTodo = allData.find((item) => item.id === id);
    setEditData(id);
    if (editTodo) {
      setOpen(true);
      setData(editTodo);
    }
  };
  return (
    <>
      <Container maxWidth="md">
        <Box display={"flex"} justifyContent={"center"}>
          <Box
            sx={{
              background: "#1F1F1F",
              width: "600px",
              borderRadius: 4,
              mt: 12,
              border: "1px solid gray",
              minHeight: "75vh",
            }}
          >
            <Typography
              textAlign={"center"}
              pt={2}
              fontWeight={"bold"}
              fontSize={"30px"}
            >
              Notes App
            </Typography>

            {allData.length > 0 ? (
              allData.map(({ text, body, id }, index) => {
                return (
                  <Box
                    key={index}
                    sx={{
                      border: "1px soild white",
                      background: "#0D1117",
                      p: 3,
                      mx: 2,
                      mt: 2,
                      borderRadius: 1,
                    }}
                  >
                    <Typography fontSize={"24px"}>{text}</Typography>
                    <Typography fontSize={"16px"}>{body}</Typography>
                    <Button
                      onClick={() => {
                        editContent(id);
                      }}
                    >
                      Edit
                    </Button>
                    <Button
                      onClick={() => {
                        removeData(id);
                      }}
                    >
                      delete
                    </Button>
                  </Box>
                );
              })
            ) : (
              <Typography textAlign={"center"} mt={2}>
                No Data Found
              </Typography>
            )}
          </Box>
        </Box>
        <Box display={"flex"} mt="-40px" justifyContent={"flex-end"}>
          <AddIcon
            onClick={handleOpen}
            sx={{
              fontSize: "40px",
              color: "red",
              background: "#1F1F1F",
              borderRadius: "50%",
              p: 1,
              border: "2px solid white",
              "&:hover": {
                background: "#1F1F1F",
                color: "white",
                cursor: "pointer",
              },
            }}
          />
        </Box>
      </Container>
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
              // mx:auto
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
    </>
  );
};

export default Home;
