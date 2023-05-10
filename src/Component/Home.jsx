import { Box, Container, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const Home = () => {
  const dataInfo = [
    {
      text: "This is a simple notes app made using ReactJS and Material UI.",
    },
    {
      text: "This is a simple notes app made using ReactJS and Material UI.",
    },
    {
      text: "This is a simple notes app made using ReactJS and Material UI.",
    },
    {
      text: "This is a simple notes app made using ReactJS and Material UI.",
    },
  ];
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

            {dataInfo.map(({ text }, index) => {
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
                  <Typography>{text}</Typography>
                </Box>
              );
            })}
          </Box>
        </Box>
        <Box display={"flex"} mt="-40px" justifyContent={"flex-end"}>
          <AddIcon
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
    </>
  );
};

export default Home;
