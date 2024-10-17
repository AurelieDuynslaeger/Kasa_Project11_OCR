import Header from "../../components/Header/Header"
import ImgBanner from "../../components/ImgBanner/ImgBanner"
import RentCard from "../../components/RentCard/RentCard"
import Footer from "../../components/Footer/Footer"
import logements from "../../constants/logements.json"
import BannerHome from "../../assets/banner_home.png"

import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate= useNavigate();
  const handleClick = (id) => {
    navigate(`/rent/${id}`)
  }
  return (
    <>
   
    <div className='container'>
      <Header/>
      <ImgBanner imageUrl={BannerHome} 
      title="Chez vous, partout et ailleurs"/>
      <div className="main">
        <div className="rents_container">
          {logements.map((rent) => (
            <RentCard
              key={rent.id}
              title={rent.title}
              image={rent.cover}
              action={() => handleClick(rent.id)}
            />
          ))}
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Home