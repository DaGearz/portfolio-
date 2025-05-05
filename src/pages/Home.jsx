import { useState } from "react";
import MainLayout from "../templates/MainLayout";
import LandingOverlay from "../components/LandingOverlay";
import styles from "../modules.css/Home.module.css";

export default function Home() {
  const [showOverlay, setShowOverlay] = useState(true); // default: visible

  return (
    <MainLayout>
      <main className={styles.Home}>
      

      {showOverlay && (
        <div className={styles["landing-overlay"]}>
          <LandingOverlay handleClose={() => setShowOverlay(false)} />
        </div>
      )}
      </main>
      
    </MainLayout>
  );
}