import React, {useEffect, useRef} from "react";
import "./frontend-modal.sass";

const Frontend = ({closeModal}) => {

    const modalRef = useRef();

    useEffect(() => {
        document.body.style.overflow = "hidden";

        const handler = (e) => {
            if(!modalRef.current.contains(e.target)) {
                console.log("outside");
                closeModal();
            } else {
                console.log("inside")
            }
        } 

        window.addEventListener("mousedown", handler);
        return () => window.removeEventListener("mousedown", handler);

    }, []);
    
    return (
        <div className="modal-back">
            <div ref={modalRef} className="modal-front container">
            <img onClick={closeModal} className="close" src={process.env.PUBLIC_URL + "images/close.svg"} alt="close"/>
                <div className="modal-content">
                    <div className="modal-title">
                        <h1>FRONTEND-DEVELOPER</h1>
                    </div>
                    <div className="skills-content">
                        <h2>MAIN SKILLS</h2>
                        <ul className="skills">
                            <li>
                                <p>JavaScript</p>
                                <div className="skill">
                                    <div className="js"/>
                                </div>
                            </li>
                            <li>
                                <p>React</p>
                                <div className="skill">
                                    <div className="react"/>
                                </div>
                            </li>
                            <li>
                                <p>HTML</p>
                                <div className="skill">
                                    <div className="html"/>
                                </div>
                            </li>
                            <li>
                                <p>CSS</p>
                                <div className="skill">
                                    <div className="css"/>
                                </div>
                            </li>
                        </ul>
                        <h2><span>&</span>OTHER SKILLS</h2>
                        <div className="other-skills">
                            <div className="other-skill">
                                <p>TypeScript</p>
                            </div>
                            <div className="other-skill">
                                <p>GIT</p>
                            </div>
                            <div className="other-skill">
                                <p>WebPack</p>
                            </div>
                            <div className="other-skill">
                                <p>NPM</p>
                            </div>
                            <div className="other-skill">
                                <p>JQuery</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Frontend;

 