import NavLinks from "./NavLinks"
import styles from "../Header/header.module.scss"
import Logo from "./Logo"
import kasaLogo from "../../assets/kasa_logo.svg";

const Header = () => {
    return (
        <header className={styles.header}>
            <Logo url={kasaLogo}/>
            <NavLinks/>
        </header>
    )
}

export default Header