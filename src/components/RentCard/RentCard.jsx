import PropTypes from 'prop-types'
import "../RentCard/rentcard.scss"

const RentCard = ({ title, image, action }) => {

    return (
        <div
        className="rent-card"
        style={{ backgroundImage: `url(${image})` }}
        onClick={action}
      >
            <h2>{title}</h2>
        </div>
    )
}

RentCard.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    action: PropTypes.func.isRequired,
  };

export default RentCard