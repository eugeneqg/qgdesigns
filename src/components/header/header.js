import React, {useEffect, useRef} from "react";
import logo from "./logo.svg";
import "./header.sass";


const Header = () => {

    const click = (e) => {
        e.preventDefault();
        if (e.target.innerText === "About me") {
            const anchor = document.querySelector('#about')
            anchor.scrollIntoView({ behavior: 'smooth', block: 'start' })
        } else if (e.target.innerText === "Portfolio") {
            const anchor = document.querySelector('#portfolio')
            anchor.scrollIntoView({ behavior: 'smooth', block: 'start' })
        } else {
            const anchor = document.querySelector('#contacts')
            anchor.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
    }
    return (
        <header className="head-container">
            <img className="logo" src={logo} alt="logo"/>
            <div className="menu-links">
                <p onClick={click} className="menu-link">About me</p>
                <p onClick={click} className="menu-link">Portfolio</p>
                <p onClick={click} className="menu-link">Contacts</p>
            </div>
        </header>
    )
}

export default Header;