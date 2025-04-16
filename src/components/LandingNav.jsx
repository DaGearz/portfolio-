
import styles from "../modules.css/LandingNav.module.css";

export default function LandingNav() {

     return(
            <nav className={styles.nav}>
                <ul className={styles["nav-list"]}>
                    <li className={styles.li1}><a href="#">Home</a></li>
                    <li className={styles.li2}><a href="#">About</a></li>
                    <li className={styles.li3}><a href="#">Contact</a></li>
                    <li className={styles.li4}><a href="#">Portfolio</a></li>
                    <li className={styles.li5}><a href="#">Resume</a></li>
                    <li className={styles.li6}><a href="#">Features</a></li>
                    <li className={styles.li7}><select>
                            <option className={styles.o1} value= "default" default>
                                Additional
                            </option>
                            <option className={styles.o2} value= "about">
                             About
                            </option>
                            <option className={styles.o3} value= "features">
                                Features
                            </option>
                            <option className={styles.o4} value= "resume">
                                Resume
                            </option>
                            
                            
    
                        </select>
                    </li>
                </ul> 
            </nav>
        )
    }

