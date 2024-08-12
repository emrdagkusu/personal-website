import React from "react";

import { FaMapMarkerAlt } from "@react-icons/all-files/fa/FaMapMarkerAlt";
import { BsCalendar } from "@react-icons/all-files/bs/BsCalendar";

import "../layout.css";

const ExperiencesCard = () => {
    return (
        <div className="main-container">
            <h1 className="section-title">Experiences</h1>
            <div style={{ borderBottom: "1px dashed", marginBottom: "3em" }}>
                <h1 className="title">Software Engineer</h1>
                <a href="https://www.linkedin.com/company/aselsan/" target="_blank" rel="noreferrer" style={{ color: `#d32f2f` }}>
                    <h1 className="secondary-title">
                        ASELSAN
                    </h1>
                </a>
                <div className="date-location">
                    <p><BsCalendar /> Dec 2022 - Present</p>
                    <p><FaMapMarkerAlt /> Ankara, Turkiye</p>
                    <p></p>
                </div>
                <ul>
                    <li className="list-item">
                        <div className="skill-row">
                            Technologies: &nbsp;
                            <p className="underlined-stack">C++</p>,
                            <p className="underlined-stack">IBM Rhapsody</p>,
                            <p className="stack">Qt, QML</p>
                        </div>
                    </li>
                    <li className="list-item">
                        Contributed to the development and refinement of a tank's fire control system, showcasing skills in system optimization and enhancing overall operational efficiency.
                    </li>
                    <li className="list-item">
                        Significantly contributed to the design and development of simulation program aimed at training military crew.
                    </li>
                </ul>

            </div>

            <div style={{ borderBottom: "1px dashed", marginBottom: "3em" }}>
                <h1 className="title">Research Intern</h1>
                <a href="https://www.linkedin.com/company/barcelona-supercomputing-center/" target="_blank" rel="noreferrer" style={{ color: `#d32f2f` }}>
                    <h1 className="secondary-title">
                        Barcelona Supercomputing Center
                    </h1>
                </a>
                <div className="date-location">
                    <p><BsCalendar /> Sep 2022 - Nov 2022</p>
                    <p><FaMapMarkerAlt /> Barcelona, Spain</p>
                    <p></p>
                </div>
                <ul>
                    <li className="list-item">
                        <div className="skill-row">
                            Technologies: &nbsp;
                            <p className="underlined-stack">C++</p>,
                            <p className="stack">Gem5</p>,
                            <p className="stack">Ligra</p>
                        </div>
                    </li>
                    <li className="list-item">
                        Conducted extensive research on vector processors and formulated an accelerator design tailored for graph computing.
                    </li>
                    <li className="list-item">
                        <a href="https://drive.google.com/file/d/12keY_Z54NxV7TSjMTMtIfy3WtRczSIDa/view?usp=sharing" target="_blank" rel="noreferrer">
                            Research Report
                        </a>
                    </li>
                </ul>

            </div>
            <div>

            </div>
            <div>
                <h1 className="title">Software Engineer Intern</h1>
                <a href="https://www.gams.com/" target="_blank" rel="noreferrer" style={{ color: `#d32f2f` }}>
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
