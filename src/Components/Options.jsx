import React, { useEffect } from "react";
import { Grid } from "@mui/material";
import { Box, Typography} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { totalCalculation } from "../Redux/AmountCalculation/CalculationSlice";
import "./Styling.css"
import Practice from "./Practice";

const Options = () => {

  const dispatch = useDispatch()

  const {basePrice,color,power,warpDrive,packageOption} = useSelector(state=>state.calculations)

  const amount = basePrice+color+power+warpDrive+packageOption
  
  const details={
    color:[
      {name:"Snow", amount:0,color:"Snow"},
      {name:"Volcano", amount:100,color: "Volcano"},
      {name:"Sky", amount:100, color:"Sky"}],
    power: [
      { name: "100 MW", amount: 0 },
      { name: "150 MW", amount: 200 },
      { name: "200 MW", amount: 500 },],
    warpDrive: [
      { name: "NO", amount: 0 },
      { name: "YES", amount: 1000 },],
    packageOption: [
      { name: "Basic", amount: 0 ,detail:["Air conditioning","Cloth seats","Fm radio" ]},
      { name: "Sport", amount: 100, detail:["Air conditioning","Cloth seats","Fm radio","Tech support"] },
      { name: "Lux", amount: 500, detail:["Air conditioning","Cloth seats","Fm radio","Chrome weels","Window tint","Subwoofer"]},
      ],
  }

  useEffect(()=>{
    dispatch(totalCalculation(amount))
  },[amount])

  return (
    <>
        <Box>

          <Grid container spacing={2} sx={{ paddingInline: "3vh" }}>
          <Grid item md={12} sx={{ color: "#7BF762" }}>
            <Typography sx={{ letterSpacing: 2,color: "#7BF762", fontSize: "2vh" }}>Select Color:</Typography>
          </Grid>
            {
              details.color.map((info)=>{
                return(
                  <Practice Info={info}/>
                )
              })
            }

            <Grid item md={12} >
              <Typography sx={{ letterSpacing: 2,color: "#7BF762", fontSize: "2vh" }}>
                Select Power:
              </Typography>
            </Grid>
            {
              details.power.map((data)=>{
                return(
                  <Practice Info={data}/>
                )
              })
            }

            <Grid item md={12} >
              <Typography sx={{ letterSpacing: 2,color: "#7BF762", fontSize: "2vh",marginTop:"-4vh" }}>
              Warp Drive:
              </Typography>
            </Grid>
            {
              details.warpDrive.map((drive)=>{
                return(
                  <Practice Info={drive}/>
                )
              })
            }

            <Grid item md={12} >
            <Typography sx={{ letterSpacing: 2,color: "#7BF762", fontSize: "2vh",marginTop:"-4vh"}}>
            Select Option Package:
            </Typography>
            </Grid>
            {
              details.packageOption.map((packages)=>{
                return(
                  <Practice Info={packages}/>
                )
              })
            }

          </Grid>  
        </Box>
      
    </>
  );
};

export default Options;
