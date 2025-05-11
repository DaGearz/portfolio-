import MainNav from "./MainNav";
import styles from "../modules.css/Header.module.css";
import stylesMainLayout from "../modules.css/MainLayout.module.css";
import mainlogo from "../assets/website_logo.png";
import useWindowWidth from "../hooks/useWindowWidth";
import navVariables from "../data/headerData";
import "../index.css"

export default function Header() {
  const width = useWindowWidth();

  return (
    <div className={`bColor1 ${stylesMainLayout.Header} ${stylesMainLayout.container}`}>
      <img
        src={mainlogo}
        alt="my logo combining love for coding and hiking. It also references my engineering degree"
      />
      <div className={styles["header-content-container"]}>
        {/* Conditionally show titles based on screen width */}
        {width > 1060 && (
          <div className={`${styles.title1} ${styles.title}`}>
            Todd Williams aka DaGearz
          </div>
        )}
        {width <= 1060 && width > 860 && (
          <div className={`${styles.title2} ${styles.title}`}>
            Todd Williams
          </div>
        )}
        {width <= 860 && width > 550 && (
          <div className={`${styles.title3} ${styles.title}`}>
            Todd
          </div>
        )}
        {/* No title at all below 550px */}

        <div className={styles["nav-bar"]}>
          <MainNav navVariables={navVariables} />
        </div>
      </div>
    </div>
  );
}
