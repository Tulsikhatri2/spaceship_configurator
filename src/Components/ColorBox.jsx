import React from 'react'
import { Box, Grid, Typography } from '@mui/material'

const ColorBox = () => {
  return (
    <>
    <Grid item md={12} sx={{ color: "#7BF762" }}>
              <Typography sx={{ letterSpacing: 2, fontSize: "2vh" }}>
                Select Color:
              </Typography>
            </Grid>

            <Grid item sx={{ height: "17vh" }} md={4}>
              <Box sx={{width:"90%",height:"100%", border:"1px solid #5A8F4F", borderRadius:"1vh",  marginTop:"-2vh",
                "&:hover":{boxShadow:"0px 0px 10px 0px #7BF762" }}}>
                <Grid md={12} sx={{height:"40%"}}>
                  <Box sx={{width:"45%", backgroundColor:"white", height:"90%", marginX:"5.5vh", marginY:"2vh",borderRadius:"1vh" }}></Box>
                </Grid>
                <Grid md={12}>
                  <Box>
                    <p style={{fontSize:"1.5vh", color:"#5A8F4F", textAlign:"center"}}>+0€</p>
                    <p style={{fontSize:"1.75vh", color:"#5A8F4F", textAlign:"center", marginTop:"-2vh"}}>Snow</p>
                  </Box>
                </Grid>
                </Box>
            </Grid>

            <Grid item sx={{ height: "17vh" }} md={4}>
            <Box sx={{width:"90%",height:"100%", border:"1px solid #5A8F4F", borderRadius:"1vh",  marginTop:"-2vh",
                "&:hover":{boxShadow:"0px 0px 10px 0px #7BF762" }}}>
                <Grid md={12} sx={{height:"40%"}}>
                  <Box sx={{width:"45%", backgroundColor:"#FF7A00", height:"90%", marginX:"5.5vh", marginY:"2vh",borderRadius:"1vh" }}></Box>
                </Grid>
                <Grid md={12}>
                  <Box></Box>
                </Grid>
                </Box>
            </Grid>

            <Grid item sx={{ height: "17vh" }} md={4}>
            <Box sx={{width:"90%",height:"100%", border:"1px solid #5A8F4F", borderRadius:"1vh",  marginTop:"-2vh",
                "&:hover":{boxShadow:"0px 0px 10px 0px #7BF762" }}}>
                <Grid md={12} sx={{height:"40%"}}>
                  <Box sx={{width:"45%", backgroundColor:"#6BE4FF", height:"90%", marginX:"5.5vh", marginY:"2vh",borderRadius:"1vh" }}></Box>
                </Grid>
                <Grid md={12}>
                  <Box></Box>
                </Grid>
                </Box>
            </Grid>
    </>
  )
}

export default ColorBox