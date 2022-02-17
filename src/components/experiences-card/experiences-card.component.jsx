import React from "react";

import { FaMapMarkerAlt } from "@react-icons/all-files/fa/FaMapMarkerAlt";
import { BsCalendar } from "@react-icons/all-files/bs/BsCalendar";

import "../layout.css";

const ExperiencesCard = () => {
    return (
        <div className="main-container">
            <h1 className="section-title">Experiences</h1>
            <div>
                <h1 className="title">Software Engineer Intern</h1>
                <a href="https://www.gams.com/" target="_blank" rel="noreferrer" style={{color: `#d32f2f`}}>
                    <h1 className="secondary-title">
                        GAMS Software GmbH
                    </h1>
                </a>
                <div className="date-location">
                    <p><BsCalendar /> June 2021 - Sep 2021</p>
                    <p><FaMapMarkerAlt /> Braunschweig, Germany</p>
                    <p></p>
                </div>
                <ul>
                    <li className="list-item">
                        <div className="skill-row">
                            Technologies: &nbsp;
                            <a href="https://www.gams.com/latest/docs/" target="_blank" rel="noreferrer">
                                <p className="underlined-stack">GAMS</p>
                            </a>, 
                            <p className="underlined-stack">Python</p>, 
                            <p className="stack">NumPy</p>, 
                            <p className="stack">Pandas</p>, 
                            <p className="stack">Qiskit</p> 
                        </div>
                    </li>
                    <li className="list-item">
                        Developed data connectors in Python for the emerging product of GAMS called GAMS Connect.
                    </li>
                    <li className="list-item">
                        Developed experimental connections between GAMS Mathematical Optimization and Quantum
                        Computing facilities mainly based on the IBM Qiskit framework.
                    </li>
                </ul>
                
            </div>
            <div>

            </div>
            
        </div>
    )
}

export default ExperiencesCard
