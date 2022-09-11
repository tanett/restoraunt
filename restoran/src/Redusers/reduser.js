
import {createReducer} from "@reduxjs/toolkit";
import {codedAC, outAC, phoneAC, pizzaAC} from "./creatAction";


const initialState = {
    phone: "",
    code: "",
    auth: false,
    pizza:0

}


export  const initualReduser = createReducer(initialState, builder => {
    builder
        .addCase(phoneAC, (state, action)=>{
            state.phone = action.payload
        })

        .addCase(codedAC, (state, action)=>{
            state.code = action.payload
        })

        .addCase(outAC, (state, action) =>{
            state.auth = action.payload
        })

        .addCase(pizzaAC, (state, action)=>{
            state.pizza++
        })




})