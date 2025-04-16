
import styles from "../modules.css/LandingOverLay.module.css";
import landingImage from "../assets/profilepic.jpg";
import LandingNav from "./LandingNav";



export default function LandingOverlay() {


    return(
        <div className={styles["landing-overlay"]}>
            <img src={landingImage} />
            <div className={styles["overlay-main-nav"]}>
                <LandingNav />
            </div>
        </div>
    )
}
