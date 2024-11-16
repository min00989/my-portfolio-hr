import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import AboutContent from "./AboutContent";

function Home(){
    return(
        <div>
            <div>
                <Header/>
            </div>
            <div>
                <AboutContent/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}

export default Home;