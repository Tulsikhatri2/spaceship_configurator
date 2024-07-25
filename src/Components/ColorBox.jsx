import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import { useDispatch } from 'react-redux'
import { colorCalculation } from '../Redux/AmountCalculation/CalculationSlice'


const ColorBox = () => {

  const dispatch = useDispatch()

  return (
    <>
    <Grid item md={12} sx={{ color: "#7BF762" }}>
              <Typography className='colorTypography'>
                Select Color:
              </Typography>
            </Grid>

            <Grid item sx={{ height: "17vh" }} md={4}>
              <Box className="box1" onClick={()=>{dispatch(colorCalculation(0))}}>
                <Grid md={12} sx={{height:"40%"}}>
                  <Box className="boxSnow"></Box>
                </Grid> 
                <Grid md={12}>
                  <Box>
                    <p className="amount" >+0€</p>
                    <p className="info" >Snow</p>
                  </Box>
                </Grid>
                </Box>
            </Grid>

            <Grid item sx={{ height: "17vh" }} md={4}>
            <Box className="box1" onClick={()=>{dispatch(colorCalculation(100))}}>
                <Grid md={12} sx={{height:"40%"}}>
                  <Box className="boxVolcano"></Box>
                </Grid>
                <Grid md={12}>
                  <Box>
                  <p className='amount'>+100€</p>
                  <p className='info'>Volcano</p>
                  </Box>
                </Grid>
                </Box>
            </Grid>

            <Grid item sx={{ height: "17vh" }} md={4}>
            <Box className="box1" onClick={()=>{dispatch(colorCalculation(100))}} >
                <Grid md={12} sx={{height:"40%"}}>
                  <Box className="boxSky"></Box>
                </Grid>
                <Grid md={12}>
                  <Box>
                  <p className='amount'>+100€</p>
                  <p className='info'>Sky</p>
                  </Box>
                </Grid>
                </Box>
            </Grid>
    </>
  )
}

export default ColorBox