import {createRenderer} from "react-dom/test-utils";
import {outAC} from "./creatAction";
import action from "../Components/Action";


const initialState = {
    auto: false
}


export const initualRiduser = createRenderer(initialState, builder=>{
    builder

    addCase(outAC, (state, action)=>{
        state.auto = action.payload
    })
})