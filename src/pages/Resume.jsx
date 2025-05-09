import React from 'react';
import { HashLink } from 'react-router-hash-link';
import styles from '../modules.css/Resume.module.css';
import MainLayout from "../templates/MainLayout";

const Resume = () => {
  return (
    <MainLayout>
      <div className={styles.mainContainer}>

        <div className={styles.containers}>
          <h2>Quick Links</h2>
          <ul className={styles.linkList}>
            <li><HashLink smooth to="#summary">Professional Summary</HashLink></li>
            <li><HashLink smooth to="#skills">Technical Skills</HashLink></li>
            <li><HashLink smooth to="#projects">Projects</HashLink></li>
            <li><HashLink smooth to="#experience">Professional Experience</HashLink></li>
            <li><HashLink smooth to="#military">Military Experience</HashLink></li>
            <li><HashLink smooth to="#education">Education</HashLink></li>
            <li><HashLink smooth to="#interests">Interests</HashLink></li>
            <li>
              <a
                href="https://drive.google.com/file/d/1Go0AoheDy4y1KkISa8nlwdF_wttPpSnm/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                📄 Download My Resume (PDF)
              </a>
            </li>
          </ul>
        </div>

        <div id="summary" className={styles.containers}>
          <h2>PROFESSIONAL SUMMARY</h2>
          <p>Resourceful and self-taught Full Stack Developer with a mechanical engineering background and a passion for solving real-world problems through code. Experienced in JavaScript, Node.js, Express, MongoDB, and HTML/CSS. Skilled in building dynamic full-stack applications and optimizing backend performance. Former project engineer with proven ability to manage complex systems, communicate with stakeholders, and deliver high-impact solutions. Eager to contribute to fast-paced dev teams and grow continuously in a software development role.</p>
        </div>

        <div id="skills" className={styles.containers}>
          <h1>TECHNICAL SKILLS</h1>
          <ul>
            <li><span className={styles.bold}>Languages & Frameworks:</span> JavaScript, Node.js, Express.js, HTML5, CSS3, MATLAB, React, Python</li>
            <li><span className={styles.bold}>Databases:</span> MongoDB, Mongoose</li>
            <li><span className={styles.bold}>Tools & Platforms:</span> Git, GitHub, RESTful APIs, Postman, VS Code</li>
            <li><span className={styles.bold}>Other:</span> Full-Stack App Development, Software Developer Engineering Problem Solving</li>
          </ul>
        </div>

        <div id="projects" className={styles.containers}>
          <h1>PROJECTS</h1>
          <p><strong>Portfolio Website –</strong> React, CSS Modules<br />Showcases personal brand, development projects, and contact information. Responsive design with clean, modern UI.</p>
          <p><strong>Task Tracker API –</strong> Node.js, Express, MongoDB<br />A backend RESTful API to create, update, and delete tasks with authentication and persistent storage using MongoDB.</p>
          <p><strong>Language Game App –</strong> JavaScript, HTML/CSS<br />An educational game that converts user input to Pig Latin. Uses clean form handling and real-time DOM updates.</p>
        </div>

        <div id="experience" className={styles.containers}>
          <h1>Professional Experience</h1>

          <h2><span className={styles.bold}>Utility Designer</span></h2>
          <h2>– Aquawolf LLC | San Diego, CA | 2023 – 2025</h2>
          <ul>
            <li>Delivered overhead-to-underground utility design projects across full lifecycle (10%–100%).</li>
            <li>Led client-facing initiatives, optimized design workflows, and completed high-profile infrastructure rollouts.</li>
            <li>Acted as primary drafter and technical lead for regional electric grid upgrades.</li>
          </ul>

          <h2><span className={styles.bold}>Project Engineer</span></h2>
          <h2>– WM Lyles | San Diego, CA | 2023</h2>
          <ul>
            <li>Coordinated structural and civil reviews for water treatment facilities.</li>
            <li>Conducted QA/QC of pipeline systems and ensured code compliance across builds.</li>
            <li>Used AutoCAD and Excel to optimize procurement and site execution plans.</li>
          </ul>

          <h2><span className={styles.bold}>Project Engineer</span></h2>
          <h2>– Cordoba Corporation | San Diego, CA | 2020 – 2023</h2>
          <ul>
            <li>Designed local gas distribution systems for SDGE, onboarded new engineers, and led Plant 3D transition.</li>
            <li>Automated data uploads with custom spreadsheet syntax, reducing processing time by 40%.</li>
            <li>Authored training documentation and improved team drafting productivity by 15%.</li>
          </ul>
        </div>

        <div id="military" className={styles.containers}>
          <h1>MILITARY EXPERIENCE</h1>
          <ul>
            <li>Led and trained small units in high-pressure environments.</li>
            <li>Gained critical soft skills: discipline, teamwork, leadership, and adaptability.</li>
            <li>Applied technical precision and spatial awareness daily—traits now applied to software systems and logic.</li>
          </ul>
        </div>

        <div id="education" className={styles.containers}>
          <h1>Education</h1>
          <p><span className={styles.bold}>B.S. Mechanical Engineering</span></p>
          <p>University of California, Riverside | 2011</p>
        </div>

        <div id="interests" className={styles.containers}>
          <h1>Interests</h1>
          <ul>
            <li>Outdoor adventure (backpacking, hiking, trail running)</li>
            <li>Learning new technologies & building tools for workflow automation</li>
            <li>Community-focused development & open-source collaboration</li>
          </ul>
        </div>

      </div>
    </MainLayout>
  );
};

export default Resume;
