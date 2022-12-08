import React, {useEffect, useRef} from "react";
import "./ui-modal.sass";

const UIModal = ({closeModal}) => {

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

    }, [])
    return (
        <div className="modal-back">
            <div ref={modalRef} className="modal-ui container">
            <img onClick={closeModal} className="close" src={process.env.PUBLIC_URL + "/images/close.svg"} alt="close"/>
                <div className="modal-content">
                    <div className="modal-title">
                        <h1>UI <span>/</span> UX DESIGNER</h1>
                    </div>
                    <div className="skills-content">
                        <h2>MAIN SKILLS</h2>
                        <ul className="skills">
                            <li>
                                <p>Figma</p>
                                <div className="skill">
                                    <div className="figma"/>
                                </div>
                            </li>
                            <li>
                                <p>Photoshop</p>
                                <div className="skill">
                                    <div className="photoshop"/>
                                </div>
                            </li>
                            <li>
                                <p>Illustrator</p>
                                <div className="skill">
                                    <div className="illustrator"/>
                                </div>
                            </li>
                        </ul>
                        <h2><span>&</span>OTHER SKILLS</h2>
                        <div className="other-skills">
                            <div className="other-skill">
                                <p>User Flow</p>
                            </div>
                            <div className="other-skill">
                                <p>Wireframing</p>
                            </div>
                            <div className="other-skill">
                                <p>Prototyping</p>
                            </div>
                            <div className="other-skill">
                                <p>Sketch</p>
                            </div>
                            <div className="other-skill">
                                <p>CJM</p>
                            </div>
                            <div className="other-skill">
                                <p>Principle</p>
                            </div>
                            <div className="other-skill">
                                <p>Personas</p>
                            </div>
                            <div className="other-skill">
                                <p>Miro</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UIModal;

 