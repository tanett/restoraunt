import {createAction} from "@reduxjs/toolkit";
import pizza from "../Components/Pizza";

export  const phoneAC = createAction(
    "PHONE",

    (phone)=>({payload:phone})
)

export const  codedAC = createAction(
    "CODE",

    (code) => ({payload:code})
)

export const  outAC = createAction(
    "AUTO",

    (auto)=>({payload:auto})
)


export const pizzaAC = createAction(
    "PIZZA",

    (pizza)=>({payload:pizza})

)