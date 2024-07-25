import React from 'react'
import {Box} from "@mui/material"
import {Grid, Typography} from "@mui/material"
import { useDispatch } from 'react-redux'
import { powerCalculation } from '../Redux/AmountCalculation/CalculationSlice'

const Power = () => {
  const dispatch = useDispatch()
  return (
    <>
    <Grid item md={12} sx={{ marginTop: "3vh" }}>
              <Typography sx={{ letterSpacing: 2,color: "#7BF762", fontSize: "2vh" }}>
                Select Power:
              </Typography>
            </Grid>

            <Grid item sx={{ height: "10vh" }} md={4}>
            <Box sx={{width:"90%", height:"100%", border:"1px solid #5A8F4F",borderRadius:"1vh",
               color:"#7BF762", marginTop:"-2vh",
               "&:hover":{boxShadow:"0px 0px 10px 0px #7BF762" }}}
               onClick={()=>{dispatch(powerCalculation(0))}}>
                <Box sx={{display:"flex", flexDirection:"column", textAlign:"center", fontSize:"1.5vh", 
                  color:"#5A8F4F", lineHeight:"0vh", paddingY:"0.7vh"}}>
                  <p>100 MW</p>
                  <p>+0€</p>
                </Box>
               </Box>
            </Grid>

            <Grid item md={4}>
            <Box sx={{width:"90%", height:"100%", border:"1px solid #5A8F4F",borderRadius:"1vh",
               color:"#7BF762", marginTop:"-2vh",
               "&:hover":{boxShadow:"0px 0px 10px 0px #7BF762" }}}
               onClick={()=>{dispatch(powerCalculation(200))}}>
                <Box sx={{display:"flex", flexDirection:"column", textAlign:"center", fontSize:"1.5vh", 
                  color:"#5A8F4F", lineHeight:"0vh", paddingY:"0.7vh"}}>
                  <p>150 MW</p>
                  <p>+200€</p>
                </Box>
               </Box>
            </Grid>

            <Grid item md={4}>
            <Box sx={{width:"90%", height:"100%", border:"1px solid #5A8F4F",borderRadius:"1vh",
               color:"#7BF762", marginTop:"-2vh",
               "&:hover":{boxShadow:"0px 0px 10px 0px #7BF762" }}}
               onClick={()=>{dispatch(powerCalculation(500))}}>
                <Box sx={{display:"flex", flexDirection:"column", textAlign:"center", fontSize:"1.5vh",
                   color:"#5A8F4F", lineHeight:"0vh", paddingY:"0.7vh"}}>
                  <p>200 MW</p>
                  <p>+500€</p>
                </Box>
               </Box>
            </Grid>
    </>
  )
}

export default Power