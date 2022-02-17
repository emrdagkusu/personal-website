import React from "react";

import { BsCodeSlash } from "@react-icons/all-files/bs/BsCodeSlash";
import { FaCogs } from "@react-icons/all-files/fa/FaCogs";
import { FaDatabase } from "@react-icons/all-files/fa/FaDatabase";

import "../layout.css";
import { SkillIcon, SkillBlock } from "./tech-stack-card.styles";

const TechnologyStackCard = () => {
    return (
        <div className="main-container">
            <h1 className="section-title">Technology Stack</h1>
            <div>
                <SkillBlock>
                    <h1 className="title">
                        <SkillIcon>
                            <BsCodeSlash  />
                        </SkillIcon> Languages: 
                    </h1>
                    <div className="skill-row">
                        <p className="underlined-stack">Python</p>,
                        <p className="underlined-stack">Java</p>,
                        <p className="stack">Javscript</p>,
                        <p className="stack">Dart</p>,
                        <p className="stack">HTML/CSS</p>
                    </div>
                </SkillBlock>
                <SkillBlock>
                    <h1 className="title">
                        <SkillIcon>
                            <FaCogs />
                        </SkillIcon> Frameworks & Tools: 
                    </h1>
                    <div className="skill-row">
                        <p className="underlined-stack">Git</p>,
                        <p className="underlined-stack">Docker</p>,
                        <p className="underlined-stack">FastAPI</p>, 
                        <p className="stack">Flask</p>, 
                        <p className="stack">Node.js</p>, 
                        <p className="underlined-stack">React.js</p>, 
                        <p className="underlined-stack">Gatsby.js</p>, 
                        <p className="stack">Flutter</p>,
                        <p className="stack">Express.js</p>,
                        <p className="stack">Firebase</p> 
                    </div>
                </SkillBlock>
                <SkillBlock>
                <h1 className="title">
                        <SkillIcon>
                            <FaDatabase />
                        </SkillIcon> Databases: 
                    </h1>
                    <div className="skill-row">
                        <p className="underlined-stack">MongoDB</p>, 
                        <p className="stack">MySQL</p>, 
                        <p className="stack">SQLite</p>, 
                        <p className="stack">PostgreSQL</p> 
                    </div>
                </SkillBlock>
            </div>
        </div>
    )
}

export default TechnologyStackCard
