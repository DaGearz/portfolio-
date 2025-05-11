import MainLayout from "../templates/MainLayout";
import styles from "../modules.css/About.module.css";
import AboutInfo from "../components/AboutInfo";
import aboutData from '../data/aboutData';


export default function About() {
  
  
    return (
      <MainLayout > 
        <main className={`bColor2 ${styles.About}`}>
          <div className={`bColor4 ${styles.introContainer}`}>
            <p>I’m a software developer with a mechanical engineering background and a passion for solving real-world problems through code. From building dynamic full-stack applications to optimizing back-end performance, I approach software like an engineer—methodical, resourceful, and driven by design. Outside the IDE, I’m often lacing up for a long run, backpacking through the mountains, or connecting with my local community. I believe personal growth and community impact go hand in hand, and I bring that same mindset to the tech I build. Click on the images below to learn more about the stories that shaped me.</p>
          </div>
          <div className={styles.aboutFlex}>
            {aboutData.map(info => info.isUse && <AboutInfo key={info.id} aboutInfo={info} />)}
          </div>
        </main>
      </MainLayout>
    );
  }
  
