import React from "react";
import "./about.sass";

const About = ({openModal, setClass}) => {
    const handler = (e) => {
        setClass(e.target.id);
        openModal();
    }
    return (
        <div id="about">
            <h1 className="main-title">ABOUT ME</h1>
            <div className="about-block">
                <p className="about-text">My name is Eugene Sypchenko. I’m 26 years old. I’m a frontend-developer and a UI/UX designer.</p>
            </div>
            <div className="blocks">
                <div id="block-front" onClick={handler} className="block-front">
                    <p id="block-front" className="block-text">Frontend-developer</p>
                </div>
                <div id="block-ui" onClick={handler} className="block-ui">
                    <p id="block-ui" className="block-text">UI/UX designer</p>
                </div>
            </div>
        </div>
    )
}

export default About;