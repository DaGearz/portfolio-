import { useState } from "react";
import MainLayout from "../templates/MainLayout";
import LandingOverlay from "../components/LandingOverlay";
import styles from "../modules.css/Home.module.css";
import { greetings, buttonQuotes } from "../data/greetingsData";
import chooseAppData from "../data/chooseAppData,js";

export default function Home() {
  const [showOverlay, setShowOverlay] = useState(false);

  const [greeting, setGreeting] = useState(`Hi, my name is Todd — but online, I go by my OG gamertag: DaGearz. I’m kicking off my career as a software developer, and this site is just the beginning. Check out what I can do, and if you like what you see, don’t be shy — reach out! I’m ready to work, build, and grow with the right team.`);
  const [quotes, setQuotes] = useState("This intro kinda sucks, not gonna lie. Smash that button and roll the dice on a better one.");

  const randomGreeting = () => {
    const indexG = Math.floor(Math.random() * greetings.length);
    const indexQ = Math.floor(Math.random() * buttonQuotes.length);
    setGreeting(greetings[indexG]);
    setQuotes(buttonQuotes[indexQ]);
  };

  return (
    <MainLayout>
      <main className={styles.Home}>
        <div className={`${styles.homeContainer}`}>
          <div>{greeting}</div>
          <p>{quotes}</p>
          <button onClick={randomGreeting} className={styles.ranButton} type="button">
            Randomize
          </button>
        </div>

        <div className={`${styles.homeContainer} ${styles.featured}`}>
          <p>Click to check out my Featured Projects</p>
          <div>
            <span onClick={() => setShowOverlay(true)}>Featured Projects</span>
          </div>
        </div>

        {showOverlay && (
          <div className={styles["landing-overlay"]}>
            <LandingOverlay handleClose={() => setShowOverlay(false)} />
          </div>
        )}
        <div className={`${styles.homeContainer} ${styles.apps}`}>
          <div className={styles.appSelector}>
            <label htmlFor="apps">Please select a mini component to enjoy:</label>
            <select id = "apps">
                <option key="0" value="default">Choose Option</option>
                  {chooseAppData.map((app) => {
                    <option key={app.id} value={app.title}>{app.title}</option>
                  })}
                  
            </select>
          </div>
          <div className={styles.visibleApp}>
            

          </div>
        </div>
      </main>
    </MainLayout>
  );
}
