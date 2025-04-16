
import styles from "../modules.css/LandingOverLay.module.css";
import landingImage from "../assets/landing_photo.jpg";


export default function LandingOverlay() {


    return(
        <div className={styles["landing-overlay"]}>
            <img src={landingImage} />
        </div>
    )
}
