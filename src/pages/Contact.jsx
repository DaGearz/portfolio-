import MainLayout from "../templates/MainLayout";
import styles from "../modules.css/Contact.module.css";
import { Mail, MapPin, Phone, Linkedin, Github, Globe } from "lucide-react";


const Contact = () => {
  return (
    <MainLayout >
      <main className={`bColor2 ${styles.Contact}`}>
        <div className={styles.contactContainer}>
        <h2>📬 Contact Me</h2>
        <p className={styles.description}>
            I’m always open to new opportunities, collaborations, or just connecting with like-minded developers and creatives.
            Reach out through any of the platforms below — let’s build something great together.
        </p>

        <ul className={styles.contactList}>
            <li>
            <Mail size={20} /> <a href="mailto:twill003@gmail.com">twill003@gmail.com</a>
            </li>
            <li>
            <Phone size={20} /> ‪(619) 365-5267‬
            </li>
            <li>
            <MapPin size={20} /> San Diego, CA
            </li>
            <li>
            <Linkedin size={20} /> <a href="https://www.linkedin.com/in/toddbwilliams" target="_blank" rel="noreferrer">LinkedIn Profile</a>
            </li>
            <li>
            <Github size={20} /> <a href="https://github.com/DaGearz" target="_blank" rel="noreferrer">GitHub Profile</a>
            </li>
            <li>
            <Globe size={20} /> <a href="https://www.toddwilliams.dev" target="_blank" rel="noreferrer">toddwilliams.dev</a>
            </li>
        </ul>
        </div>
      </main>
    </MainLayout>
  );
}

export default Contact
