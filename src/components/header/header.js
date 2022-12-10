import React, {useEffect, useState} from "react";
import logo from "./logo.svg";
import "./header.sass";


const Header = ({openMobileMenu, isMobileMenuOpen, click}) => {

    const [isMobile, setMobile] = useState(false);

    useEffect(() => {

        if (window.innerWidth < 780) {
            setMobile(true)
        }

    }, [isMobile])

    const showMenu = () => {
        if (isMobile) {
            return (
                <img onClick={() => openMobileMenu(!isMobileMenuOpen)} src={process.env.PUBLIC_URL + "/images/menu.svg"} alt="menu"></img>
            )
        } else {
            return (
                <div className="menu-links">
                    <p onClick={click} className="menu-link">About me</p>
                    <p onClick={click} className="menu-link">Portfolio</p>
                    <p onClick={click} className="menu-link">Contacts</p>
                </div>
            )
        }
    }
    
    return (
        <header className="head-container">
            <img className="logo" src={logo} alt="logo"/>
            {showMenu()}
        </header>
    )
}

export default Header;