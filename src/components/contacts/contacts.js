import React from "react";
import "./contacts.sass";
import mail from "./icons/mail.svg";
import insta from "./icons/insta.svg";
import telegram from "./icons/telegram.svg";
import behance from "./icons/behance.svg";


const Contacts = () => {
    return (
        <div>
            <h1 className="main-title">My contacts</h1>
            <div className="contacts">
                <a href="mailto:evgeniisypchenko@gmail.com" className="contact">
                    <img className="icon" src={mail} alt="mail"/>
                    <p className="icon-text">Mail</p>
                </a>
                <a href="https://t.me/eugene_qg" className="contact">
                    <img className="icon" src={telegram} alt="telegram"/>
                    <p className="icon-text">Telegram</p>
                </a>
                <a href="https://instagram.com/qg__designs" className="contact">
                    <img className="icon" src={insta} alt="instagram"/>
                    <p className="icon-text">Instagram</p>
                </a>
                <a href="https://www.behance.net/eugene_qg" className="contact">
                    <img className="icon" src={behance} alt="behance"/>
                    <p className="icon-text">Behance</p>
                </a>
            </div>
        </div>
    )
}

export default Contacts;