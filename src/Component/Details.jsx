import React from "react";
import { Container, Typography, Box } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Details = ({ allData }) => {
  let { id } = useParams();
  const [detail,setDetail]=React.useState(null)
  const navigate = useNavigate();
React.useEffect(()=>{
    const itemData = allData.find((item) => {
        return item.id.toString() === id.toString();
      });
      setDetail(itemData)
},[id])
  
  return (
    <Container maxWidth="lg">
      <Box
        onClick={() => navigate("/")}
        display="flex"
        alignItems="center"
        gap={2}
        py={4}
        width="max-content"
        sx={{ textDecoration: "none", cursor: "pointer" }}
      >
        <ArrowBackIcon />
        <Typography> Home </Typography>
      </Box>
      <Box
        sx={{
          background: "#1F1F1F",
          borderRadius: 4,
          mt: 12,
          p: 5,
        }}
      >
        <Box
          sx={{
            border: "1px solid white",
            background: "#0D1117",
            p: 3,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: { xs: "flex-start", md: "space-between" },
              flexDirection: { xs: "column", md: "row" },
              alignItems: { xs: "flex-start", md: "center" },
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "18px", md: "20px" },
                fontWeight: 600,
                my: 2,
                color: "#FFFFFF",
              }}
            >
              Title:{detail?detail.text:".."}
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "18px", md: "20px" },
                fontWeight: 600,
                my: 2,
                color: "#FFFFFF",
              }}
            >
              Date:{detail?detail.data:".."}
            </Typography>
          </Box>
          <Typography
            sx={{
              fontSize: "20px",
              fontWeight: 600,
              my: 2,
              color: "#FFFFFF",
            }}
          >
            Description:{detail?detail.body:".."}
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Details;
