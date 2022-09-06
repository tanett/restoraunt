import {createAction} from "@reduxjs/toolkit";



export const  outAC = createAction(
    "AUTO",

    (auto)=>({payload:auto})
)