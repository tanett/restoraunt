
import Header from "./Action/Header";
import Main from "./Action/Main";
import Footer from "./Action/Footer";



function Action(){
    return(
        <div>
            <section className="w-5/6 py-5 m-auto relative">

                <Header/>

                <Main/>

                <Footer/>
            </section>
        </div>
    )
}

export default Action