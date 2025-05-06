import { Link } from "react-router-dom";
import styles from "../modules.css/LandingNav.module.css";

export default function LandingNav({ handleClose }) {
  return (
    <nav className={styles.nav}>
      <ul className={styles["nav-list"]}>
        <li className={styles.li1}>
          <Link to="/" onClick={handleClose}>Home</Link>
        </li>
        <li className={styles.li2}>
          <Link to="/about" >About</Link>
        </li>
        <li className={styles.li3}>
          <Link to="/contact-info" >Contact</Link>
        </li>
        <li className={styles.li4}>
          <Link to="/portfolio" >Portfolio</Link>
        </li>
      </ul>
    </nav>
  );
}
