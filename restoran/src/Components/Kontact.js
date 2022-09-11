

import Header from "./Action/Header";
import Mapes from "../img/map.png";
import Footer from "./Action/Footer";



function Kontact(){
    return(
        <div>
            <section className="w-5/6 py-5 m-auto relative">
                <Header/>


                <main>
                    <button className="map h-96 border">
                        <img src={Mapes} alt="map"/>
                    </button>

                </main>



                <Footer/>
            </section>
        </div>
    )
}

export  default Kontact