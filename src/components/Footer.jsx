import styles from "../modules.css/Footer.module.css";
import { Mail, Instagram, Github, Linkedin } from "lucide-react";

export default function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles["links-container"]}>
                <a></a>
                <a></a>
                <a></a>
                <a></a>
            </div>
            <div>&copy; 2025 Todd Williams (DaGearz)</div>
        </div>
    );
}