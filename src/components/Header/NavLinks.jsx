import styles from "../Header/navlinks.module.scss"

const NavLinks = () => {
  return (
    <nav className={styles.navlinks}>
        <ul>
            <a href=""><li>accueil</li></a>
            <a href=""><li>à propos</li></a>
        </ul>
    </nav>
  )
}

export default NavLinks