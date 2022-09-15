import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {pizzaMinusAC, pizzaPlyusAC, pizzaZiroAC} from "../../Redusers/creatAction";


function CarzinaPizza({title, img, text, amd}){
    const pizzaColishestvo = useSelector(state=>state.initual.pizzaColishestvo)
    const pizzaList = useSelector(state=>state.initual.pizzaList)
    const [totle, setTotla] = useState(pizzaColishestvo)



    const dipatch = useDispatch()

    const onPizzaPlyus = (pizza)=> {
        {
            const x = totle+1
            setTotla(x)
        }
        dipatch(pizzaPlyusAC())
    }

    const onPizzaMinus = ()=>{

        if(totle>=1){
            setTotla(totle-1)
            dipatch(pizzaMinusAC())
        }
    }

    const onDelete = ()=> {
        {
            const  totle=0
            setTotla(totle)
        }
        dipatch(pizzaZiroAC())


    }





    return(



    <div
        className="flex justify-between items-center gap-10 py-8 border-b border-b-gray-300"
    >

        <div>
            <img src={img}/>
        </div>
        <div className="flex flex-col justify-between gap-2">
            <p className="font-bold">{title}</p>
            <p className="text-gray-400 text-sm">
                {text}
            </p>
        </div>
        <p className="text-pink-900 font-bold"> {amd}</p>
        <div className="flex items-center justify-center">
            <button
                className="px-3 py-1 bg-gray-100 text-gray-600 text-lg font-bold rounded-l-lg hover:bg-gray-600 hover:text-white active:translate-y-0.5 transition-all duration-300"

                onClick={onPizzaMinus}
            >
                -
            </button>
            <div className="px-3 py-1 bg-gray-100 text-gray-600 text-lg font-bold"   >
                {pizzaColishestvo}

            </div>
            <button
                className="px-3 py-1 bg-gray-100 text-gray-600 text-lg font-bold rounded-r-lg hover:bg-gray-600 hover:text-white active:translate-y-0.5 transition-all duration-300"
                onClick={onPizzaPlyus}
            >
                +
            </button>
        </div>
        <button className="h-16 w-16 flex justify-center items-center group" onClick={onDelete}>
            <svg
                width="17"
                height="19"
                viewBox="0 0 17 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M6 7.625C6 7.41406 5.83594 7.25 5.625 7.25H4.875C4.66406 7.25 4.5 7.41406 4.5 7.625V14.375C4.5 14.5859 4.66406 14.75 4.875 14.75H5.625C5.83594 14.75 6 14.5859 6 14.375V7.625ZM9 7.625C9 7.41406 8.83594 7.25 8.625 7.25H7.875C7.66406 7.25 7.5 7.41406 7.5 7.625V14.375C7.5 14.5859 7.66406 14.75 7.875 14.75H8.625C8.83594 14.75 9 14.5859 9 14.375V7.625ZM12 7.625C12 7.41406 11.8359 7.25 11.625 7.25H10.875C10.6641 7.25 10.5 7.41406 10.5 7.625V14.375C10.5 14.5859 10.6641 14.75 10.875 14.75H11.625C11.8359 14.75 12 14.5859 12 14.375V7.625ZM13.5 16.1094C13.5 16.6719 13.1836 17 13.125 17H3.375C3.31641 17 3 16.6719 3 16.1094V5H13.5V16.1094ZM5.625 3.5L6.19922 2.12891C6.23438 2.08203 6.32813 2.01172 6.39844 2H10.1133C10.1719 2.01172 10.2773 2.08203 10.3125 2.12891L10.875 3.5H5.625ZM16.5 3.875C16.5 3.66406 16.3359 3.5 16.125 3.5H12.5039L11.6836 1.54297C11.4492 0.96875 10.7461 0.499999 10.125 0.499999H6.375C5.75391 0.499999 5.05078 0.96875 4.81641 1.54297L3.99609 3.5H0.375C0.164062 3.5 0 3.66406 0 3.875V4.625C0 4.83594 0.164062 5 0.375 5H1.5V16.1562C1.5 17.4453 2.34375 18.5 3.375 18.5H13.125C14.1563 18.5 15 17.3984 15 16.1094V5H16.125C16.3359 5 16.5 4.83594 16.5 4.625V3.875Z"
                    fill="#0E0C0D"
                    className="group-hover:fill-pink-900 transition-all duration-300 group-active:scale-105"
                />
            </svg>
        </button>
    </div>
 )
}

export default CarzinaPizza