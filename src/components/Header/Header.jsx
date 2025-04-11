

import mainlogo from "../../assets/website_logo.png"
import MainNav from "../MainNav/MainNav"
import "./Header.css"

export default function Header({className}) {

    const headerClass = className === "header"
    ? 'header'
    : 'not-header'

    return (
        <header className={headerClass}>">
            
            <div className="main-container">
                <span>Todd Williams | Software Alchemist</span>
                <div className="main-nav">
                    <MainNav />
                </div>
                
            </div>

        </header>
    )
}