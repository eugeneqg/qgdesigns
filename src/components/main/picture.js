import React from "react";
import pic1 from "./img/11.png";
import pic2 from "./img/22.png";
import pic3 from "./img/33.png";
import "./main.sass";

const Picture = () => {
    return (
        <>
            <img className="banner-pic" src={pic3} alt="pic1"></img>
            <img className="banner-pic2" src={pic2} alt="pic2"></img>
            <img className="banner-pic3" src={pic1} alt="pic3"></img>
        </>
    )
} 

export default Picture;