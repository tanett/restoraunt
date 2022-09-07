


function Login2(){
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
                            <div className="text-gray-500">+7 999 999-99-99</div>
                            <button
                                className="text-pink-900 text-sm border-dashed border-b-2 border-pink-900 hover:scale-110 transition-all duration-300"
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
                            <input type="tel" className="border-none w-20"/>
                        </div>
                        <button
                            className="text-pink-900 text-sm border-dashed border-b-2 border-pink-900 hover:scale-110 transition-all duration-300"
                        >
                            Получить новый код
                        </button>
                    </div>
                    <button
                        className="rounded-full absolute -right-14 -top-6 hover:bg-pink-900 active:translate-y-0.5 transition-all duration-300"
                    >
                        <img src="../img/autorizationButton.svg" alt=""/>
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Login2