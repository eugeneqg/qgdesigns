import React from "react";
import "./portfolio.sass";
import Item from "./portfolio-item/portfolip-item";
import { useSelector, useDispatch } from "react-redux";

const Portfolio = () => {
    const data = useSelector(state => state.data);

    const posts = data.map(post => {
        return (
            <li key={post.id}>
                    <Item pic={post.pic} desc={post.desc} title={post.title}/>
            </li>
        )
    })

    return (
        <div>
            <h1 id="portfolio" className="main-title">my portfolio</h1>
            <div className="buttons">
                <button className="portfolio-button">Mobile</button>
                <button className="portfolio-button">Web</button>
            </div>
            <div className="items">
                {posts}
            </div>
        </div>
    )
}

export default Portfolio;