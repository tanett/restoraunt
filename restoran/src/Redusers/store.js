import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import {initualReduser} from "./reduser";


const rootReduser = combineReducers({
    initual:initualReduser
})

export const store = configureStore({
    reducer: rootReduser,
    devTools: process.env.NODE_ENV !== 'production',
})