import Carbonara from "../../img/carbonara.svg"
import Biglogo from "../../img/biglogo.svg"
import Springonion from "../../img/springonion.svg"
import Carbonara1 from "../../img/carbonara.svg"
import Carbonara2 from "../../img/carbonara.svg"
import Carbonara3 from "../../img/carbonara.svg"
import Sweets from  "../../img/sweets.svg"
import Sweets1 from  "../../img/sweets.svg"
import Sweets2 from  "../../img/sweets.svg"
import Sweets3 from  "../../img/sweets.svg"
import Sweets4 from  "../../img/sweets.svg"
import Payment2 from "../../img/payment1.svg"
import Payment3 from "../../img/payment2.svg"
import Payment4 from "../../img/payment3.svg"
import Payment5 from "../../img/payment4.svg"
import Mapes from "../../img/map.png";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import PizzaList from "./PizzaList";


function Pizzamain() {

    const pizzaColishestvo = useSelector(state=>state.initual.pizzaColishestvo)
    const [totle, setTotla] = useState(pizzaColishestvo)



    return (


    <section className="">
        <div>

            <div className="flex justify-center items-center">
                <img src={Biglogo} alt="biglogo"/>
            </div>

            <div className="flex items-center font-bold text-lg mt-20 mb-10">Новинки</div>

            <div className="grid grid-cols-4 gap-10 relative">
                <img className="absolute -top-28 -left-24" src={Springonion} alt="springonion"/>

                <div
                    className="flex justify-center items-center shadow-lg rounded-xl p-6 hover:scale-110 transition-all duration-300 gap-4"
                >
                    <div className="flex justify-center items-center">
                        <img src={Carbonara} alt="carbonara"/>
                    </div>
                    <div className="flex flex-col justify-center ml-3">
                        <p className="font-bold">Карбонара</p>
                        <p className="text-pink-900">от 120 р</p>
                    </div>
                </div>

                <div
                    className="flex justify-center items-center shadow-lg rounded-xl p-6 hover:scale-110 transition-all duration-300 gap-4"
                >
                    <div className="flex justify-center items-center">
                        <img src={Carbonara1} alt="carbonara1"/>
                    </div>
                    <div className="flex flex-col justify-center ml-3">
                        <p className="font-bold">Карбонара</p>
                        <p className="text-pink-900">от 120 р</p>
                    </div>
                </div>

                <div
                    className="flex justify-center items-center shadow-lg rounded-xl p-6 hover:scale-110 transition-all duration-300 gap-4"
                >
                    <div className="flex justify-center items-center">
                        <img src={Carbonara2} alt="carbonara2"/>
                    </div>
                    <div className="flex flex-col justify-center ml-3">
                        <p className="font-bold">Карбонара</p>
                        <p className="text-pink-900">от 120 р</p>
                    </div>
                </div>

                <div
                    className="flex justify-center items-center shadow-lg rounded-xl p-6 hover:scale-110 transition-all duration-300 gap-4"
                >
                    <div className="flex justify-center items-center">
                        <img src={Carbonara3} alt="carbonara3"/>
                    </div>
                    <div className="flex flex-col justify-center ml-3">
                        <p className="font-bold">Карбонара</p>
                        <p className="text-pink-900">от 120 р</p>
                    </div>
                </div>
            </div>

            <div
                className="flex items-center font-bold text-2xl mt-20 text-pink-900 mb-10"

            >
                Пицца
            </div>
            <div className="grid grid-cols-4 gap-10">




                <PizzaList/>



            </div>


            <div
                className="flex items-center justify-center font-bold text-4xl mt-20 mb-10"
            >
                <p>Наши <span className="text-pink-900">акции</span></p>
            </div>
            <div className="grid grid-cols-4 grid-rows-2 gap-4">
                <div className="col-span-2 row-span-2 w-[100%] h-[100%]">
                    <img
                        className="object-cover w-[100%] h-[100%]"
                        src={Sweets}
                        alt="sweets"
                    />
                </div>
                <div className=""><img src={Sweets1} alt="sweets1"/></div>
                <div className=""><img src={Sweets2} alt="sweets2"/></div>
                <div className=""><img src={Sweets3} alt="sweets3"/></div>
                <div className=""><img src={Sweets4} alt="sweets4"/></div>
            </div>

            <div
                className="flex items-center justify-center font-bold text-2xl mt-20 mb-10"
            >
                <button
                    className="flex justify-center items-center py-3 px-8 bg-pink-900 font-bold text-white gap-2 rounded-full hover:bg-pink-700 active:translate-y-0.5 hover:shadow-lg transition-all duration-300"

                >
                    Все акции
                </button>
            </div>


            <section className="bg-slate-200">
                <div className="w-5/6 py-5 m-auto">
                    <div
                        className="flex items-center justify-center font-bold text-4xl mt-20 mb-32 text-pink-900"
                    >
                        <p>Оплата и доставка</p>
                    </div>
                    <div className=" grid grid-cols-4 gap-10 ">




                            <div className="flex flex-col bg-white rounded-xl px-5 pb-5">
                                <div className="flex justify-center items-end h-10">
                                    <div className="items-center p-6 bg-white rounded-full">
                                        <img
                                            className="bg-white object-cover"
                                            src={Payment2}
                                            alt="payment2"
                                        />
                                    </div>
                                </div>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            </div>
                            <div className="flex flex-col bg-white rounded-xl px-5 pb-5">
                                <div className="flex justify-center items-end h-10">
                                    <div className="items-center p-6 bg-white rounded-full">
                                        <img
                                            className="bg-white object-cover"
                                            src={Payment3}
                                            alt="payment3"
                                        />
                                    </div>
                                </div>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            </div>
                            <div className="flex flex-col bg-white rounded-xl px-5 pb-5">
                                <div className="flex justify-center items-end h-10">
                                    <div className="items-center p-6 bg-white rounded-full">
                                        <img
                                            className="bg-white object-cover"
                                            src={Payment4}
                                            alt="payment4"
                                        />
                                    </div>
                                </div>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            </div>
                            <div className="flex flex-col bg-white rounded-xl px-5 pb-5">
                                <div className="flex justify-center items-end h-10">
                                    <div className="items-center p-6 bg-white rounded-full">
                                        <img
                                            className="bg-white object-cover"
                                            src={Payment5}
                                            alt="payment5"
                                        />
                                    </div>
                                </div>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            </div>




                    </div>
                    <div className=" my-24 ">

                        <button className="map h-96 border">
                            <img src={Mapes} alt="map"/>
                        </button>

                    </div>
                </div>
            </section>
        </div>

    </section>
)
}

export default Pizzamain