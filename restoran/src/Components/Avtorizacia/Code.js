
import {useDispatch, useSelector} from "react-redux";
import {codedAC, outAC} from "../../Redusers/creatAction";


function Code({setIsPhone}){

    const state = useSelector(state=>state.initual)

    const dispatch = useDispatch()

    const handelCode = (e)=>{
        dispatch(codedAC(e.target.value))
    }




    const onAuth =()=>{
        dispatch(outAC(true))
        setIsPhone(true)
    }


    const onClick = ()=>{
        setIsPhone(true)
    }

    const phone = useSelector(state => state.initual.phone);


    return(
        <div>

            <div className="flex justify-center items-center">

                <div
                    className="flex flex-col justify-between shadow-lg p-32 pl-10 pr-48 pt-10 rounded-xl bg-white relative space-y-8"
                >

                    <div className="flex-col space-y-8">

                        <h3 className="font-extrabold text-3xl text-pink-900 space-y-8">
                            Вход на сайт
                        </h3>

                        <div className="flex gap-10 items-center">
                            <p className="text-gray-500 text-sm">Номер телефона</p>
                            <div className="text-gray-500" >{phone}</div>
                            <button
                                className="text-pink-900 text-sm border-dashed border-b-2 border-pink-900 hover:scale-110 transition-all duration-300"

                                onClick={onClick}
                            >
                                Изменить
                            </button>
                        </div>
                    </div>

                    <div className="flex items-center gap-8">
                        <p className="text-gray-500 text-sm mr-6">Код из СМС</p>

                        <div
                            className="flex justify-center border-2 rounded-xl border-gray-300 p-2 w-24"
                        >
                            <input type="tel" className="border-none w-20" onChange={handelCode}/>
                        </div>
                        <button
                            className={`text-pink-900 text-sm border-dashed border-b-2 border-pink-900 hover:scale-110 transition-all duration-300 ${!(state.code==="****")?"opacity-50":""}`}
                            disabled={!(state.code === "****")} type="submit"
                            onClick={onAuth}
                        >
                            Проверить код
                        </button>
                    </div>
                    {state.code!="****"?
                        <div className="bg-red-900 text-white">

                            Неправильный код
                        </div>
                        :
                        null
                    }

                </div>
            </div>

        </div>
    )
}

export default Code