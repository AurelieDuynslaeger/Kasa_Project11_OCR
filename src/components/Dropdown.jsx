import { useState } from "react"
import PropTypes from "prop-types"
import "../stylesheet/main.scss"
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

const Dropdown = ({ title, content, items }) => {
    //état d'ouverture du dropdown
    const [isOpen, setIsOpen] = useState(false);

    //déclencheur du dropdown
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
      };
    return (
        <div className="dropdown">
            <button onClick={toggleDropdown} className="dropdown_btn">
                {title}
                <span className={isOpen ? "arrowDown" : "arrowUp"}>
                    {isOpen ?  <IoIosArrowDown /> : <IoIosArrowUp />}
                </span>
            </button>
            {isOpen && (
                <div className="dropdown_content">
                {/* conditionnement si c'est juste un paragraphe ou un tableau d'élements */}
                {content && <p>{content}</p>}
                {items && (
                    <ul>
                        {items.map((item, index) => (
                            <li key={index} className="dropdown_item">
                            {item}
                            </li>
                ))}
                    </ul>    
                )}
                </div>
            )}
    </div>
    )
}

Dropdown.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.string),
  };

export default Dropdown