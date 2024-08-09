import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import HomeBanner from "../../components/HomeBanner/HomeBanner"
import RentCard from "../../components/RentCard/RentCard"
import logements from "../../constants/logements.json"
import "./home.scss"

const Home = () => {
  return (
    <div className='container'>
        <Header/>
        <HomeBanner/>
        <div className="rent-cards-container">
          {logements.map((rent) => (
            <RentCard
              key={rent.id}
              title={rent.title}
              image={rent.cover}
            />
          ))}
        </div>
        <Footer/>
    </div>
  )
}

export default Home