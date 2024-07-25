import React, { useEffect } from "react";
import { Grid } from "@mui/material";
import { Box } from "@mui/material";
import ColorBox from "./ColorBox";
import Power from "./Power";
import PackageOption from "./PackageOption";
import WarpDrive from "./WarpDrive";
import { useDispatch, useSelector } from "react-redux";
import { totalCalculation } from "../Redux/AmountCalculation/CalculationSlice";
import "./Styling.css"

const Options = () => {
  const dispatch = useDispatch()
  const {basePrice,color,power,warpDrive,packageOption} = useSelector(state=>state.calculations)
  const amount = basePrice+color+power+warpDrive+packageOption
  useEffect(()=>{
    dispatch(totalCalculation(amount))
  },[amount])

  return (
    <>
        <Box>
          <Grid container spacing={2} sx={{ paddingInline: "3vh" }}>

            <ColorBox/>
            <Power/>
            <WarpDrive/>
            <PackageOption/>

          </Grid>
          
        </Box>
      
    </>
  );
};

export default Options;
