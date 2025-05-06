import { useState } from "react";
import MainLayout from "../templates/MainLayout";
import LandingOverlay from "../components/LandingOverlay";
import styles from "../modules.css/Home.module.css";
import { greetings, buttonQuotes } from "../data/greetingsData";
import chooseAppData from "../data/chooseAppData.jsx";
import Default from "../components/homePageGames/Default.jsx";

export default function Home() {
  const [showOverlay, setShowOverlay] = useState(false);
  const [greeting, setGreeting] = useState(`Hi, my name is Todd — but online, I go by my OG gamertag: DaGearz. I’m kicking off my career as a software developer, and this site is just the beginning. Check out what I can do, and if you like what you see, don’t be shy — reach out! I’m ready to work, build, and grow with the right team.`);
  const [quotes, setQuotes] = useState("This intro kinda sucks, not gonna lie. Smash that button and roll the dice on a better one.");
  const [selectedApp, setSelectedApp] = useState(null);
  const [name, setName] = useState(() => {
    return localStorage.getItem("name") || "User";
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setName(value);
    localStorage.setItem("name", value);
  };

  const randomGreeting = () => {
    const indexG = Math.floor(Math.random() * greetings.length);
    const indexQ = Math.floor(Math.random() * buttonQuotes.length);
    setGreeting(greetings[indexG]);
    setQuotes(buttonQuotes[indexQ]);
  };

  return (
    <MainLayout>
      <main className={styles.Home}>
        <div className={styles.homeContainer}>
          <div className={styles.greeting}>{greeting}</div>
          <p>{quotes}</p>
          <button onClick={randomGreeting} className={styles.ranButton} type="button">
            Randomize
          </button>
        </div>

        <div className={`${styles.homeContainer} ${styles.featured}`}>
          <p>Hey, insert your name and click below.</p>
          <input 
            type="text" 
            value={name} 
            placeholder="Insert Name" 
            onChange={handleChange}
          />
          <div>
            <span onClick={() => setShowOverlay(true)}>CLICK ME</span>
          </div>
        </div>

        <div className={`${styles.homeContainer} ${styles.apps}`}>
          <div className={styles.appSelector}>
            <label htmlFor="apps">Please select a mini component to enjoy:</label>
            <select 
              id="apps" 
              defaultValue="default" 
              onChange={(e) => setSelectedApp(e.target.value)}
            >
              <option key="0" value="default">Choose Option</option>
              {chooseAppData.map((app) => (
                <option key={app.id} value={app.title}>{app.title}</option>
              ))}
            </select>
          </div>

          <div className={styles.visibleApp}>
            {chooseAppData.find(app => app.title === selectedApp)?.code || <Default />}
          </div>
        </div>

        {showOverlay && (
          <div className={styles["landing-overlay"]}>
            <LandingOverlay handleClose={() => setShowOverlay(false)} name={name} />
          </div>
        )}
      </main>
    </MainLayout>
  );
}
