import React from "react";
import "./portfolip-item.sass";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Item = ({pic, title, desc, link}) => {

    return (
        <div className="box-container">
            <LazyLoadImage effect="opacity" className="port-pic" src={process.env.PUBLIC_URL + pic} alt=""/>
        </div>
    )
}

export default Item;