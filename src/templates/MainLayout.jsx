
import Header from "../components/Header"
import Footer from "../components/Footer"
import styles from "../modules.css/MainLayout.module.css"

export default function MainLayout({ children }) {
  return (
    <div className={styles["home-container"]}>
      <div className={`${styles["header-container"]} ${styles.container}`}>
        <Header />
      </div>

      <div className={`${styles["body-container"]} ${styles.container}`}>
        {children}
      </div>

      <div className={`${styles["footer-container"]} ${styles.container}`}>
        <Footer />
      </div>
    </div>
  )
}