import React from 'react';
import styles from '../modules.css/Portfolio.module.css';
import MainLayout from "../templates/MainLayout";
import DisplayPortfolio from '../components/DisplayPortfolio';
import projectsData from '../data/projectsData';


const Portfolio = () => {
  return (
    <MainLayout >
      <main className={`bColor2 ${styles.Portfolio}`}>
        {projectsData.map(project =>  project.usePortfolio && <DisplayPortfolio key={project.id} projectData = {project}/>)}
      </main>
    </MainLayout>
  )
}

export default Portfolio
