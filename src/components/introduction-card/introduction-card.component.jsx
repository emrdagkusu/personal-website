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
                I am a third-year student at Abdullah Gül University in Turkey, currently studying Computer Engineering. 
                I'm interested in backend services with <p className="underlined-stack">Python</p> and I have some experience 
                in the fields of mobile and web development. Indeed, I'm very open to discovering different fields. 
                Even though I don't have much experience, I'm interested in DevOps tools 
                such as <p className="underlined-stack">Docker</p> and <p className="underlined-stack">Kubernetes</p>.
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
