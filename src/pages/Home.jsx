import MainLayout from "../templates/MainLayout"
import LandingOverlay from "../components/LandingOverlay"
import styles from "../modules.css/Home.module.css"

export default function Home() {
  return (
    <MainLayout>
        <div className={styles["landing-overlay"]}>
            <LandingOverlay />
        </div>
    </MainLayout>
  )
}


