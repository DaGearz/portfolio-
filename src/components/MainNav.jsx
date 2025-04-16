
import styles from "../modules.css/MainNav.module.css";

export default function MainNav() {

    return(
        <nav className={styles.nav}>
            <ul className={styles["nav-list"]}>
                <li className={styles.li1}><a href="#">Home</a></li>
                <li className={styles.li2}><a href="#">About</a></li>
                <li className={styles.li3}><a href="#">Contact</a></li>
                <li className={styles.li4}><a href="#">Portfolio</a></li>
                <li className={styles.li5}><a href="#">Features</a></li>
            </ul> 
        </nav>
    )
}

