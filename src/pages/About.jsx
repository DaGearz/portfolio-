import MainLayout from "../templates/MainLayout";
import LandingOverlay from "../components/LandingOverlay";
import styles from "../modules.css/About.module.css";
import AboutInfo from "../components/AboutInfo";


// ✅ Imported images
import BackPacker from "../assets/aboutpictures/BackPacker.JPG";
import AvidHiker from "../assets/aboutpictures/AvidHiker.JPG";
import Soldier from "../assets/aboutpictures/soldier.JPG";
import NativeHabit from "../assets/aboutpictures/NativeHabit.JPG";
import DailyRunner from "../assets/aboutpictures/DailyRunner.png";
import FamilyAndFriends from "../assets/aboutpictures/FamilyAndFriends.jpg";

export default function About({ navVariables }) {
    const aboutInfoArray = [
      { id: 1, title: `All Weather Explorer`, img: BackPacker, alt: `sitting in chair`, description: `I’m an avid backpacker...`, isUse: true },
      { id: 2, title: `Peak Seeker`, img: AvidHiker, alt: `Top of Cuyamaca Peak`, description: `Hiking is more than a hobby...`, isUse: true },
      { id: 3, title: `Proud Soldier`, img: Soldier, alt: `in military attire`, description: `Before I became a developer...`, isUse: true },
      { id: 4, title: `Natural Habitat`, img: NativeHabit, alt: `gym mirror`, description: `When I’m not out on the trail...`, isUse: true },
      { id: 5, title: `Relentless Runner`, img: DailyRunner, alt: `Garmin app`, description: `I believe in consistency...`, isUse: true },
      { id: 6, title: `Chosen and Givin'`, img: FamilyAndFriends, alt: `selfie with girlfriend`, description: `The best part of life...`, isUse: true },
    ];
  
    return (
      <MainLayout navVariables={navVariables}> 
        <div className={styles.introContainer}>
          <p>I’m a software developer with a mechanical engineering background and a passion for solving real-world problems through code. From building dynamic full-stack applications to optimizing back-end performance, I approach software like an engineer—methodical, resourceful, and driven by design. Outside the IDE, I’m often lacing up for a long run, backpacking through the mountains, or connecting with my local community. I believe personal growth and community impact go hand in hand, and I bring that same mindset to the tech I build. Click on the images below to learn more about the stories that shaped me.</p>
        </div>
        <div className={styles.aboutFlex}>
          {aboutInfoArray.map(info => info.isUse && <AboutInfo key={info.id} aboutInfo={info} />)}
        </div>
      </MainLayout>
    );
  }
  
