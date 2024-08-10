import Logo from "../Header/Logo"
import kasa_footerlogo from "../../assets/kasa_logo_footer.svg"
import "../Footer/footer.scss"

const Footer = () => {
    return (
        <footer>
            <Logo url={kasa_footerlogo}/>
            <p>&copy; 2024 Kasa. All rights reserved.</p>
        </footer>
    )
}

export default Footer