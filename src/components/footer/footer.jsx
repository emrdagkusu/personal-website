import React from "react";

import CV from "../../../static/Emrullah_Dagkusu_CV.pdf";

const Footer = () => {
    return (
        <footer className="footer">
            <div style={{marginTop: `auto`}}>
                <a href={CV} download="Emrullah_Dagkusu_CV" style={{ color: `black` }}>Download CV</a>
            </div>
            <div style={{textAlign: `end`}}>
                <p>© {new Date().getFullYear() + " "} Emrullah Dağkuşu</p>
                <a href="mailto:emrdagkusu@gmail.com" style={{ color: `black` }}>
                    emrdagkusu@gmail.com
                </a>
            </div>
            
        </footer>
    )
}

export default Footer
