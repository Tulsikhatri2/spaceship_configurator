import React from 'react'
import {Box, Grid, Typography} from "@mui/material"
import { useDispatch } from 'react-redux'
import { packageCalculation } from '../Redux/AmountCalculation/CalculationSlice'

const PackageOption = () => {
  const dispatch = useDispatch()
  return (
    <>
    <Grid item md={12} sx={{ marginTop: "3vh",}}>
      <Typography sx={{ letterSpacing: 2,color: "#7BF762", fontSize: "2vh" }}>
      Select Option Package:
      </Typography>
    </Grid>

    <Grid item sx={{ height: "27vh"  }} md={4}>
      <Box sx={{width:"90%",height:"100%", border:"1px solid #5A8F4F", borderRadius:"1vh",  marginTop:"-2vh",
      "&:hover":{boxShadow:"0px 0px 10px 0px #7BF762" }}}
      onClick={()=>{dispatch(packageCalculation(0))}}>

        <Grid item md={12} sx={{height:"35%"}}>
            <Box sx={{display:"flex", flexDirection:"column", textAlign:"center", fontSize:"1.7vh", color:"#5A8F4F",
               paddingTop:"1vh"}}> 
              <p>Basic</p> 
            </Box>
        </Grid>

        <Grid item md={12} sx={{height:"65%", backgroundColor:"#1C3C16", borderRadius:"1vh", color:"#5A8F4F"}}>
          <Box sx={{fontSize:"1.5vh", padding:"1.5vh"}}>
            <li>Air conditioning</li>
            <li>Cloth seats</li>
            <li>Fm radio</li>
          </Box>
        </Grid>

      </Box>
    </Grid>

    <Grid item sx={{ height: "27vh" }} md={4}>
      <Box sx={{width:"90%",height:"100%", border:"1px solid #5A8F4F", borderRadius:"1vh",  marginTop:"-2vh",
      "&:hover":{boxShadow:"0px 0px 10px 0px #7BF762" }}}
      onClick={()=>{dispatch(packageCalculation(100))}}>
        
        <Grid item md={12} sx={{height:"35%"}}>
          <Box sx={{display:"flex", flexDirection:"column", textAlign:"center", fontSize:"1.7vh", color:"#5A8F4F", 
            paddingTop:"1vh", lineHeight:"0vh"}}> 
            <p>Sport</p> 
            <p>+100€</p>
          </Box>
        </Grid>

        <Grid item md={12} sx={{height:"65%",  backgroundColor:"#1C3C16", borderRadius:"1vh", color:"#5A8F4F"}}>
          <Box sx={{fontSize:"1.5vh", padding:"1.5vh"}}>
            <li>Air conditioning</li>
            <li>Cloth seats</li>
            <li>Fm radio</li>
            <li style={{fontFamily:"arial"}}>Personal tech support</li>
          </Box>
        </Grid>

      </Box>
    </Grid>

    <Grid item sx={{ height: "27vh" }} md={4}>
      <Box sx={{width:"90%",height:"100%", border:"1px solid #5A8F4F", borderRadius:"1vh",  marginTop:"-2vh",
      "&:hover":{boxShadow:"0px 0px 10px 0px #7BF762" }}}
      onClick={()=>{dispatch(packageCalculation(500))}}>

        <Grid item md={12} sx={{height:"35%"}}>
          <Box sx={{display:"flex", flexDirection:"column", textAlign:"center", fontSize:"1.7vh", color:"#5A8F4F",
             paddingTop:"1vh", lineHeight:"0vh"}}> 
            <p>Lux</p> 
            <p>+500€</p>
          </Box>
        </Grid>

        <Grid item md={12} sx={{height:"65%",  backgroundColor:"#1C3C16", borderRadius:"1vh", color:"#5A8F4F"}}>
          <Box sx={{fontSize:"1.5vh", padding:"1.5vh"}}>
            <li>Air conditioning</li>
            <li>Cloth seats</li>
            <li>Fm radio</li>
            <li>Chrome weels</li>
            <li>Window tint</li>
            <li>Subwoofer</li>
          </Box>
        </Grid>

      </Box>
    </Grid>
    </>
  )
}

export default PackageOption