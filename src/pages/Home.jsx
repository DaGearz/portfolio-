import Footer from "../components/Footer";
import Header from "../components/Header";
import LandingOverlay from "../components/LandingOverlay";

import styles from "../modules.css/Home.module.css"

export default function Home() {

    return (
        <div className={styles["home-container"]}>
            <div className={`${styles["header-container"]} ${styles.container}`} >
                <Header />
            </div>
            {/*<div className={`${styles["body-container"]} ${styles["container"]}`}>

            </div>
            <div className={`${styles["footer-container"]} ${styles["container"]}`}>
            </div>*/}
            <div className={styles["landing-overlay"]}> <LandingOverlay /></div>
        </div>
    )
}