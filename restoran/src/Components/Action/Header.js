
import Logo from "../../img/Logo.svg";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {outAC, pizzaPlyusAC} from "../../Redusers/creatAction";
import {useState} from "react";




function Header(){
   const state = useSelector(state=>state.initual)
    const dipatch = useDispatch();

   const [isShowMenu, setIsShowMenu] = useState(false)

   const onAuto = ()=>{
       dipatch(outAC(false))
   }



    const pizzaColishestvo = useSelector(state=>state.initual.pizzaColishestvo)







    return(

            <header>
                <div className="flex justify-between space-x-4">

                    <div className="flex justify-between min-w-[40%] gap-6">

                        <button className="flex items-center group">
                            <div
                                className="flex items-center scale-110 group-hover:scale-125 transition-all duration-300"
                            >
                                <div><img src={Logo} alt="logo"/></div>
                            </div>
                            <div className="flex flex-col justify-center items-start pl-5">
                                <h2 className="uppercase font-extrabold text-5xl">Ya bao</h2>
                                <h4 className="uppercase text-xs">Дух китайской еды</h4>
                            </div>
                        </button>


                        <div className="flex flex-col">
                            <p className="font-semibold">
                                Доставка пасты <span className="text-pink-900">Москва</span>
                            </p>
                            <p>
                                Время доставки <span className="text-pink-900">&bull;</span> от 31 мин
                            </p>
                        </div>
                    </div>


                    <div className="flex justify-between items-start min-w-[35%] gap-6">

                        <button
                            className="flex justify-center items-center text-sm font-extrabold py-3 px-7 bg-gray-100 text-gray-500 rounded-full hover:shadow-xl transition-all duration-300 active:translate-y-0.5 active:bg-gray-200"
                        >
                            Заказать звонок
                        </button>

                        <div className="flex font-extrabold pt-1 text-3xl text-pink-900">
                            8 800 333-36-62
                        </div>
                    </div>
                </div>

                <div className="flex justify-between items-center py-5">

                    <div className="hidden md:block"> {/*desktop menu*/}
                        <ul className="flex justify-between items-center space-x-9 ">



                            <li
                                className="font-bold flex-col flex justify-center items-center text-lg group transition-all duration-300"
                            >
                                <Link className="group-active:bg-black group-active:text-white" to="/action"
                                >Акции</Link
                                >
                                <div
                                    className="border-b-black w-10 border-b-2 opacity-0 group-hover:opacity-100 group-active:opacity-0"
                                ></div>
                            </li>
                            <li
                                className="font-bold flex-col flex justify-center items-center text-lg group transition-all duration-300"
                            >
                                <Link  className="group-active:bg-black group-active:text-white" to="/"
                                >Пица</Link
                                >
                                <div
                                    className="border-b-black w-10 border-b-2 opacity-0 group-hover:opacity-100 group-active:opacity-0"
                                ></div>
                            </li>
                            <li
                                className="font-bold flex-col flex justify-center items-center text-lg group transition-all duration-300"
                            >
                                <Link className="group-active:bg-black group-active:text-white" to="/kontact"
                                >Контакты</Link
                                >
                                <div
                                    className="border-b-black w-10 border-b-2 opacity-0 group-hover:opacity-100 group-active:opacity-0"
                                ></div>
                            </li>
                        </ul>
                    </div>





                   <div className="relative">


                       <button
                           className="flex justify-center items-center py-3 px-8 bg-pink-900 font-bold text-white gap-2 rounded-lg hover:bg-pink-700 active:translate-y-0.5 hover:shadow-lg transition-all duration-300   md:hidden"

                           onClick={()=>setIsShowMenu(!isShowMenu)}
                       >
                           <div className=" border-r-white pr-2" > Menu </div>

                       </button>
                       {isShowMenu &&
                           <div className="flex md:hidden"> {/*mobil menu*/}
                               <ul className="flex flex-col gap-2 justify-start items-start bg-white border rounded shadow p-4 absolute">



                                   <li
                                       className="font-bold flex-col flex justify-center items-center text-lg group transition-all duration-300"
                                   >
                                       <Link className="group-active:bg-black group-active:text-white" to="/action"
                                       >Акции</Link
                                       >
                                       <div
                                           className="border-b-black w-10 border-b-2 opacity-0 group-hover:opacity-100 group-active:opacity-0"
                                       ></div>
                                   </li>
                                   <li
                                       className="font-bold flex-col flex justify-center items-center text-lg group transition-all duration-300"
                                   >
                                       <Link  className="group-active:bg-black group-active:text-white" to="/"
                                       >Пица</Link
                                       >
                                       <div
                                           className="border-b-black w-10 border-b-2 opacity-0 group-hover:opacity-100 group-active:opacity-0"
                                       ></div>
                                   </li>
                                   <li
                                       className="font-bold flex-col flex justify-center items-center text-lg group transition-all duration-300"
                                   >
                                       <Link className="group-active:bg-black group-active:text-white" to="/kontact"
                                       >Контакты</Link
                                       >
                                       <div
                                           className="border-b-black w-10 border-b-2 opacity-0 group-hover:opacity-100 group-active:opacity-0"
                                       ></div>
                                   </li>
                               </ul>
                           </div>
                       }

                   </div>

                    <div className="justify-between flex items-center gap-3">

                        {state.auth?
                            <button
                                className="py-2 px-5 flex justify-center items-center text-gray-500 text-lg font-bold border-2 border-white hover:bg-gray-500 hover:text-white rounded-lg hover:border-gray-500 active:bg-gray-700 active:translate-y-0.5 hover:shadow-lg transition-all duration-300"

                                onClick={onAuto}
                            >
                                Выйти
                            </button>
                            :

                                <Link
                                    className="py-2 px-5 flex justify-center items-center text-gray-500 text-lg font-bold border-2 border-white hover:bg-gray-500 hover:text-white rounded-lg hover:border-gray-500 active:bg-gray-700 active:translate-y-0.5 hover:shadow-lg transition-all duration-300"

                                    to="/Login"

                                >
                                    Войти
                                </Link>


                        }

                        <Link
                            className="flex justify-center items-center py-3 px-8 bg-pink-900 font-bold text-white gap-2 rounded-lg hover:bg-pink-700 active:translate-y-0.5 hover:shadow-lg transition-all duration-300"  to="/carzina"
                        >
                            <div className="border-r-2 border-r-white pr-2" > Корзина</div>

                                <div> {pizzaColishestvo} </div>


                        </Link>
                    </div>
                </div>
            </header>

    )
}

export  default Header
