
import {createReducer} from "@reduxjs/toolkit";



import {
    codedAC,
    outAC,
    phoneAC,
    pizzaPlyusAC,
    pizzaMinusAC,
    pizzaZiroAC,
    addPizzaAC, deletePizzaAC
} from "./creatAction";



const initialState = {
    phone: "",
    code: "",
    auth: false,
    pizzaColishestvo:0,
    pizzaList:[
        {
            id:1,
            img: "../img/menupizza1.svg",
            title: "С креветками и трюфелями",
            text: "Домашняя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан 350 г",
            amd: "1600 ₽"
        },
        {
            id:2,
            img: "../../img/menupizza2.svg",
            title: "Маргарита",
            text: "Домашняя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан 350 г",
            amd: "1200 ₽"
        },
        {
            id:3,
            img: "../../img/menupizza3.svg",
            title: "Четыре сыра",
            text: "Домашняя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан 350 г",
            amd: "800 ₽"
        },
        {
            id:4,
            img: "../../img/menupizza4.svg",
            title: "Пепирони",
            text: "Домашняя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан 350 г",
            amd: "600 ₽"
        },
        {
            id:5,
            img: "../../img/menupizza1.svg",
            title: "С копченой курицей",
            text: "Домашняя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан 350 г",
            amd: "1500 ₽"
        },
        {
            id:6,
            img: "../../img/menupizza2.svg",
            title: "С телятиной",
            text: "Домашняя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан 350 г",
            amd: "1100 ₽"
        },
        {
            id:7,
            img: "../../img/menupizza3.svg",
            title: "Вегитарианская",
            text: "Домашняя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан 350 г",
            amd: "900 ₽"
        },

    ],

    carzina:[],


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

        .addCase(addPizzaAC, (state, action)=>{
            state.carzina.push(action.payload)

        })

        .addCase(deletePizzaAC, (state, action)=>{
            state.carzina = state.carzina.filter(item=>item.id!==action.payload)
        })


})