/* eslint-disable react/prop-types */
import React from "react";
import { Container, Typography, Box } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Details = ({ allData }) => {
  let { id } = useParams();
  const [detail, setDetail] = React.useState(null);
  const navigate = useNavigate();
  React.useEffect(() => {
    const itemData = allData.find((item) => {
      return item.id.toString() === id.toString();
    });
    setDetail(itemData);
  }, [id, allData]);

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
                fontSize: { xs: "18px", md: "24px" },
                fontWeight: 600,
                my: 2,
                color: "#FFFFFF",
              }}
            >
              Title : &nbsp;
              <span
                style={{
                  fontSize: { xs: "16px", md: "18px" },
                  fontWeight: 500,
                  color:"#E8F6EF"
                }}
              >
                {detail ? detail.text : ".."}
              </span>
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "18px", md: "24px" },
                fontWeight: 600,
                my: 2,
                color: "#FFFFFF",
              }}
            >
              Date : &nbsp;
              <span
                style={{
                  fontSize: { xs: "16px", md: "18px" },
                  fontWeight: 500,
                  color:"#E8F6EF"
                }}
              >
                {detail ? detail.date : ".."}
              </span>
            </Typography>
          </Box>
          <Typography
            sx={{
              fontSize: { xs: "18px", md: "24px" },
              fontWeight: 600,
              my: 2,
              color: "#FFFFFF",
            }}
          >
            Description : &nbsp;
          
            <span
              style={{
                fontSize: { xs: "16px", md: "18px" },
                fontWeight: 500,
                color:"#E8F6EF"
              }}
            >
              {detail ? detail.body : ".."}
            </span>
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Details;
