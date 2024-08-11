import PropTypes from 'prop-types';
import { FaStar, FaRegStar } from 'react-icons/fa';

const Rating = ({ rating, maxRating = 5 }) => {
  // Calcul du nombre d'étoiles pleines et vides
  const fullStars = Math.floor(rating);
  const emptyStars = maxRating - fullStars;

  return (
    <div className="rating">
     {/* Affichage des étoiles pleines */}
         {/* création d'un tableau d'étoiles pleines donc selon ce qui est récup de rent.rating = rating ci dessus */}
         {/* spread operator : copier chq él du tableau dans un new tab */}
      {[...Array(fullStars)].map((_, index) => (
        <FaStar key={index} />
      ))}
      {/* Affichage des étoiles vides */}
      {[...Array(emptyStars)].map((_, index) => (
        <FaRegStar key={index} />
      ))}
    </div>
  );
};

Rating.propTypes = {
  rating: PropTypes.number.isRequired, 
  maxRating: PropTypes.number,
};

export default Rating;
