import {createAction} from "@reduxjs/toolkit";


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


export const pizzaPlyusAC = createAction(
    "PIZZA",

)


export const pizzaMinusAC = createAction(
    "PIZZA_MINUS",

)

export const pizzaZiroAC = createAction(
    "PIZZA_ZIRO",

)

export const addPizzaAC = createAction(
    "ADD_PIZZA_ITEM",
    (pizzaItem)=>({payload:pizzaItem})
)

export const deletePizzaAC = createAction(
    "DELETE_PIZZZ_ITEM",
    (id)=>({payload:id})
)

