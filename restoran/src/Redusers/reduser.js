
import {createReducer} from "@reduxjs/toolkit";
import {codedAC, deleteAC, onDeleteAC, outAC, phoneAC, pizzaPlyusAC, pizzaMinusAC, pizzaZiroAC} from "./creatAction";
import action from "../Components/Action";


const initialState = {
    phone: "",
    code: "",
    auth: false,
    pizzaColishestvo:0,
    pizzaList:[],


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
            state.auth = action.payload //??
        })

        .addCase(pizzaPlyusAC, (state, action)=>{
            state.pizzaColishestvo++ // ??
        })

        .addCase(pizzaMinusAC, (state, action)=>{
            state.pizzaColishestvo--
        })

        .addCase(pizzaZiroAC, (state, action)=>{
            state.pizzaColishestvo=0
        })

})