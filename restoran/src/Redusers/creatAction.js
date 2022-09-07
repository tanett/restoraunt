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