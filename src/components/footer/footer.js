import React from "react";
import "./footer.sass";

const Footer = () => {

    const year = new Date().getFullYear();
    return (
        <footer>
            <div className="head-container">
                <p>Eugene QG / Eugene Sypchenko</p>
                <p>{year}</p>
            </div>
        </footer>
    )
}

export default Footer;