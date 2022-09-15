import Menupizza1 from "../../img/menupizza1.svg";
import {useDispatch, useSelector} from "react-redux";
import {addPizzaAC, addpizzaAC, pizzaPlyusAC} from "../../Redusers/creatAction";
import {useState} from "react";
import pizzaList from "./PizzaList";



function PizzaItem({title, img, text, amd}){
    const pizzaColishestvo = useSelector(state=>state.initual.pizzaColishestvo)
    const pizzaList = useSelector(state => state.initual.pizzaList)
    const carzina = useSelector(state => state.initual.carzina)
    const [totle, setTotla] = useState(pizzaColishestvo)
    const dipatch = useDispatch()



    const onPizza = ()=>{

        const x = totle+1
        setTotla(x)

        const pizzaList = {
            id: Date.now(),
            text: text,
            img: img,
            amd: amd,
            title:title
        }
        dipatch(pizzaPlyusAC())
        dipatch(addPizzaAC(pizzaList))

    }

    return(
        <div className="flex flex-col justify-between gap-3">
            <div className="flex justify-center items-center">
                <img src={img}/>

            </div>
            <h3 className="font-extrabold text-2xl">{title}</h3>
            <p className="text-gray-500">
                {text}
            </p>
            <div className="flex justify-between items-center">
                <p className="font-extrabold">{amd}</p>
                <button
                    className="flex justify-center items-center py-3 px-8 bg-pink-900 font-bold text-white gap-2 rounded-lg hover:bg-pink-700 active:translate-y-0.5 hover:shadow-lg transition-all duration-300"

                    onClick={onPizza}
                >
                    В корзину
                </button>
            </div>
        </div>
    )
}
export default PizzaItem