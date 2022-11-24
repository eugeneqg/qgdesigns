import React, {useEffect, useRef} from "react";
import logo from "./logo.svg";
import "./header.sass";


const Header = () => {

    const aboutRef = useRef();
    const portfolioRef = useRef();
    const contactsRef = useRef();

    const click = (e) => {
        e.preventDefault();
        console.log(e)
        const anchor = document.querySelector('#about')
        anchor.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    return (
        <header className="head-container">
            <img className="logo" src={logo} alt="logo"/>
            <div className="menu-links">
                <a className="menu-link" href="/">Main</a>
                <a onClick={click} className="menu-link" href="/about">About me</a>
                <a onClick={click} className="menu-link" href="/portfolio">Portfolio</a>
                <a className="menu-link" href="/contacts">Contacts</a>
            </div>
        </header>
    )
}

export default Header;