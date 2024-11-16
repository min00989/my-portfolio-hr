import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import HomeMain from "./HomeMain";

function Home(){
    return(
        <div>
            <div>
                <Header/>
            </div>
            <div>
                <HomeMain/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}

export default Home;