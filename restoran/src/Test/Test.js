
import  Mapes from "../../../../restorauntNew/restoran/src/img/map.png"
import {outAC} from "../Redusers/creatAction";
import {useDispatch} from "react-redux";
import Header from "../Components/Action/Header";
import Footer from "../Components/Action/Footer";




function Test(){



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

export  default Test