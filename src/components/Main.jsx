import React from "react";
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"
import Create_s from "./Create_s"


const Main = () => {
    return (
        <div className="Main">
            <section id="home">
                <Home/>
            </section>
            <section id="about">
                <About/>
            </section>
            <section id="create_s">
                <Create_s/>
            </section>
            <section id="contact">
                <Contact/>
            </section>
        </div>
    )
}
export default Main