import {Link} from "react-router-dom";

import  Logo from "../img/Logo.svg";
import Image17 from "../img/image 17.svg";
import  Image18 from "../img/image 18.svg";
import  Image19 from  "../img/image 19.svg";
import  Image20 from  "../img/image 20.svg";
import  Image21 from  "../img/image 21.svg";
import Image22 from "../img/image 22.svg";
import Image23 from "../img/image 23.svg";
import  Image24 from "../img/image 24.svg";
import  Image25 from "../img/image 25.svg";
import Bowl from "../img/bowl.svg"
import  Mapes from "../../../../restorauntNew/restoran/src/img/map.png"
import {outAC} from "../Redusers/creatAction";
import {useDispatch} from "react-redux";








function Test(){


    const dipatch = useDispatch();


    const onOuth = ()=>{
        dipatch(outAC(false))
    }
    return(
        <div>

            <section className="w-5/6 py-5 m-auto relative">

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

                <div className="flex justify-between items-center py-10">

                    <ul className="flex justify-between items-center space-x-9">



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
                            className="font-bold flex-col flex justify-center items-center text-lg group transition-all duration-300" to="/pizza"
                        >
                            <Link  className="group-active:bg-black group-active:text-white" to="/pizza"
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

                    <div className="justify-between flex items-center gap-3">
                        <button
                            className="py-2 px-5 flex justify-center items-center text-gray-500 text-lg font-bold border-2 border-white hover:bg-gray-500 hover:text-white rounded-lg hover:border-gray-500 active:bg-gray-700 active:translate-y-0.5 hover:shadow-lg transition-all duration-300"

                            onClick={onOuth}
                        >
                            Войти
                        </button>
                        <button
                            className="flex justify-center items-center py-3 px-8 bg-pink-900 font-bold text-white gap-2 rounded-lg hover:bg-pink-700 active:translate-y-0.5 hover:shadow-lg transition-all duration-300"
                        >
                            <div className="border-r-2 border-r-white pr-2">Корзина</div>

                            <div>1</div>
                        </button>
                    </div>
                </div>
            </header>


             <main>
                 <button className="map h-96 border">
                     <img src={Mapes} alt="map"/>
                 </button>

             </main>



            <footer>


                 <div className="flex pt-10 justify-between">

                     <div className="flex flex-col basis-7/12">

                         <div className="flex flex-col justify-between space-y-5">
                             <h3 className="font-extrabold text-4xl text-pink-900">
                                 8 800 333-36-62
                             </h3>
                             <div className="flex flex-col justify-between">
                                 <h3 className="font-extrabold text-2xl">ул. Баграмяна, 79-99</h3>
                                 <h3 className="text-lg">Доставка и самовывоз 10:00 - 23:00</h3>
                             </div>
                             <h3 className="text-lg font-bold">Мы в соцсетях</h3>
                         </div>

                         <div className="grid grid-cols-3 grid-rows-2 pt-6">
                             <div
                                 className="text-lg hover:text-xl transition-all duration-300 hover:text-pink-900"
                             >
                                 <a href="#">YouTube</a>
                             </div>
                             <div
                                 className="text-lg hover:text-xl transition-all duration-300 hover:text-pink-900"
                             >
                                 <a href="#">Facebook</a>
                             </div>
                             <div
                                 className="text-lg hover:text-xl font-extrabold transition-all duration-300 hover:text-pink-900"
                             >
                                 <a href="#">Калорийность и состав</a>
                             </div>
                             <div
                                 className="text-lg hover:text-xl transition-all duration-800 hover:text-pink-900"
                             >
                                 <a href="#">Instagram</a>
                             </div>
                             <div
                                 className="text-lg hover:text-xl transition-all duration-300 hover:text-pink-900"
                             >
                                 <a href="#">ВКонтакте</a>
                             </div>
                             <div
                                 className="text-lg font-extrabold hover:text-xl transition-all duration-300 hover:text-pink-900"
                             >
                                 <a href="#">Правовая информация</a>
                             </div>
                         </div>
                     </div>

                     <div className="flex flex-col basis-4/12">
                         <div className="flex flex-col">
                             <h3 className="uppercase text-lg font-extrabold pb-8">
                                 Остались вопросы? а мы всегда на связи:
                             </h3>

                             <div className="grid grid-cols-4 grid-rows-2 gap-4">
                                 <button
                                     className="rounded-xl py-2 border-2 border-slate-300 flex justify-center items-center hover:scale-110 transition-all duration-300"
                                 >
                                     <img src={Image17} alt="Image17"/>
                                 </button>
                                 <button
                                     className="rounded-xl py-2 border-2 border-slate-300 flex justify-center items-center hover:scale-110 transition-all duration-300"
                                 >
                                     <img src={Image18} alt="Image18"/>
                                 </button>
                                 <button
                                     className="rounded-xl py-2 border-2 border-slate-300 flex justify-center items-center hover:scale-110 transition-all duration-300"
                                 >
                                     <img src={Image19} alt="Image19"/>
                                 </button>
                                 <button
                                     className="rounded-xl py-2 border-2 border-slate-300 flex justify-center items-center hover:scale-110 transition-all duration-300"
                                 >
                                     <img src={Image20} alt="Image20"/>
                                 </button>
                                 <button
                                     className="rounded-xl py-2 border-2 border-slate-300 flex justify-center items-center hover:scale-110 transition-all duration-300"
                                 >
                                     <img src={Image21} alt="Image21"/>
                                 </button>
                                 <button
                                     className="rounded-xl py-2 border-2 border-slate-300 flex justify-center items-center hover:scale-110 transition-all duration-300"
                                 >
                                     <img src={Image22} alt="Image22"/>
                                 </button>
                                 <button
                                     className="rounded-xl py-2 border-2 border-slate-300 flex justify-center items-center hover:scale-110 transition-all duration-300 col-span-2"
                                 >
                                     Написать нам
                                 </button>
                             </div>
                         </div>
                     </div>
                 </div>

                   <div className="flex mt-20 items-center gap-36 mb-10">

                       <div className="flex">
                           <h3 className="font-bold">YaBao Все права защищены 2022</h3>
                       </div>

                       <div className="flex justify-around items-center space-x-3">
                           <img src={Image23} alt="Image23"/>
                           <img src={Image24} alt="Image24"/>
                           <img src={Image25} alt="Image25"/>
                       </div>

                       <button
                           className="flex justify-center items-center text-sm font-extrabold py-3 px-7 bg-gray-100 text-gray-500 rounded-full hover:shadow-xl transition-all duration-300 active:translate-y-0.5 active:bg-gray-200"
                       >
                           Заказать звонок
                       </button>
                   </div>
                   <img className="absolute -right-20 -bottom-10" src={Bowl} alt="bowl"/>
             </footer>
            </section>
        </div>
    )
}

export  default Test