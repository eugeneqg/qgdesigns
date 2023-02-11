import React, { useEffect, useRef } from "react";
import "./portfolio-modal.sass";

const PortModal = ({data, closeModal}) => {
    const modalRef = useRef();

    useEffect(() => {
        document.body.style.overflow = "hidden";

        const handler = (e) => {
            if(!modalRef.current.contains(e.target)) {
                closeModal();
            }
        } 

        window.addEventListener("mousedown", handler);
        return () => window.removeEventListener("mousedown", handler);

    }, []);

    const getLink = () => {
        if(data.link.length !== 0) {
            return (
                <a href={data.link} target="_blank"><button>Go to project</button></a>
            )
        }
    }
    
    return (
        <div className="modal-back">
            <div ref={modalRef} className="modal-front-port container">
                <div className="port-content">
                <img onClick={closeModal} className="close" src={process.env.PUBLIC_URL + "/images/close.svg"} alt="close"/>
                    <div className="right">
                        <img className="port-modal-pic" src={process.env.PUBLIC_URL + data.pic}/>
                    </div>
                    <div className="left">
                        <h1>{data.title.toUpperCase()}</h1>
                        <p>{data.desc}</p>
                        {getLink()}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PortModal;