
import Header from "../components/Header"
import Footer from "../components/Footer"
import styles from "../modules.css/MainLayout.module.css"
import stylesHeader from "../modules.css/Header.module.css"
import stylesFooter from "../modules.css/Footer.module.css"


export default function MainLayout({ children, navVariables}) {
  return (
    <div className={styles.Home}>
        <Header navVariables = {navVariables}/>
      
      <div className={`${styles["body-container"]} ${styles.container}`}>
        {children}
      </div>

        <Footer />
      
    </div>
  )
}