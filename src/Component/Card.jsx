/* eslint-disable react/prop-types */
import { ArrowOutward, Delete, Edit } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";

const Card = ({ filteredItems, removeData, editContent, handleClick }) => {
  return (
    <>
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
    </>
  );
};

export default Card;
