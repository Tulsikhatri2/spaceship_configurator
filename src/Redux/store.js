import { configureStore } from "@reduxjs/toolkit";
import calculationsReducer from "./AmountCalculation/CalculationSlice"

const store = configureStore({
    reducer:{
        calculations: calculationsReducer
    }
})

export default store