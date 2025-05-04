


import MainNav from "./MainNav"
import styles from "../modules.css/Header.module.css"
import stylesMainLayout from "../modules.css/MainLayout.module.css"
import mainlogo from "../assets/website_logo.png"

export default function Header() {

    
    return (
     
        <div className={stylesMainLayout.Header}>
            <img 
                src={mainlogo}
                alt="my logo combining love fro coding and hiking. It also reference my engineering degree"
            />
            <div className={styles["header-content-container"]}>
                <div className={`${styles.title1} ${styles.title}` }>Todd Williams aka DaGearz</div>
                <div className={`${styles.title2} ${styles.title}` }>Todd Williams</div>
                <div className={`${styles.title3} ${styles.title}` }>Todd Williams</div>
                <div className={`${styles.title4} ${styles.title}` }>Todd Williams</div>
                
                <div className={styles["nav-bar"]}>
                    <MainNav />
                </div>
            </div>
        </div>
    )
}