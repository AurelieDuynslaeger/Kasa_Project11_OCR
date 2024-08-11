import { useState } from 'react';
import PropTypes from 'prop-types';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import '../RentCarousel/rentcarousel.scss';

const RentCarousel = ({ images }) => {
    //gère l'image actuellement affichée
    const [currentIndex, setCurrentIndex] = useState(0);

    //réduit l'index d'image, ou passe à la dernière image si l'index est 0
    const goToPrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    //augmente l'index d'image, ou revient à la première image si l'index est la dernière position.
    const goToNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="rent_carousel">
            {images.length > 1 && (
                <>
                    <button className="carousel_btn prev" onClick={goToPrevious}>
                        <FaChevronLeft />
                    </button>
                    <button className="carousel_btn next" onClick={goToNext}>
                        <FaChevronRight />
                    </button>
                </>
            )}
            {images.length > 0 ? (
                <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} />
            ) : (
                <div>No images available</div>
            )}
        </div>
    );
};

RentCarousel.propTypes = {
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default RentCarousel;
