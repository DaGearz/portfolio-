import React from 'react';
import styles from '../modules.css/Portfolio.module.css';
import MainLayout from "../templates/MainLayout";
import DisplayPortfolio from '../components/DisplayPortfolio';
import projectsData from '../data/projectsData';


const Portfolio = () => {
  return (
    <MainLayout >
      <div className={styles.Portfolio}>
        {projectsData.map(project =>  <DisplayPortfolio projectData = {project}/>)}
      </div>
    </MainLayout>
  )
}

export default Portfolio
