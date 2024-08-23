import { NavLink } from "react-router-dom"
import styles from "../Header/navlinks.module.scss"

const NavLinks = () => {
  return (
    <nav className={styles.navlinks}>
        <ul>
          <li>
            <NavLink 
              to="/"
              className={({ isActive }) => isActive ? styles.active : ""} 
              //prop optionnel pour préciser que ce NavLink doit être considéré comme actif uniquement si la route correspond exactement
              end>
                accueil
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/about"
              className={({ isActive }) => isActive ? styles.active : ""}
              >
                à propos
            </NavLink>
          </li>
        </ul>
    </nav>
  )
}

export default NavLinks