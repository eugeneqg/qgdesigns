import React, {useEffect, useRef} from "react";
import "../../modal.sass";

const UIModal = ({closeModal}) => {

    const modalRef = useRef();

    useEffect(() => {
        document.body.style.overflow = "hidden";

        const handler = (e) => {
            if(!modalRef.current.contains(e.target)) {
                console.log("outside");
                closeModal();
                document.body.style.overflow = "auto";
            } else {
                console.log("inside")
            }
        } 

        window.addEventListener("mousedown", handler);
        return () => window.removeEventListener("mousedown", handler);

    }, [])
    return (
        <div className="modal-back">
            <div ref={modalRef} className="modal container">
                <div className="modal-content">
                    <div className="modal-title">
                        <h1>FRONTEND-DEVELOPER</h1>
                    </div>
                    <div className="skills-content">
                        <h2>main skills</h2>
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
                        <h2><span>&</span>other skills</h2>
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

export default UIModal;

 