import { Link } from "react-router-dom"
import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import '../NotFound/notfound.scss'

const NotFound = () => {
  return (
    <div className='container'>
        <Header/>
        <div className="main">
          <div className="notfound_content">
            <h1>404</h1>
            <h2>Oups! La page que vous demandez n&apos;existe pas.</h2>
            <Link to="/">Retourner sur la page d’accueil</Link>
          </div>
        </div>
        <Footer/>
    </div>
  )
}

export default NotFound