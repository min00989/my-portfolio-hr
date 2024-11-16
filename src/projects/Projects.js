import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import ProjectsContent from "./ProjectsContent";

function Projects() {
    return(
        <div>
            <div>
                <Header/>
            </div>
            <div>
                <ProjectsContent/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}

export default Projects;