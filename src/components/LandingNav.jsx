
import styles from "../modules.css/LandingNav.module.css";

export default function LandingNav() {

     return(
            <nav className={styles.nav}>
                <ul className={styles["nav-list"]}>
                    <li className={styles.li1}><a href="./home">Home</a></li>
                    <li className={styles.li2}><a href="./about">About</a></li>
                    <li className={styles.li3}><a href="./contact-info">Contact</a></li>
                    <li className={styles.li4}><a href="./portfolio">Portfolio</a></li>
                    
                </ul> 
            </nav>
        )
    }

