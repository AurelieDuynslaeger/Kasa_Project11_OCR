import KasaLogo from "../assets/kasa_logo.svg"
import NavLinks from "./NavLinks"
import "../stylesheet/header.scss"

const Header = () => {
    return (
        <header>
            <img src={KasaLogo} alt="Kasa Logo" />
            <NavLinks/>
        </header>
    )
}

export default Header