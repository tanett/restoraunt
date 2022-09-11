import Img from "../../img/autorizationButton.svg";
import {phoneAC} from "../../Redusers/creatAction";
import {useDispatch, useSelector} from "react-redux";


function Phone({setIsPhone}){
    const state = useSelector(state => state.initual);



    const dispatch = useDispatch()

    const handelPhone = (e)=>{
        dispatch(phoneAC(e.target.value))
    }

    const onClick =()=>{
        setIsPhone(false)
    }




    return(
        <div>

            <div className="flex justify-center items-center">

                <div
                    className="flex flex-col justify-between shadow-lg p-10 rounded-xl bg-white relative z-10"
                >

                    <div className="flex-col space-y-8">

                        <h3 className="font-extrabold text-3xl text-pink-900">Вход на сайт</h3>

                        <div className="flex flex-nowrap items-center">
                            <p className="text-gray-500 text-sm mr-6">Номер телефона</p>
                            <div
                                className="flex flex-col justify-between space-y-5 md:flex-row md:space-y-0"
                            >

                                <div
                                    className="flex justify-between border-2 rounded-xl border-gray-300 p-2"
                                >
                                    <input
                                        onChange={handelPhone}
                                        type="tel"
                                        className={`ml-2 border-none md:w-60 placeholder:font-thin focus:outline-none `}
                                        placeholder="+7 999 999 99-99"


                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-6 items-center mt-20">
                        <button
                            className={`flex justify-center items-center py-4 px-16 bg-pink-900 font-bold text-white gap-2 rounded-lg hover:bg-pink-700 active:translate-y-0.5 hover:shadow-lg transition-all duration-300 ${!(state.phone.length===11)? "opacity-50":""}`}
                            disabled={!(state.phone.length===11)} type="submit"
                            onClick={onClick}

                        >
                            Выслать код
                        </button>
                        <p className="text-gray-400 text-sm mr-6">
                            Продолжая, вы соглашаетесь
                            <span className="underline"
                            >со сбором и <br/>обработкой персональных данных и
              <br/>пользовательсикм соглашением</span
                            >
                        </p>
                    </div>
                    <button
                        className="rounded-full absolute -right-14 top-2 hover:bg-pink-900 active:translate-y-0.5 transition-all duration-300"
                    >
                        <img src={Img} alt="img"/>
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Phone