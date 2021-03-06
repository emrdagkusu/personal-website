import React from "react";

import "../layout.css";
import { ProjectContainer } from "./projects-card.styles";

const ProjectsCard = () => {
    return (
        <div className="main-container">
            <h1 className="section-title">Projects</h1>
            <ProjectContainer>
                <a href="https://github.com/hbusul/kucukdev_api" 
                target="_blank" rel="noreferrer" style={{color: `black`}}>
                    <h1 className="title">Kucukdev</h1>
                </a>
                <h1 className="secondary-title" style={{color: `#d32f2f`}}>
                    Assistant for university students
                </h1>
                <ul>
                    <li className="list-item">
                        <div className="skill-row">
                            Technologies: Docker, Python FastAPI, Pytest, Uvicorn, React.js
                        </div>
                    </li>
                    <li className="list-item">
                        Track attendance, pick lessons in a way that they don't conflict. 
                        See schedule and overview of the week.
                    </li>
                </ul>
            </ProjectContainer>
            <ProjectContainer>
                <a href="https://github.com/emrdagkusu/G-Know" 
                target="_blank" rel="noreferrer" style={{color: `black`}}>
                    <h1 className="title">G-Know</h1>
                </a>
                <h1 className="secondary-title" style={{color: `#d32f2f`}}>
                    Flutter application that notifies about the user’s GitHub account
                </h1>
                <ul>
                    <li className="list-item">
                        <div className="skill-row">
                            Technologies: Dart, Flutter, Firebase, FireStore, Github API 
                        </div>
                    </li>
                    <li className="list-item">
                        Get notiﬁcation about your GitHub account. 
                        Create a list with favorite users and notify about their changes at GitHub.
                    </li>
                </ul>
            </ProjectContainer>
            <ProjectContainer>
                <a href="https://github.com/emrdagkusu/Auto-Grading-System" 
                target="_blank" rel="noreferrer" style={{color: `black`}}>
                    <h1 className="title">Auto Grading System</h1>
                </a>
                <h1 className="secondary-title" style={{color: `#d32f2f`}}>
                    Auto grading system for universities with online code editor
                </h1>
                <ul>
                    <li className="list-item">
                        <div className="skill-row">
                            Technologies: Docker, Python, FastAPI, React.js, Tailwind.css, Judge0 API
                        </div>
                    </li>
                    <li className="list-item">
                        Create assignments, test cases if professor. 
                        Solve assignments and see auto calculated grades right after if student.
                    </li>
                </ul>
            </ProjectContainer>
            <ProjectContainer>
                <a href="https://github.com/emrdagkusu/library" 
                target="_blank" rel="noreferrer" style={{color: `black`}}>
                    <h1 className="title">Library</h1>
                </a>
                <h1 className="secondary-title" style={{color: `#d32f2f`}}>
                    Library website that helps to arrange/track books
                </h1>
                <ul>
                    <li className="list-item">
                        <div className="skill-row">
                            Technologies: Python, Flask, SQLAlchemy, SQLite
                        </div>
                    </li>
                    <li className="list-item">
                        Add and delete books from your shelf.
                        See the books by ﬁlters (year, author).
                        Add summary of books and opinions about books.
                    </li>
                </ul>
            </ProjectContainer>
        </div>
    )
}

export default ProjectsCard
