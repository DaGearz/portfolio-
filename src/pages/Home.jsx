import MainLayout from "../templates/MainLayout"
import LandingOverlay from "../components/LandingOverlay"
import styles from "../modules.css/Home.module.css"

export default function Home({navVariables}) {
  return (
    <MainLayout navVariables={navVariables}>
      <p>is this even working</p>
      <p>is this even working</p>
      <p>is this even working</p>
      <p>is this even working</p>
      <p>is this even working</p>
      <p>is this even working</p>
        <div className={styles["landing-overlay"]}>
            <LandingOverlay />
        </div>
    </MainLayout>
  )
}


