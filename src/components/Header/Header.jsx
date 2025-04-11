
import MainNav from "./MainNav"
import mainlogo from "../assets/website_logo.png"

export default function Header() {


    return (
        <header>
            <div className="logo"><img src={mainlogo} /></div>
            <MainNav />
        </header>
    )
}