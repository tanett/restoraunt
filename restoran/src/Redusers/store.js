import {combineReducers} from "redux";
import {initualReduser} from "./reduser";
import {configureStore} from "@reduxjs/toolkit";


const rootReduser = combineReducers({
    initual:initualReduser
})

export const store = configureStore({
    reducer: rootReduser,
    devTools: process.env.NODE_ENV !== 'production',
})