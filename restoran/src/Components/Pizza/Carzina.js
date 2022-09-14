import Header from "../Action/Header";
import Footer from "../Action/Footer";
import Cartpizza2 from "../../img/cartpizza2.svg"
import Cartpizza1 from "../../img/cartpizza1.svg"
import Arrowimg1 from "../../img/arrowimg1.svg"
import Arrowimg2 from "../../img/arrowimg2.svg"
import Arrowimg3 from "../../img/arrowimg3.svg"
import Souce1 from "../../img/souce1.svg"
import Souce2 from "../../img/souce2.svg"
import Souce3 from "../../img/souce3.svg"
import Souce4 from "../../img/souce4.svg"
import Souce5 from "../../img/souce5.svg"
import Souce6 from "../../img/souce6.svg"
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {pizzaPlyusAC, pizzaMinusAC, pizzaZiroAC} from "../../Redusers/creatAction";



function Carzina(){


    const pizzaColishestvo = useSelector(state=>state.initual.pizzaColishestvo)
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
        <div>
            <section className="w-5/6 py-5 m-auto relative">
            <Header/>

            <main className="w-4/6 py-5 m-auto">
                <h2
                    className="text-pink-900 font-extrabold text-3xl border-b border-b-gray-300 py-10 pb-14"
                >
                    Корзина
                </h2>


                <div
                    className="flex justify-between items-center gap-10 py-8 border-b border-b-gray-300"
                >
                    <div><img src={Cartpizza2} alt="cartpizza2"/></div>
                    <div className="flex flex-col justify-between gap-2">
                        <p className="font-bold">С креветками и трюфелями</p>
                        <p className="text-gray-400 text-sm">
                            Домашняя паста феттуччине, сливочный соус, креветки, трюфельное
                            масло, черный перец, пармезан.350 г
                        </p>
                    </div>
                    <p className="text-pink-900 font-bold">120 &#8381;</p>
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
                <div
                    className="flex justify-between items-center gap-10 py-8 border-b border-b-gray-300"
                >
                    <div><img src={Cartpizza1} alt="Cartpizza1"/></div>
                    <div className="flex flex-col justify-between gap-2">
                        <p className="font-bold">С креветками и трюфелями</p>
                        <p className="text-gray-400 text-sm">
                            Домашняя паста феттуччине, сливочный соус, креветки, трюфельное
                            масло, черный перец, пармезан.350 г
                        </p>
                    </div>
                    <p className="text-pink-900 font-bold">120 &#8381;</p>
                    <div className="flex items-center justify-center">
                        <button
                            className="px-3 py-1 bg-gray-100 text-gray-600 text-lg font-bold rounded-l-lg hover:bg-gray-600 hover:text-white active:translate-y-0.5 transition-all duration-300"
                        >
                            -
                        </button>
                        <div className="px-3 py-1 bg-gray-100 text-gray-600 text-lg font-bold">
                            1
                        </div>
                        <button
                            className="px-3 py-1 bg-gray-100 text-gray-600 text-lg font-bold rounded-r-lg hover:bg-gray-600 hover:text-white active:translate-y-0.5 transition-all duration-300"

                        >
                            +
                        </button>
                    </div>
                    <div className="h-16 w-16 flex justify-center items-center group">
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
                                className="group-hover:fill-pink-900 transition-all duration-300 group-active:group-active:scale-105"
                            />
                        </svg>
                    </div>
                </div>
                <h2 className="text-pink-900 font-extrabold text-2xl py-10">
                    Добавить к заказу?
                </h2>
                <div className="grid grid-cols-3 gap-6 group">
                    <div
                        className="flex justify-center items-center p-4 border border-gray-300 rounded-xl relative"
                    >
                        <img src={Arrowimg1} alt="arrowimg1"/>
                        <div className="flex flex-col justify-between ml-4">
                            <p className="font-bold">Молочный коктейль с приятным аро..</p>
                            <p className="text-pink-900 font-bold">120 &#8381;</p>
                        </div>
                        <button
                            className="absolute -left-14 group opacity-0 group-hover:opacity-100 transition-all duration-300"
                        >
                            <svg
                                width="31"
                                height="31"
                                viewBox="0 0 31 31"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <rect
                                    width="31"
                                    height="31"
                                    rx="15.5"
                                    fill="#231F20"
                                    fill-opacity="0.9"
                                    className="group-hover:fill-pink-900 transition-all duration-300 group-active:fill-pink-800"
                                />
                                <path
                                    d="M10.9961 14.9062C10.7324 15.1699 10.7324 15.6094 10.9961 15.873L16.6797 21.5859C16.9727 21.8496 17.4121 21.8496 17.6758 21.5859L18.3496 20.9121C18.6133 20.6484 18.6133 20.209 18.3496 19.916L13.8379 15.375L18.3496 10.8633C18.6133 10.5703 18.6133 10.1309 18.3496 9.86719L17.6758 9.19336C17.4121 8.92969 16.9727 8.92969 16.6797 9.19336L10.9961 14.9062Z"
                                    fill="white"
                                    fill-opacity="0.8"
                                />
                            </svg>
                        </button>
                    </div>
                    <div
                        className="flex justify-center items-center p-4 border border-gray-300 rounded-xl"
                    >
                        <img src={Arrowimg2} alt="arrowimg2"/>
                        <div className="flex flex-col justify-between ml-4">
                            <p className="font-bold">Молочный коктейль с приятным аро..</p>
                            <p className="text-pink-900 font-bold">120 &#8381;</p>
                        </div>
                    </div>
                    <div
                        className="flex justify-center items-center p-4 border border-gray-300 rounded-xl relative"
                    >
                        <img src={Arrowimg3} alt="arrowimg3"/>
                        <div className="flex flex-col justify-between ml-4">
                            <p className="font-bold">Молочный коктейль с приятным аро..</p>
                            <p className="text-pink-900 font-bold">120 &#8381;</p>
                        </div>
                        <button
                            className="absolute -right-14 group opacity-0 group-hover:opacity-100 transition-all duration-300"
                        >
                            <svg
                                width="31"
                                height="31"
                                viewBox="0 0 31 31"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <rect
                                    x="31"
                                    y="31"
                                    width="31"
                                    height="31"
                                    rx="15.5"
                                    transform="rotate(-180 31 31)"
                                    fill="#231F20"
                                    fill-opacity="0.9"
                                    className="group-hover:fill-pink-900 transition-all duration-300 group-active:fill-pink-800"
                                />
                                <path
                                    d="M20.0039 16.0937C20.2676 15.8301 20.2676 15.3906 20.0039 15.127L14.3203 9.41406C14.0273 9.15039 13.5879 9.15039 13.3242 9.41406L12.6504 10.0879C12.3867 10.3516 12.3867 10.791 12.6504 11.084L17.1621 15.625L12.6504 20.1367C12.3867 20.4297 12.3867 20.8691 12.6504 21.1328L13.3242 21.8066C13.5879 22.0703 14.0273 22.0703 14.3203 21.8066L20.0039 16.0937Z"
                                    fill="white"
                                    fill-opacity="0.8"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
                <h2 className="text-pink-900 font-extrabold text-2xl py-10">
                    Соусы к бортикам и закускам?
                </h2>
                <div className="div flex justify-between gap-6">
                    <div
                        className="div space-y-5 p-4 flex flex-col justify-between items-center border border-gray-300 rounded-xl"
                    >
                        <img src={Souce1} alt="souce1"/>
                        <p className="text-lg">Сырный соус</p>
                        <p className="text-pink-900 font-bold">120 &#8381;</p>
                    </div>
                    <div
                        className="div space-y-5 p-4 flex flex-col justify-between items-center border border-gray-300 rounded-xl"
                    >
                        <img src={Souce2} alt="souce2"/>
                        <p className="text-lg">Сырный соус</p>
                        <p className="text-pink-900 font-bold">120 &#8381;</p>
                    </div>
                    <div
                        className="div space-y-5 p-4 flex flex-col justify-between items-center border border-gray-300 rounded-xl"
                    >
                        <img src={Souce3} alt="souce3"/>
                        <p className="text-lg">Сырный соус</p>
                        <p className="text-pink-900 font-bold">120 &#8381;</p>
                    </div>
                    <div
                        className="div space-y-5 p-4 flex flex-col justify-between items-center border border-gray-300 rounded-xl"
                    >
                        <img src={Souce4} alt="souce4"/>
                        <p className="text-lg">Сырный соус</p>
                        <p className="text-pink-900 font-bold">120 &#8381;</p>
                    </div>
                    <div
                        className="div space-y-5 p-4 flex flex-col justify-between items-center border border-gray-300 rounded-xl"
                    >
                        <img src={Souce5} alt="souce5"/>
                        <p className="text-lg">Сырный соус</p>
                        <p className="text-pink-900 font-bold">120 &#8381;</p>
                    </div>
                    <div
                        className="div space-y-5 p-4 flex flex-col justify-between items-center border border-gray-300 rounded-xl"
                    >
                        <img src={Souce6} alt="souce6"/>
                        <p className="text-lg">Сырный соус</p>
                        <p className="text-pink-900 font-bold">120 &#8381;</p>
                    </div>
                </div>

                <h2 className="text-pink-900 font-extrabold text-2xl py-10">Промокоды</h2>
                <div className="flex justify-between items-center mb-20">
                    <div className="flex justify-center items-center">
                        <div
                            className="p-3 px-8 border border-gray-300 rounded-l-xl flex items-center font-extrabold text-gray-400"
                        >
                            <input
                                type="text"
                                className="w-full text-center"
                                placeholder="Введите промкод"
                            />
                        </div>
                        <button
                            className="p-3 px-8 flex justify-center items-center border border-pink-900 rounded-r-xl bg-pink-900 text-white font-extrabold active:translate-y-0.5 transition-all duration-300"
                        >
                            Применить
                        </button>
                    </div>
                    <div className="flex items-center justify-end font-bold text-2xl">
                        Сумма заказа:&nbsp;
                        <snap
                            className="text-pink-900 text-3xl tracking-widest"
                        >1048 &#8381;</snap
                        >
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <button
                        className="flex group items-center text-gray-500 font-bold hover:bg-pink-900 hover:text-white px-10 py-5 rounded-xl active:translate-y-0.5 transition-all duration-300"
                    >
                        <svg
                            width="9"
                            height="14"
                            viewBox="0 0 9 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M0.996094 6.90625C0.732422 7.16992 0.732422 7.60938 0.996094 7.87305L6.67969 13.5859C6.97266 13.8496 7.41211 13.8496 7.67578 13.5859L8.34961 12.9121C8.61328 12.6484 8.61328 12.209 8.34961 11.916L3.83789 7.375L8.34961 2.86328C8.61328 2.57031 8.61328 2.13086 8.34961 1.86719L7.67578 1.19336C7.41211 0.929688 6.97266 0.929688 6.67969 1.19336L0.996094 6.90625Z"
                                fill="#6B7280"
                                fill-opacity="0.8"
                                className="group-hover:fill-white"
                            />
                        </svg>

                        &nbsp;&nbsp;&nbsp;&nbsp; Вернуться в магазин
                    </button>
                    <button
                        className="flex group items-center text-gray-500 font-bold hover:bg-pink-900 hover:text-white px-10 py-5 rounded-xl active:translate-y-0.5 transition-all duration-300"
                    >
                        Вернуться в магазин&nbsp;&nbsp;&nbsp;&nbsp;
                        <svg
                            width="7"
                            height="11"
                            viewBox="0 0 7 11"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M6.5625 5.87305C6.82617 5.60938 6.82617 5.16992 6.5625 4.87695L2.57812 0.892578C2.28516 0.628906 1.8457 0.628906 1.58203 0.892578L0.908203 1.56641C0.644531 1.85938 0.644531 2.29883 0.908203 2.5625L3.75 5.4043L0.908203 8.2168C0.644531 8.48047 0.644531 8.91992 0.908203 9.21289L1.58203 9.85742C1.8457 10.1504 2.28516 10.1504 2.57812 9.85742L6.5625 5.87305Z"
                                fill="#6B7280"
                                fill-opacity="0.8"
                                className="group-hover:fill-white"
                            />
                        </svg>
                    </button>
                </div>
            </main>

            <Footer/>

        </section>
        </div>

    )
}

export default Carzina