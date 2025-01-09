import React from "react";
import "./App.css";
import Options from "./Components/Options";
import Result from "./Components/Result";
import { Grid } from "@mui/material";
import "./Components/Styling.css";
// import "./Components/Projects/Styling2.css"
// import ProjectData from "./Components/Projects/ProjectData";

const App = () => {
  return (
    <>
      <div className="box">
        <Grid container spacing={2} sx={{ paddingRight: "5vh" }}>
          <Grid item md={12} sx={{ color: "#7BF762" }}>
            <p
              style={{
                letterSpacing: 5,
                textAlign: "center",
                marginTop: "6vh",
                fontSize: "3.5vh",
              }}>
              Spaceship Configurator
            </p>
          </Grid>

          <Grid item md={8}>
            <Options />
          </Grid>

          <Grid item md={4}>
            <Result />
          </Grid>
        </Grid>
      </div>

      {/* <ProjectData/> */}
    </>
  );
};

export default App;
