import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import ImgBanner from "../../components/ImgBanner/ImgBanner"
import "./about.scss"

const About = () => {
  return (
    <div className='container'>
        <Header/>
        <ImgBanner 
        imageUrl="../src/assets/banner_about.png" 
        title=""/>
        <div className="main">
          
        </div>
        <Footer/>
    </div>
  )
}

export default About