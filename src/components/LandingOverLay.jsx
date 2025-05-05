
import styles from "../modules.css/LandingOverLay.module.css";
import landingImage from "../assets/profilepic.jpg";
import LandingNav from "./LandingNav";
import { useState } from "react";




export default function LandingOverlay({handleClose}) {

    

    function handleClick() {
        handleClose()
      }

    return(
        <div className={styles["landing-overlay"]}>
            <img src={landingImage} />
            <div className={styles["overlay-main-nav"]}>
                <LandingNav />
                <h1>Featured Projects</h1>
                <div className={styles.featuredProjects}>
                    place holder
                </div>
            </div>
            <span className={styles.exit} onClick={() => handleClick()} >X</span>
        </div>
    )
}
