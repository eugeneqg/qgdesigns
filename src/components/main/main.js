import React, { useState, useEffect } from "react";
import "./main.sass";
import Picture from "./picture";
// import pic1 from "./img/11.png";
// import pic2 from "./img/22.png";
// import pic3 from "./img/33.png";

const Main = () => {

    const [isShown, setIsShown] = useState(false);

    useEffect(() => {

        setTimeout(() => {
            setIsShown(true);
            document.querySelector(".banner-pic").classList.add("shown")
        }, 200);

        setTimeout(() => {
            document.querySelector(".banner-pic2").classList.add("shown")
        }, 600)

        setTimeout(() => {
            document.querySelector(".banner-pic3").classList.add("shown")
        }, 1000)

    }, [isShown])

    const picture = isShown ? <Picture/> : null;

    return (
        <div className="head-container main-banner">
            <div className="text-content">
                <p className="caption">Hi there,</p>
                <h1 className="banner-header">I'm Eugene</h1>
                <p className="subcaption">a.k.a. Eugene QG</p>
            </div>
            {picture}
            {/* <img className="banner-pic" src={pic3} alt="pic1"></img>
            <img className="banner-pic2" src={pic2} alt="pic2"></img>
            <img className="banner-pic3" src={pic1} alt="pic3"></img> */}
        </div>
    )
}

export default Main;