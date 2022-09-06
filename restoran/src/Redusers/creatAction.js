import {createAction} from "@reduxjs/toolkit";

export  const loginAC = createAction(
    "LOGIN",

    (login)=>({payload:login})
)

export const  passwordAC = createAction(
    "PASSWORD",

    (password) => ({payload:password})
)

export const  outAC = createAction(
    "AUTO",

    (auto)=>({payload:auto})
)