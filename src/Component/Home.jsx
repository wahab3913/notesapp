import { Box, Button, Container, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import Modal from "./modal";

const Home = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [allData, setAllData] = useState([]);
  console.log(allData, "data");
  const editContent = () => {
    console.log("edit");
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
                    {/* <Button>
                      <Typography fontSize={"16px"}>Edit</Typography>
                    </Button> */}
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
      <Modal
        handleOpen={handleOpen}
        handleClose={handleClose}
        open={open}
        setOpen={setOpen}
        setAllData={setAllData}
        allData={allData}
      />
    </>
  );
};

export default Home;
