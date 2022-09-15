import {useSelector} from "react-redux";
import PizzaItem from "./PizzaItem";
import CarzinaPizza from "./CarzinaPizza";


function CarzinaPizzaList(){
    const  pizzaList = useSelector(state=>state.initual.carzina)

    return(
        <>
            {pizzaList.map((item, index)=><CarzinaPizza key={index} title ={item.title} id={item.id} img={item.img} text={item.text} amd={item.amd} /> )}

        </>
    )
}

export default CarzinaPizzaList