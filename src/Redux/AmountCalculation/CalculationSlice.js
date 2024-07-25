import { createSlice } from "@reduxjs/toolkit";

const calculationSlice = createSlice({
    name:"calculation",
    initialState:{
        basePrice:1000,
        color:0,
        power:0,
        warpDrive:0,
        packageOption:0,
        totalCalculation:0
    },

    reducers:{
        colorCalculation:(state,action) => {
            return{
                ...state,
                color:action.payload
            }
        },
        powerCalculation:(state,action)=>{
            return{
                ...state,
                power:action.payload
            }
        },
        warpDriveCalculation:(state,action)=>{
            return{
                ...state,
                warpDrive:action.payload
            }
        },
        packageCalculation:(state,action)=>{
            return{
                ...state,
                packageOption:action.payload
            }
        },
        totalCalculation:(state,action)=>{
            return{
                ...state,
                totalCalculation:action.payload
            }
        }
    }

})

export const {colorCalculation,powerCalculation,warpDriveCalculation,packageCalculation, totalCalculation} = calculationSlice.actions
export default calculationSlice.reducer