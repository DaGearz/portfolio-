import { useState, useEffect } from "react";
import MainLayout from "../templates/MainLayout";
import LandingOverlay from "../components/LandingOverlay";
import styles from "../modules.css/Home.module.css";
import { greetings, buttonQuotes } from "../data/greetingsData";
import chooseAppData from "../data/chooseAppData.jsx";
import Default from "../components/homePageGames/Default/Default.jsx";
import DisplayPortfolio from "../components/DisplayPortfolio.jsx";
import projectsData from "../data/projectsData.jsx";
import "../index.css"

export default function Home() {
  // STATE: UI logic
  const [showOverlay, setShowOverlay] = useState(false);
  const [greeting, setGreeting] = useState(
    `Hi, my name is Todd — but online, I go by my OG gamertag: DaGearz. I’m kicking off my career as a software developer, and this site is just the beginning. Check out what I can do, and if you like what you see, don’t be shy — reach out! I’m ready to work, build, and grow with the right team.`
  );
  const [quotes, setQuotes] = useState(
    "This intro kinda sucks, not gonna lie. Smash that button and roll the dice on a better one."
  );
  const [selectedApp, setSelectedApp] = useState(() => {
    return localStorage.getItem("selectedApp") || "default";
  });
  const [name, setName] = useState(() => {
    return localStorage.getItem("name") || "User";
  });

  // EFFECT: Save selectedApp to localStorage when changed
  useEffect(() => {
    localStorage.setItem("selectedApp", selectedApp);
  }, [selectedApp]);

  // EVENT: Update name and sync with localStorage
  const handleChange = (e) => {
    const value = e.target.value;
    setName(value);
    localStorage.setItem("name", value);
  };

  // EVENT: Randomize greeting and quote
  const randomGreeting = () => {
    const indexG = Math.floor(Math.random() * greetings.length);
    const indexQ = Math.floor(Math.random() * buttonQuotes.length);
    setGreeting(greetings[indexG]);
    setQuotes(buttonQuotes[indexQ]);
  };

  return (
    <MainLayout>
      <main className={styles.Home}>
        {/* INTRO SECTION */}
        <div className={`bColor4 ${styles.homeContainer}`}>
          <div className={styles.greeting}>`{greeting}</div>
          <p>{quotes}</p>
          <button 
            onClick={randomGreeting} 
            className={styles.ranButton} 
            type="button"
          >
            Randomize
          </button>
        </div>

        {/* NAME INPUT SECTION */}
        <div className={`bColor4 ${styles.homeContainer} ${styles.clickMe}`}>
          <p>Hey, insert your name and click below.</p>
          <input 
            type="text" 
            className={styles.input}
            value={name} 
            placeholder="Insert Name" 
            onChange={handleChange}
          />
          <div>
            <span onClick={() => setShowOverlay(true)}>CLICK ME</span>
          </div>
        </div>

        {/* HIGHLIGHTED PROJECTS */}
        <div className={`bColor4 ${styles.homeContainerHigh}`}>
          <div className={styles.titleFeatured}>
            Featured Projects:
          </div>
          <div className={styles.featured}>
             {projectsData.map(project =>  project.useFeatured && <DisplayPortfolio key={project.id} projectData = {project}/>)}
          </div>
        </div>



        {/* MINI APP SELECTOR SECTION */}
        <div className={`bColor4 ${styles.homeContainer} ${styles.apps}`}>
          <div className={styles.appSelector}>
            <label htmlFor="apps">Please select a mini component to enjoy:</label>
            <select 
              id="apps" 
              value={selectedApp} 
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

        {/* OVERLAY MODAL */}
        {showOverlay && (
          <div className={styles["landing-overlay"]}>
            <LandingOverlay handleClose={() => setShowOverlay(false)} name={name} />
          </div>
        )}
      </main>
    </MainLayout>
  );
}