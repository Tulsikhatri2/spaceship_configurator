import React from 'react'
import {Grid, Typography } from '@mui/material'
import { useSelector } from 'react-redux'

const Result = () => {

  const {basePrice,color,power,warpDrive,packageOption,totalCalculation} = useSelector(state=>state.calculations)
  return (
    <>
    <Grid container sx={{border:"1px solid #7BF762",width:"80%", height:"100%", 
      borderRadius:"2vh",fontFamily:"Roboto Mono",marginTop:"3vh"}}>

      <Grid item md={12} sx={{ backgroundColor:"#1C3C16", color:"#7BF762", paddingLeft:"2vh",
        width:"100%",height:"80%",fontSize:"12px", borderTopLeftRadius:"2vh",borderTopRightRadius:"2vh", paddingTop:"2vh"}}>

        <Typography sx={{display:"flex", alignItems:"center", justifyContent:"space-between", fontFamily:"roboto mono", 
          fontSize:"2vh", lineHeight:"4.5vh"}}>

          <span style={{width:"70%"}}>Base Price:</span> 
          <span style={{width:"30%", color:"white"}}>{basePrice}€</span>
        
        </Typography>

        <Typography style={{display:"flex", alignItems:"center", justifyContent:"space-between",fontFamily:"roboto mono",
           fontSize:"2vh", lineHeight:"4.5vh"}}>

          <span style={{width:"70%"}}>Color:</span> 
          <span style={{width:"30%", color:"white"}}>+{color}€</span>

        </Typography>

        <Typography style={{display:"flex", alignItems:"center", justifyContent:"space-between",fontFamily:"roboto mono",
           fontSize:"2vh",lineHeight:"4.5vh"}}>

          <span style={{width:"70%"}}>Power:</span> 
          <span style={{width:"30%", color:"white"}}>+{power}€</span>
          
        </Typography>
          
        <Typography style={{display:"flex", alignItems:"center", justifyContent:"space-between",fontFamily:"roboto mono", 
          fontSize:"2vh",lineHeight:"4.5vh"}}>

          <span style={{width:"70%"}}>Warp Drive:</span> 
          <span style={{width:"30%", color:"white"}}>+{warpDrive}€</span>
          
        </Typography>

        <Typography style={{display:"flex", alignItems:"center", justifyContent:"space-between",fontFamily:"roboto mono",
           fontSize:"2vh",lineHeight:"4.5vh"}}>

          <span style={{width:"70%"}}>Option Package:</span> 
          <span style={{width:"30%", color:"white"}}>+{packageOption}€</span>
          
        </Typography>

        </Grid>

        <Grid item md={12} sx={{borderTop:"1px solid #7BF762", width:"100%",paddingLeft:"2vh",height:"20%",
        borderBottomLeftRadius:"2vh",borderBottomRightRadius:"2vh",fontSize:"12px", backgroundColor:"#1C3C16",
        color:"#7BF762"}}>
          <Typography style={{display:"flex", alignItems:"center", justifyContent:"space-between", 
            fontFamily:"roboto mono", fontSize:"2vh",lineHeight:"6vh"}}>

          <span style={{width:"70%"}}>Total:</span>
          <span style={{width:"30%", color:"white"}}>{totalCalculation}€</span>
          
          </Typography>
      </Grid>
    </Grid>
    </>
  )
}

export default Result