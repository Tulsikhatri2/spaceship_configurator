import React from "react";
import { Box, TextField, Button } from "@mui/material";

const ProjectDisplay = ({item}) => {
  return (
    <>
      <Box className="boxFeature1">
        <Box className="box2">
          <Box className="box3">
            <h3 className="headings">
              <span className="headingSpan1">
                <u>{item}</u>
              </span>
              <span className="headingSpan2">
                <TextField
                  label="Add Features"
                  variant="filled"
                  sx={{
                    "& .MuiFilledInput-root": {
                      color: "#2C0B1F",
                      fontWeight: "bold",
                      backgroundColor: "#f4f4f4",
                      borderTopLeftRadius: "7px",
                      borderTopRightRadius: "7px",
                      height: "2.5rem",
                      width: "15rem",
                      "&:before": {
                        borderColor: "#2C0B1F",
                        borderWidth: "2px",
                        fontWeight: "bold",
                        fontSize: "2vh",
                      },
                      "&:after": {
                        borderColor: "#2C0B1F",
                        borderWidth: "3px",
                        fontSize: "2vh",
                        height: "2.5rem",
                        width: "15rem",
                      },
                    },
                    "& .MuiInputLabel-filled": {
                      color: "#8C8B89",
                      fontSize: "2vh",
                      "&.Mui-focused": {
                        color: "#000",
                        fontSize: "2vh",
                      },
                    },
                  }}
                />
                <Button
                  variant="contained"
                  sx={{
                    color: "#2C0B1F",
                    backgroundColor: "white",
                    marginLeft: "2vh",
                    height: "6vh",
                    fontSize: "4vh",
                    "&:hover": {
                      backgroundColor: "#2C0B1F",
                      color: "white",
                    },
                  }}
                >
                  +
                </Button>
              </span>
            </h3>
          </Box>
          <Box className="box4"></Box>
        </Box>
      </Box>
    </>
  );
};

export default ProjectDisplay;
