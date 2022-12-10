import React from "react";
import "./portfolip-item.sass";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Item = ({pic, title, desc, link}) => {

    const showButton = () => {

        if (link.length !== 0) {
            return (
                <button className="port-link"><a href={link}>Check it out</a></button>
            )
        }

    }

    return (
        <div className="box-container">
            <LazyLoadImage className="port-pic" src={process.env.PUBLIC_URL + pic} alt=""/>
        </div>
    )
}

export default Item;