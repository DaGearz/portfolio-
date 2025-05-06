import styles from "../modules.css/LandingOverLay.module.css";
import landingImage from "../assets/profilepic.jpg";
import LandingNav from "./LandingNav";
import projectsData from "../data/projectsData";
import DisplayPortfolio from "./DisplayPortfolio";

export default function LandingOverlay({ handleClose }) {
  return (
    <div className={styles["landing-overlay"]} onClick = {handleClose}>
      <img src={landingImage} onClick={e => e.stopPropagation()} alt="Professional picture of me in suit" />
      <div className={styles["overlay-main-nav"]} onClick={e => e.stopPropagation()}>
        <LandingNav handleClose={handleClose} />
        <h1>Featured Projects</h1>
        <div className={styles.featuredProjects}>
          {projectsData.map(project =>  project.usePortfolio && <DisplayPortfolio key={project.id} projectData = {project}/>)}
        </div>
      </div>
      <span className={styles.exit} onClick={handleClose}>X</span>
    </div>
  );
}
