/* eslint-disable react/prop-types */
import { Box, Button, Container, Dialog, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";

import DeleteIcon from "@mui/icons-material/Delete";

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
// eslint-disable-next-line react/prop-types
const Home = ({ allData, setAllData }) => {
  const [data, setData] = useState({
    id: Math.floor(Math.random() * 10000),
    data: new Date().toDateString(),
    text: "",
    body: "",
  });

  //   const [editId, setEditData] = useState(0);
  //   const handleEditData = () => {
  //     const newData = allData.map((item) => {
  //       if (item.id === editId) {
  //         return {
  //           ...item,
  //           text: data.text,
  //           body: data.body,
  //         };
  //       }
  //       return item;
  //     });
  //     setAllData(newData);
  //     setEditData("");
  //     handleCloseEdit();
  //   };
  const handleData = (e) => {
    e.preventDefault();
    setAllData([...allData, data]);
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
  //   const [openEdit, setOpenEdit] = useState(false);
  //   const handleOpenEdit = () => setOpenEdit(true);
  //   const handleCloseEdit = () => setOpenEdit(false);

  //   const editContent = (id) => {
  //     const editTodo = allData.find((item) => item.id === id);
  //     setEditData(id);
  //     if (editTodo) {
  //       handleOpenEdit();
  //       setData(editTodo);
  //     }
  //   };
  //   const handleClick = (id) => {
  //     navigate(`/details/${id}`);
  //   };
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
              height: { xs: "60vh", md: "75vh" },
              //react scroll working but no show
              overflow: "auto",
              //   overflowX: "hidden",
              "&::-webkit-scrollbar": {
                width: "0.4em",
              },
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
                    // onClick={() => handleClick(id)}
                    sx={{
                      border: "1px soild white",
                      background: "#0D1117",
                      p: 3,
                      mx: 2,
                      my: 2,
                      cursor: "pointer",
                      display: "flex",
                      justifyContent: "space-between",
                      borderRadius: 1,
                    }}
                  >
                    <Box
                      sx={{
                        width: "200px",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      <Typography fontSize={"24px"}>{text}</Typography>
                      <Typography fontSize={"16px"}>{body}</Typography>
                    </Box>
                    <Box>
                      <EditIcon
                        onClick={() => {
                          //   editContent(id);
                        }}
                      >
                        Edit
                      </EditIcon>
                      <DeleteIcon
                        sx={{
                          color: "red",
                          mx: 2,
                        }}
                        onClick={() => {
                          removeData(id);
                        }}
                      >
                        delete
                      </DeleteIcon>
                    </Box>
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
        <Box
          display={"flex"}
          mt={{ xs: "40px", md: "-40px" }}
          mr={{
            xs: "0px",
            sm: "50px",
            md: "30px",
          }}
          justifyContent={"flex-end"}
        >
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
          <Box
            sx={{
              mx: "auto",
              width: { xs: "100%", sm: "90%", md: "80%" },
              p: 1,
              display: "flex",
              flexDirection: "column",
              gap: "20px 0px",
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
                  onChange={(e) =>
                    setData({
                      ...data,
                      text: e.target.value,
                    })
                  }
                  value={data.text}
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
                    required: true,
                  }}
                  type="text"
                  placeholder={"Description"}
                />
              </Box>
              <Button
                type="submit"
                sx={{
                  background: "#BE375F",
                  color: "#fff",
                  borderRadius: "10px",
                  height: "50px",
                  fontWeight: "bold",
                  border: "2px solid #BE375F",
                  width: "100%",
                  "&:hover": {
                    border: "2px solid #BE375F",
                    fontWeight: "bold",
                  },
                }}
              >
                Add Note
              </Button>
            </form>
          </Box>
        </Dialog>
      </div>
      {/* ///EDIT MODEL */}{" "}
      {/* <Dialog
        open={openEdit}
        onClose={handleCloseEdit}
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
        <Box
          sx={{
            mx: "auto",
            width: { xs: "100%", sm: "90%", md: "80%" },
            p: 1,
            display: "flex",
            flexDirection: "column",
            gap: "20px 0px",
            boxSizing: "border-box",
          }}
        >
          <Box sx={{ width: "100%" }}>
            <Typography color="#fff" fontWeight="bold">
              <span style={{ color: "red" }}>*</span> Name
            </Typography>
            <input
              required
              onChange={(e) =>
                setData({
                  ...data,
                  text: e.target.value,
                })
              }
              value={data.text}
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
                required: true,
              }}
              type="text"
              placeholder={"Description"}
            />
          </Box>
          <Button onClick={handleEditData}>Update</Button>
        </Box>
      </Dialog> */}
    </>
  );
};

export default Home;
