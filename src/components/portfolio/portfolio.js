import React, { useState } from "react";
import "./portfolio.sass";
import Item from "./portfolio-item/portfolip-item";
import { useSelector } from "react-redux";

const Portfolio = ({getData}) => {
    const mobileData = useSelector(state => state.mobile.data);
    const webData = useSelector(state => state.web.data);

    const [postType, setPostType] = useState("mobile");

    const changeType = (e) => {
        const buttons = document.querySelectorAll(".portfolio-button");
        buttons.forEach(button => button.classList.remove("active"));
        setPostType(e.target.textContent.toLowerCase());
        e.target.classList.add("active");
    }

    const changePosts = () => {
        if (postType === "mobile") {
            const posts = mobileData.map(post => {
                return (
                    <div onClick={() => getData(mobileData, post.id)} key={post.id}>
                            <Item pic={post.pic} desc={post.desc} title={post.title} link={post.link}/>
                    </div>
                )
            })

            return posts
        } else {
            const posts = webData.map(post => {
                return (
                    <div onClick={() => getData(webData, post.id)} key={post.id}>
                            <Item pic={post.pic} desc={post.desc} title={post.title} link={post.link}/>
                    </div>
                )
            })

            return posts
        }
    }

    return (
        <div>
            <h1 id="portfolio" className="main-title">PORTFOLIO</h1>
            <div className="buttons">
                <button onClick={changeType} className="portfolio-button active">Mobile</button>
                <button onClick={changeType} className="portfolio-button">Web</button>
            </div>
            <div className="items">
                {changePosts()}
            </div>
        </div>
    )
}

export default Portfolio;