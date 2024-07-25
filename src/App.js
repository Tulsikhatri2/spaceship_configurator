import React from "react";
import "./App.css";
import Options from "./Components/Options";
import Result from "./Components/Result";
import { Grid, Typography } from "@mui/material";


const App = () => {
  return (
    <>
      <div className="box">
        <Grid container spacing={2}>

          <Grid item md={12} sx={{color:"#7BF762"}}>
            <Typography sx={{letterSpacing:5, textAlign:"center", marginTop:"6vh"}} 
            variant="h6">Spaceship Configurator</Typography>
          </Grid>

          <Grid item md={7}>
            <Options />
          </Grid>
          
          <Grid item md={5} sx={{height:"35vh"}}>
            <Result />
          </Grid>
          
        </Grid>
      </div>
    </>
  );
};

export default App;
