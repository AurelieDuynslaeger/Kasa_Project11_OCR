import PropTypes from 'prop-types';
import "../ImgBanner/imgbanner.scss"

const ImgBanner = ({ imageUrl, title }) => {
  return (
   <div className="banner_kasa"
   style={{ backgroundImage: `url(${imageUrl})` }}
   >
    {title && <h1>{title}</h1>}
   </div>
  )
}

ImgBanner.propTypes = {
  imageUrl: PropTypes.string,
  title: PropTypes.string,
};

// ImgBanner.defaultProps = {
//   //banner accueil par défaut
//   imageUrl: "", 
//   //pas de titre par défaut
//   title: '', 
// };
export default ImgBanner