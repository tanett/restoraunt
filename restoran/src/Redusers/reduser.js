
import {createReducer} from "@reduxjs/toolkit";
import {loginAC, outAC, passwordAC} from "./creatAction";


const initialState = {
    login: "",
    password: "",
    auth: false

}


export  const initualReduser = createReducer(initialState, builder => {
    builder
        .addCase(loginAC, (state, action)=>{
            state.login = action.payload
        })

        .addCase(passwordAC, (state, action)=>{
            state.password = action.payload
        })

        .addCase(outAC, (state, action) =>{
            state.auth = action.payload
        })




})