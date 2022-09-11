import Header from "../Action/Header";
import Footer from "../Action/Footer";


import {useDispatch, useSelector} from "react-redux";


import Phone from "./Phone";
import {useState} from "react";
import Code from "./Code";

import Pizza from "../Pizza";
import {Navigate} from "react-router-dom";


function Login(e){

    const [isPhone, setIsPhone] = useState(true)
    // const [isCode, setIsCode] = useState(true)


    const state = useSelector(state => state.initual);




    const dispatch = useDispatch();



    return(
        <div>

            <section className="w-5/6 py-5 m-auto relative">


                <Header/>






              <main>
                  {/*{isPhone?<Phone  setIsPhone = {setIsPhone}/>: <Code/>}*/}


                  {state.auth
                      ?<Navigate to="/" replace /> //chto bi poslle avtorizaci poexala to stranica katori mi xotim(rect-router-dom - bibloteka)
                      : isPhone
                          ?<Phone setIsPhone={setIsPhone}/>
                          :<Code setIsPhone={setIsPhone}/>}


                  {/*{isCode?<Code  setIsCode = {setIsCode}/>: <Nocode/>}*/}


              </main>

                <Footer/>



            </section>

        </div>
    )
}

export default Login