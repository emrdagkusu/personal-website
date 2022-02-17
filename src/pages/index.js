import React from "react"

import Layout from "../components/Layout"
import IntroductionCard from "../components/introduction-card/introduction-card.component"
import ExperiencesCard from "../components/experiences-card/experiences-card.component"
import ProjectsCard from "../components/projects-card/projects-card.component"
import TechnologyStackCard from "../components/technology-stack-card/tech-stack-card.component"
import EducationCard from "../components/education-card/education-card.component"

const Home = () => {
  return (
    <Layout>
      <IntroductionCard />
      <ExperiencesCard />
      <EducationCard />
      <ProjectsCard />
      <TechnologyStackCard />
    </Layout>
  )
}

export default Home
