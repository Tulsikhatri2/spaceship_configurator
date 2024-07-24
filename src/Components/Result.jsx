import React, { useState } from 'react'
import { Box, Typography, Grid } from '@mui/material'

const Result = () => {

  const basePrice= useState(1000)
  const [color,setColor] = useState(0)
  const [power,setPower] = useState(0)
  const [warpDrive,setWarpDrive] = useState(0)
  const [optionPackage,setOptionPackage] = useState(0)
  return (
    <>
    <Grid container sx={{border:"1px solid #7BF762",width:"80%", height:"100%", 
      borderRadius:"2vh",fontFamily:"Roboto Mono",marginTop:"3vh"}}>
      <Grid item md={12} sx={{ backgroundColor:"#1C3C16", color:"#7BF762", paddingLeft:"2vh",
        width:"100%",height:"80%",fontSize:"12px", borderTopLeftRadius:"2vh",borderTopRightRadius:"2vh"}}>
        <p style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
          <span style={{width:"70%"}}>Base Price:</span> 
          <span style={{width:"30%", color:"white"}}>{basePrice}€</span></p>
        <p style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
          <span style={{width:"70%"}}>Color:</span> 
          <span style={{width:"30%", color:"white"}}>+{color}€</span></p>
        <p style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
          <span style={{width:"70%"}}>Power:</span> 
          <span style={{width:"30%", color:"white"}}>+{power}€</span></p>
        <p style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
          <span style={{width:"70%"}}>Warp Drive:</span> 
          <span style={{width:"30%", color:"white"}}>+{warpDrive}€</span></p>
        <p style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
          <span style={{width:"70%"}}>Option Package:</span> 
          <span style={{width:"30%", color:"white"}}>+{optionPackage}€</span></p>
        </Grid>

        <Grid item md={12} sx={{borderTop:"1px solid #7BF762", width:"100%",paddingLeft:"2vh",height:"20%",borderBottomLeftRadius:"2vh",
        borderBottomRightRadius:"2vh",fontSize:"12px", backgroundColor:"#1C3C16", color:"#7BF762"}}>
          <p>
          <span style={{width:"70%"}}>Total:</span>
          <span style={{width:"30%", color:"white"}}></span>
          </p>
      </Grid>
    </Grid>
    </>
  )
}

export default Result