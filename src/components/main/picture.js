import React from "react";
import pic1 from "./img/11.png";
import pic2 from "./img/22.png";
import pic3 from "./img/33.png";
import "./main.sass";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Picture = () => {
    return (
        <>
            <LazyLoadImage className="banner-pic" src={pic3} alt="pic1"/>
            <LazyLoadImage className="banner-pic2" src={pic2} alt="pic2"/>
            <LazyLoadImage className="banner-pic3" src={pic1} alt="pic3"/>
        </>
    )
} 

export default Picture;