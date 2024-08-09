import PropTypes from 'prop-types'
import "../RentCard/rentcard.scss"

const RentCard = ({ title, image }) => {
    return (
        <div
        className="rent-card"
        style={{ backgroundImage: `url(${image})` }}
      >
            <h2>{title}</h2>
        </div>
    )
}

RentCard.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  };

export default RentCard