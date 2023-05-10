import { Box, Container, Typography } from "@mui/material";

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
      <Container
        maxWidth="sm"
        sx={{
          background: "#1F1F1F",
          borderRadius: 4,
          mt: 12,
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
                mt: 2,
                borderRadius: 1,
              }}
            >
              <Typography>{text}</Typography>
            </Box>
          );
        })}
      </Container>
    </>
  );
};

export default Home;
