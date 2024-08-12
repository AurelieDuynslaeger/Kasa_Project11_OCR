import { useParams } from 'react-router-dom';
import Dropdown from "../../components/Dropdown/Dropdown"
import Tag from "../../components/Tag/Tag"
import Rating from "../../components/Rating"
import logements from "../../constants/logements.json"
import Header from '../../components/Header/Header';
import RentCarousel from '../../components/RentCarousel/RentCarousel';
import Footer from '../../components/Footer/Footer';
import "../RentDetail/rentdetail.scss"



const RentDetail = () => {
  //récup id dans l'url (rent card cliquée sur Home)
  const { id } = useParams();
  //on recherche dans les logements, le logement en question pour utiliser ses infos sur la page de détail
  const rent = logements.find((item) => item.id === id);

   //si le logement n'existe pas, on peut afficher un message ou rediriger l'utilisateur
   if (!rent) {
    return <div>Logement non trouvé.</div>;
  }

  return (
    <div className="container">
      <Header/>
      <RentCarousel images={rent.pictures} />
      <div className='rent_header'>
        <div className='rent_location'>
          <h1>{rent.title}</h1>
          <h2>{rent.location}</h2>
        </div>
        <div className='rent_tags'>
        {rent.tags.map((tag, index) => (
            <Tag key={index} name={tag} />
          ))}
        </div>
      </div>
      <div className='rent_rating_and_host'>
      {/* parseInt : convertit la chaîne de caractères rent.rating en un nombre entier en utilisant la base décimale (base 10)=> la chaîne est interprétée comme un chiffre entre 0 à 9. */}
      <Rating rating={parseInt(rent.rating, 10)} />
        <div className='host_infos'>
          <p className='host_name'>{rent.host.name}</p>
          <img src={rent.host.picture} alt="host profile picture" className='host_picture'/>
        </div>
      </div>
      <div className='rent_description_equipments'>
        <Dropdown title='Description' content={rent.description}/>
        <Dropdown title='Equipements' items={rent.equipments}/>
      </div>
      <Footer/>
    </div>
  )
}

export default RentDetail