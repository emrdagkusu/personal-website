import React from "react";

import { FaMapMarkerAlt } from "@react-icons/all-files/fa/FaMapMarkerAlt";
import { BsCalendar } from "@react-icons/all-files/bs/BsCalendar";

import "../layout.css";

const EducationCard = () => {
    return (
        <div className="main-container">
            <h1 className="section-title">Education</h1>
            <div>
                <h1 className="title">Abdullah Gul University</h1>
                <h1 className="secondary-title" style={{ color: `#d32f2f` }}>B.S. IN COMPUTER ENGINEERING</h1>
                <div className="date-location">
                    <p><BsCalendar /> Sep 2018 - Jun 2023</p>
                    <p><FaMapMarkerAlt /> Kayseri, Turkey</p>
                    <p></p>
                    <p></p>
                </div>
                <p className="stack">&nbsp;CGPA: 3.87</p>
            </div>
        </div>
    )
}

export default EducationCard
