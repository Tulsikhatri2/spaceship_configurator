import React from "react";
import { Grid } from "@mui/material";
import { useSelector } from "react-redux";
import "./Styling.css";

const Result = () => {
  const {
    basePrice,
    color,
    power,
    warpDrive,
    packageOption,
    totalCalculation,
  } = useSelector((state) => state.calculations);

  return (
    <>
      <Grid container className="resultBox">
        <Grid item md={12} className="resultBoxDesign">
          <p className="resultBoxText" sx={{ lineHeight: "4.5vh" }}>
            <span className="totalHeads">Base Price:</span>
            <span className="totalInfo">{basePrice}€</span>
          </p>

          <p className="resultBoxText" sx={{ lineHeight: "4.5vh" }}>
            <span className="totalHeads">Color:</span>
            <span className="totalInfo">+{color}€</span>
          </p>

          <p className="resultBoxText" sx={{ lineHeight: "4.5vh" }}>
            <span className="totalHeads">Power:</span>
            <span className="totalInfo">+{power}€</span>
          </p>

          <p className="resultBoxText" sx={{ lineHeight: "4.5vh" }}>
            <span className="totalHeads">Warp Drive:</span>
            <span className="totalInfo">+{warpDrive}€</span>
          </p>

          <p className="resultBoxText" sx={{ lineHeight: "4.5vh" }}>
            <span className="totalHeads">Option Package:</span>
            <span className="totalInfo">+{packageOption}€</span>
          </p>
        </Grid>

        <Grid item md={12} className="totalGrid">
          <p className="resultBoxText">
            <span className="totalHeads">Total:</span>
            <span className="totalInfo">{totalCalculation}€</span>
          </p>
        </Grid>
      </Grid>
    </>
  );
};

export default Result;
