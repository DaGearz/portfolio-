import { useState } from "react";
import MainLayout from "../templates/MainLayout";
import LandingOverlay from "../components/LandingOverlay";
import styles from "../modules.css/Home.module.css";
import {greetings, buttonQuotes} from "../data/greetingsData"

export default function Home() {
  const [showOverlay, setShowOverlay] = useState(true); // default: visible

  const [greeting , setGreeting] = useState(`Hi, my name is Todd — but online, I go by my OG gamertag: DaGearz. I’m kicking off my career as a software developer, and this site is just the beginning. Check out what I can do, and if you like what you see, don’t be shy — reach out! I’m ready to work, build, and grow with the right team.
`)
  const [qoutes, setQoutes] = useState("This intro kinda sucks, not gonna lie. Smash that button and roll the dice on a better one."
)
  
  const randomGreeting = () => {
    const index = Math.floor(Math.random() * greetings.length);
    setGreeting(greetings[index]);
    setQoutes(buttonQuotes[index])
  }

  const handleOpen = () => {
    setShowOverlay(true)
  }

  return (
    <MainLayout>
      <main className={styles.Home}>

        <div className={`${styles.homeContainer}`}>
          <div>{greeting}</div>
          <p>{qoutes}</p>
          <button onClick={randomGreeting} className={styles.ranButton} type="button">
            Randomize
          </button>
        </div>
        <div className={`${styles.homeContainer} ${styles.featured}`}>
            <p>Click to check out my Featured Projects</p>
            <div><span onClick= {handleOpen}>Featured Projects</span></div>
        </div>

        
        {showOverlay && (
          <div className={styles["landing-overlay"]}>
            <LandingOverlay handleClose={() => setShowOverlay(false)} />
          </div>
        )}
      </main>
      
    </MainLayout>
  );
}