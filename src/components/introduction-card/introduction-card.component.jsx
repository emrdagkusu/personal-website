import React from "react"
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";

import { Title, Snippet, SocialIcons, CustomIcon, Description } from "./introduction-card.styles";
import "../layout.css";

const IntroductionCard = () => {
    return (
        <div>
            <Title>Hi, I'm Emrullah.</Title>
            <Snippet>Computer Engineering Student</Snippet>
            <Description>
                As a recent graduate in Computer Engineering, I'm actively applying my skills in C++, Qt, and Rhapsody. My passion for software development drives me to contribute to cutting-edge projects and continually expand my knowledge in the field. Let's connect and explore how we can work together to drive technology forward.
            </Description>
            <SocialIcons>
                <CustomIcon href="https://www.linkedin.com/in/emrdagkusu/" target="_blank" rel="noreferrer">
                    <FaLinkedin />
                </CustomIcon>
                <CustomIcon href="https://github.com/emrdagkusu" target="_blank" rel="noreferrer">
                    <FaGithub />
                </CustomIcon>
            </SocialIcons>
        </div>
    )
}

export default IntroductionCard
