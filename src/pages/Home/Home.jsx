import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import LandingOverlay from "../../components/LandingOverlay/LandingOverlay";
import MainLogo from "../../components/MainLogo/MainLogo";
import "./Home.module.css"

export default function Home() {

    return (
        <div className="home-container">
              <Header className="header"/> 
            
            <div className="body-container">
            <MainLogo />
            </div>
            <LandingOverlay />
            <Footer />
        </div>
    )
}