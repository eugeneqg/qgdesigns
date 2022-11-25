import React from "react";
import "./about.sass";

const About = ({openModal}) => {

    return (
        <div id="about">
            <h1 className="main-title">about me</h1>
            <div className="about-block">
                <p className="about-text">My name is Eugene Sypchenko. I’m a frontend-developer and a UI/UX designer. I’m 26 years old.</p>
            </div>
            <div className="blocks">
                <div onClick={openModal} className="block-front">
                    <p className="block-text">Frontend-developer</p>
                </div>
                <div onClick={openModal} className="block-ui">
                    <p className="block-text">UI designer</p>
                </div>
                <div onClick={openModal} className="block-ux">
                    <p className="block-text">UX researcher</p>
                </div>
            </div>
        </div>
    )
}

export default About;