import {useSelector} from "react-redux";
import PizzaItem from "./PizzaItem";



function PizzaList(){

    const  pizzaList = useSelector(state=>state.initual.pizzaList)

    return(
        <>
            {pizzaList.map((item, index)=><PizzaItem key={index} title ={item.title} id={item.id} img={item.img} text={item.text} amd={item.amd} /> )}

        </>
    )
}

export default PizzaList