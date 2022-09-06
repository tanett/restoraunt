import Logored from "../../img/logoRed.svg";
import Img17 from "../../img/image 17.svg";
import Img18 from "../../img/image 18.svg";
import Img19 from "../../img/image 19.svg";
import Img20 from "../../img/image 20.svg";
import Img21 from "../../img/image 21.svg";
import Img22 from "../../img/image 22.svg";
import Img23 from "../../img/image 23.svg";
import Img24 from "../../img/image 24.svg";
import Img25 from "../../img/image 25.svg";
import Bowl from "../../img/bowl.svg";


function Footer(){
    return(
        <div>
            <footer>
                <div className="flex pt-16 pb-4 justify-between flex-col lg:flex-row">

                    <div className="flex flex-col basis-7/12">

                        <div className="flex flex-col justify-between space-y-5">

                            <button className="flex items-center group">
                                <div
                                    className="flex items-center scale-110 group-hover:scale-125 transition-all duration-300"
                                >
                                    <div><img src={Logored} alt="Logored" className=""/></div>
                                </div>
                                <div className="flex flex-col justify-center items-start pl-5">
                                    <h2 className="uppercase font-extrabold text-5xl">Ya bao</h2>
                                    <h4 className="uppercase text-xs">Дух китайской еды</h4>
                                </div>
                            </button>
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
                                className="text-lg hover:text-xl transition-all duration-300 hover:text-pink-900"
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
                                    <img src={Img17} alt="img17"/>
                                </button>
                                <button
                                    className="rounded-xl py-2 border-2 border-slate-300 flex justify-center items-center hover:scale-110 transition-all duration-300"
                                >
                                    <img src={Img18} alt="img18"/>
                                </button>
                                <button
                                    className="rounded-xl py-2 border-2 border-slate-300 flex justify-center items-center hover:scale-110 transition-all duration-300"
                                >
                                    <img src={Img19} alt="img19"/>
                                </button>
                                <button
                                    className="rounded-xl py-2 border-2 border-slate-300 flex justify-center items-center hover:scale-110 transition-all duration-300"
                                >
                                    <img src={Img20} alt="img20"/>
                                </button>
                                <button
                                    className="rounded-xl py-2 border-2 border-slate-300 flex justify-center items-center hover:scale-110 transition-all duration-300"
                                >
                                    <img src={Img21} alt="img21"/>
                                </button>
                                <button
                                    className="rounded-xl py-2 border-2 border-slate-300 flex justify-center items-center hover:scale-110 transition-all duration-300"
                                >
                                    <img src={Img22} alt="img22"/>
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

                <div
                    className="flex flex-col xl:flex-row mt-20 items-center xl:gap-36 gap-10 mb-10"
                >

                    <div className="flex">
                        <h3 className="font-bold">YaBao Все права защищены 2022</h3>
                    </div>

                    <div className="flex justify-around items-center space-x-3">
                        <img src={Img23} alt="img23"/>
                        <img src={Img24} alt="img24"/>
                        <img src={Img25} alt="img25"/>
                    </div>

                    <button
                        className="flex justify-center items-center text-sm font-extrabold py-3 px-7 bg-gray-100 text-gray-500 rounded-full hover:shadow-xl transition-all duration-300 active:translate-y-0.5 active:bg-gray-200"
                    >
                        Заказать звонок
                    </button>
                </div>
                <img className="absolute -right-20 -bottom-10" src={Bowl} alt="bowl"/>
            </footer>
        </div>
    )
}

export  default Footer