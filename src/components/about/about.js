import React from "react";
import "./about.sass";
import pic1 from "./img/1.png";
import pic2 from "./img/2.png";
import pic3 from "./img/3.png";

const About = () => {

    return (
        <div id="about">
            <h1 className="main-title">About me</h1>
            <div className="about-block">
                <p className="about-text">My name is Eugene Sypchenko. I’m a frontend-developer and a UI/UX designer. I’m 26 years old. </p>
            </div>
            <div className="blocks">
                <div className="block-front">
                    <p className="block-text">Frontend-developer</p>
                </div>
                <div className="block-ui">
                    <p className="block-text">UI designer</p>
                </div>
                <div className="block-ux">
                    <p className="block-text">UX researcher</p>
                </div>
            </div>
        </div>
    )
}

export default About;