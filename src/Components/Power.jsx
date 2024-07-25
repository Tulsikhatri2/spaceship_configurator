import React from 'react'
import {Box} from "@mui/material"
import {Grid, Typography} from "@mui/material"
import { useDispatch } from 'react-redux'
import { powerCalculation } from '../Redux/AmountCalculation/CalculationSlice'

const Power = () => {

  const powerDetails = [
    {name:"100 MW", amount:0},
    {name:"150 MW", amount:200},
    {name:"200 MW", amount:500}
  ]

  function handlePower(item){
    if(item.name=="100 MW"){
      dispatch(powerCalculation(item.amount))
    }
    else if (item.name=="150 MW"){
      dispatch(powerCalculation(item.amount))
    }
    else if (item.name=="200 MW"){
      dispatch(powerCalculation(item.amount))
    }
  }

  const dispatch = useDispatch()
  return (
    <>
    <Grid item md={12} sx={{ marginTop: "3vh" }}>
              <Typography sx={{ letterSpacing: 2,color: "#7BF762", fontSize: "2vh" }}>
                Select Power:
              </Typography>
            </Grid>
          {
            powerDetails.map((item)=>{
              return(
              <Grid item sx={{ height: "10vh" }} md={4}>
            <Box sx={{width:"90%", height:"100%", border:"1px solid #5A8F4F",borderRadius:"1vh",
               color:"#7BF762", marginTop:"-2vh",
               "&:hover":{boxShadow:"0px 0px 10px 0px #7BF762" }}}
               onClick={()=>handlePower(item)}>
                <Box sx={{display:"flex", flexDirection:"column", textAlign:"center", fontSize:"1.5vh", 
                  color:"#5A8F4F", lineHeight:"0vh", paddingY:"0.7vh"}}>
                  <p>{item.name}</p>
                  <p>+{item.amount}€</p>
                </Box>
               </Box>
            </Grid>
              )
            })
            
          }
    </>
  )
}

export default Power