import React, { useState, useEffect } from "react";
import "./main.sass";
import Picture from "./picture";

const Main = () => {

    const [isShown, setIsShown] = useState(false);

    useEffect(() => {

        setTimeout(() => {
            setIsShown(true);
            document.querySelector(".banner-pic").classList.add("shown");
        }, 200);

        setTimeout(() => {
            document.querySelector(".banner-pic2").classList.add("shown");
        }, 600)

        setTimeout(() => {
            document.querySelector(".banner-pic3").classList.add("shown");
        }, 1000)

    }, [isShown])

    const picture = isShown ? <Picture/> : null;

    return (
        <div className="head-container main-banner">
            <div className="text-content">
                <p className="caption">HELLO I AM A</p>
                <h1 className="banner-header">UI / UX <span className="color">DESIGNER</span> <span>&</span> 
                    FRONTEND <span className="color">DEVELOPER</span></h1>
            </div>
            {picture}
        </div>
    )
}

export default Main;