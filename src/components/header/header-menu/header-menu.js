import React from "react";
import "./header-menu.sass";

const MobileMenu = ({openMobileMenu, closeModal, click}) => {
    const handler = (e) => {
        click(e);
        closeModal();
    }
    return (
        <div className="mobile-back">
                    <div className="mobile-menu">
            <div className="mobile-links">
            <img onClick={closeModal} className="close-modal" src={process.env.PUBLIC_URL + "images/close.svg"} alt="close"/>
                    <p onClick={handler} className="menu-link">About me</p>
                    <p onClick={handler} className="menu-link">Portfolio</p>
                    <p onClick={handler} className="menu-link">Contacts</p>
            </div>
        </div>
        </div>
    )
}

export default MobileMenu;