import React from "react";
import "./main.sass";
import pic1 from "./img/11.png";
import pic2 from "./img/22.png";
import pic3 from "./img/33.png";

const Main = () => {
    return (
        <div className="head-container main-banner">
            <div className="text-content">
                <p className="caption">Hi there,</p>
                <h1 className="banner-header">I'm Eugene</h1>
                <p className="subcaption">a.k.a. Eugene QG</p>
            </div>
            <img className="banner-pic" src={pic3} alt="pic1"></img>
            <img className="banner-pic2" src={pic2} alt="pic2"></img>
            <img className="banner-pic3" src={pic1} alt="pic3"></img>
        </div>
    )
}

export default Main;