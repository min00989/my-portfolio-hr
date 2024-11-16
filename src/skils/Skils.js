import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import SkilsContent from "./SkilsContent";

function Skils() {
    return(
        <div>
            <div>
                <Header/>
            </div>
            <div>
                <SkilsContent/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}

export default Skils;