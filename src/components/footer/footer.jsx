import React from "react";


const Footer = () => {
    return (
        <footer className="footer">
            <p>© {new Date().getFullYear() + " "} Emrullah Dağkuşu</p>
            <a href="mailto:emrdagkusu@gmail.com" style={{ color: `black` }}>
                emrdagkusu@gmail.com
            </a>
        </footer>
    )
}

export default Footer
