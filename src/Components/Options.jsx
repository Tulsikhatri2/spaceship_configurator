import React from "react";
import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/material";
import ColorBox from "./ColorBox";
import PowerAndWarp from "./PowerAndWarp";
import PackageOption from "./PackageOption";

const Options = () => {
  return (
    <>
        <Box>
          <Grid container spacing={2} sx={{ paddingInline: "3vh" }}>
            <ColorBox/>

            <Grid item md={12} sx={{ marginTop: "3vh" }}>
              <Typography sx={{ letterSpacing: 2,color: "#7BF762", fontSize: "2vh" }}>
                Select Power:
              </Typography>
            </Grid>

            <Grid item sx={{ height: "10vh" }} md={4}>
              <PowerAndWarp />
            </Grid>

            <Grid item md={4}>
              <PowerAndWarp />
            </Grid>

            <Grid item md={4}>
              <PowerAndWarp />
            </Grid>

            <Grid item md={12} sx={{ marginTop: "3vh" }}>
              <Typography sx={{ letterSpacing: 2,color: "#7BF762", fontSize: "2vh" }}>
                Select Power:
              </Typography>
            </Grid>

            <Grid item sx={{ height: "10vh" }} md={4}>
              <PowerAndWarp />
            </Grid>

            <Grid item md={4}>
              <PowerAndWarp />
            </Grid>

            <Grid item md={12} sx={{ marginTop: "3vh" }}>
              <Typography sx={{ letterSpacing: 2,color: "#7BF762", fontSize: "2vh" }}>
                Select Option Package:
              </Typography>
            </Grid>

            <Grid item sx={{ height: "30vh" }} md={4}>
              <PackageOption/>
            </Grid>

            <Grid item sx={{ height: "30vh" }} md={4}>
              <PackageOption/>
            </Grid>

            <Grid item sx={{ height: "30vh" }} md={4}>
              <PackageOption/>
            </Grid>

          </Grid>
          
        </Box>
      
    </>
  );
};

export default Options;
