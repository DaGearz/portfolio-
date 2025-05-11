import styles from "../modules.css/Footer.module.css";
import stylesMainLayout from "../modules.css/MainLayout.module.css";
import { Mail, Instagram, Github, Linkedin } from "lucide-react";

export default function Footer() {
    return (
        <footer className={`${stylesMainLayout.Footer} ${stylesMainLayout.container}`}>
            {/*<img src="./assets/footer-image.png" alt="image to merge footer and body smoothly" />*/}
            <div className= {styles.info}>&copy; 2025 Todd Williams (DaGearz)</div>
            <div className={styles["links-container"]}>
                <a href="mailto:twill003@gmail.com" target="_blank" rel="noopener noreferrer">
                    <Mail size={24} />
                </a>
                <a href="https://www.instagram.com/toddiewoddie/" target="_blank" rel="noopener noreferrer">
                    <Instagram size={24} /></a>
                <a href="https://github.com/DaGearz" target="_blank" rel="noopener noreferrer">
                    <Github size={24} />
                </a>
                <a href="www.linkedin.com/in/toddbwilliams" target="_blank" rel="noopener noreferrer">
                    <Linkedin size={24} />
                </a>
            </div>
            
        </footer>
    );
}