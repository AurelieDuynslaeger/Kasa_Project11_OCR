import Dropdown from "../../components/Dropdown/Dropdown"
import Header from "../../components/Header/Header"
import ImgBanner from "../../components/ImgBanner/ImgBanner"
import Footer from "../../components/Footer/Footer"
import BannerAbout from "../../assets/banner_about.png"

const about_p = [
  {
    title : "Fiabilité", 
    paragraph : "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
  },
  {
    title : "Respect", 
    paragraph : "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
  },
  {
    title : "Service", 
    paragraph : "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
  },
  {
    title : "Sécurité", 
    paragraph : "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
  },
]

const About = () => {
  return (
    <>
     <div className='container'>
      <Header />
      <ImgBanner
        imageUrl={BannerAbout}
        title=""
      />
      <div className="main">
        <div className="about_dropdowns">
          {about_p.map((item, index) => (
            <Dropdown
              key={index}
              title={item.title}
              content={item.paragraph}
            />
          ))}
        </div>
      </div>
    </div>
    <Footer />
    </>
   
  );
}

export default About