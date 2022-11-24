import React from "react";
import "./portfolip-item.sass";

const Item = ({pic, title, desc}) => {
    return (
        <div className="item">
            <img className="port-pic" src={process.env.PUBLIC_URL + pic} alt=""/>
            {/* <div className="port-pic"></div> */}
            <div className="port-info">
                <h2 className="port-title">{title}</h2>
                <p className="port-text">{desc}</p>
            </div>
        </div>
    )
}

export default Item;