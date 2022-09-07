
import {createReducer} from "@reduxjs/toolkit";
import {codedAC, loginAC, outAC, passwordAC, phoneAC} from "./creatAction";


const initialState = {
    phone: "",
    code: "",
    auth: false

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




})