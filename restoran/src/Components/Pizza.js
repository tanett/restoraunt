import Header from "./Action/Header";
import Footer from "./Action/Footer";
import Pizzamain from "./Pizza/Pizzamain";



function Pizza(){
    return(
        <div>
            <section className="w-5/6 py-5 m-auto relative">

                <Header/>

                <Pizzamain/>

                <Footer/>
            </section>
        </div>
    )
}

export  default Pizza