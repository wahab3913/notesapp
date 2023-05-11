/* eslint-disable react/prop-types */
import { Box, Button, Container, Dialog, Typography } from "@mui/material";

import { useState } from "react";

import { useNavigate } from "react-router-dom";
import { Add, Edit, ArrowOutward, Delete } from "@mui/icons-material";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import Modal from "./modal";

// eslint-disable-next-line react-refresh/only-export-components
export const inputStyle = {
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
// eslint-disable-next-line react-refresh/only-export-components
export const btnStyle = {
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
};
// eslint-disable-next-line react/prop-types

const getFilterData = (query, startDate, items) => {
  if (!query & !startDate) {
    return items;
  }

  return items.filter(
    (item) =>
      (startDate !== null &&
        item.date?.includes(startDate?.toLocaleDateString())) ||
      (query && item.text.toLowerCase().includes(query.toLowerCase())) ||
      (query && item.body.toLowerCase().includes(query.toLowerCase()))
  );
};
const Home = ({ allData, setAllData }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [editData, setEditData] = useState("");
  const [search, setSearch] = useState();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleOpenEdit = () => setOpenEdit(true);
  const handleCloseEdit = () => setOpenEdit(false);

  const handleEditData = (e) => {
    e.preventDefault();
    const newData = allData.map((item) => {
      if (item.id === editData.id) {
        return {
          ...item,
          text: editData.text,
          body: editData.body,
        };
      }
      return item;
    });
    setAllData(newData);
    setEditData("");
    handleCloseEdit();
  };

  const removeData = (id) => {
    const newData = allData.filter((item) => item.id !== id);
    setAllData(newData);
  };

  const editContent = (id) => {
    const editTodo = allData.find((item) => item.id === id);
    setEditData(id);
    if (editTodo) {
      handleOpenEdit();
      setEditData(editTodo);
    }
  };
  const handleClick = (id) => {
    navigate(`/details/${id}`);
  };
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  const [startDate, setStartDate] = useState(null);

  const filteredItems = getFilterData(search, startDate, allData);

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
              overflow: "auto",
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

            {/* //search bar add */}
            {/* {allData.length > 0 && ( */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mx: 2,
                mt: 2,
              }}
            >
              <input
                type="text"
                placeholder="Search"
                name="search"
                value={search}
                style={inputStyle}
                onChange={handleSearch}
              />
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </Box>
            {/* )} */}

            {filteredItems.length > 0 ? (
              filteredItems.map(({ text, body, id }, index) => {
                return (
                  <Box
                    key={index}
                    sx={{
                      background: "#0D1117",
                      p: 3,
                      mx: 2,
                      my: 2,
                      cursor: "pointer",
                      display: "flex",
                      justifyContent: "space-between",
                      borderRadius: 1,
                      "&:hover": {
                        border: "1px solid rgba(82, 89, 96, 0.26) !important",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        width: { xs: "100px", md: "200px" },
                  
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "24px",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {text}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "16px",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {body}
                      </Typography>
                    </Box>
                    <Box>
                      <Edit
                        onClick={() => {
                          editContent(id);
                        }}
                      >
                        Edit
                      </Edit>
                      <Delete
                        sx={{
                          color: "red",
                          mx: 2,
                        }}
                        onClick={() => {
                          removeData(id);
                        }}
                      >
                        delete
                      </Delete>
                      <ArrowOutward
                        sx={{
                          color: "red",
                        }}
                        onClick={() => {
                          handleClick(id);
                        }}
                      ></ArrowOutward>
                    </Box>
                  </Box>
                );
              })
            ) : (
              <Typography textAlign={"center"} mt={2}>
                No Note
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
          <Add
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
        <Modal
          open={open}
          handleClose={handleClose}
          allData={allData}
          setAllData={setAllData}
        />
      </div>

      <Dialog
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
            onSubmit={handleEditData}
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
                  setEditData({
                    ...editData,
                    text: e.target.value,
                  })
                }
                value={editData.text}
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
                  setEditData({
                    ...editData,
                    body: e.target.value,
                  })
                }
                value={editData.body}
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
              Update
            </Button>
          </form>
        </Box>
      </Dialog>
    </>
  );
};

export default Home;
