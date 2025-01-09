import React from "react";
import { Grid, Box } from "@mui/material";
import "./Styling.css";
import { useDispatch } from "react-redux";
import {
  colorCalculation,
  powerCalculation,
  warpDriveCalculation,
  packageCalculation,
} from "../Redux/AmountCalculation/CalculationSlice";

const Practice = ({ Info }) => {
  const dispatch = useDispatch();

  const calculation = (data) => {
    if (data.name === "Snow") {
      dispatch(colorCalculation(0));
    } else if (data.name === "Volcano") {
      dispatch(colorCalculation(100));
    } else if (data.name === "Sky") {
      dispatch(colorCalculation(100));
    } else if (data.name === "100 MW") {
      dispatch(powerCalculation(0));
    } else if (data.name === "150 MW") {
      dispatch(powerCalculation(200));
    } else if (data.name === "200 MW") {
      dispatch(powerCalculation(500));
    } else if (data.name === "NO") {
      dispatch(warpDriveCalculation(0));
    } else if (data.name === "YES") {
      dispatch(warpDriveCalculation(1000));
    } else if (data.name === "Basic") {
      dispatch(packageCalculation(0));
    } else if (data.name === "Sport") {
      dispatch(packageCalculation(100));
    } else if (data.name === "Lux") {
      dispatch(packageCalculation(500));
    }
  };

  return (
    <div>
      <Grid item sx={{ height: "17vh" }} md={4}>
        <Box
          className={
            `${Info?.color ? "colorBox" : ""}` ||
            `${Info.detail ? "packageBox" : ""}` ||
            `${Info ? "driveBox" : ""}`
          }
          onClick={() => {
            calculation(Info);
          }}
        >
          {Info?.color ? (
            <Grid md={12} sx={{ height: "40%" }}>
              <Box className={Info.color}></Box>
            </Grid>
          ) : (
            ""
          )}

          <Grid md={12}>
            <Box>
              <p className="amount">+{Info?.amount}€</p>
              <p className="info">{Info?.name}</p>
            </Box>
          </Grid>

          {Info?.detail ? (
            <>
              <Grid item md={12} className="packageDetails">
                <Box className="packageDetailsBox">
                  {Info?.detail?.map((item) => {
                    return <li>{item}</li>;
                  })}
                </Box>
              </Grid>
            </>
          ) : (
            ""
          )}
        </Box>
      </Grid>
    </div>
  );
};

export default Practice;
