import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import floLogo from '../assets/images/logo_blue.png';

const Header = ({
    numTokens,
    isHomepage,
}) => {
    return (
        <nav className="flex flex-row w-full h-6 px-1/10 py-6 justify-between items-center">
            <Link to="/" className="ml-2 w-auto h-auto">
                <img src={floLogo} alt="Flo*" className="w-auto h-auto" />
            </Link>
            <h3 className={`text-base ${isHomepage ? "hidden " : ""}`}>Florence<span className='text-floBlue'>*</span> AI</h3>
            <ul className="flex mx-1 gap-1 my-1">
                <li>
                    <button className="border-none px-4 py-3 hover:background-floAsh hover:text-floBlue">
                        <Link to="/contact">Contact Us</Link>
                    </button>
                </li>
                <li>
                    <button className="token border-[4px] rounded-full px-3 py-2 border-floBlue hover:text-floBlue">
                        <Link to="/signup">{`${numTokens} Tokens`}</Link>
                    </button>
                </li>
            </ul>
        </nav>
    );
};

Header.propTypes = {
    numTokens: PropTypes.number.isRequired,
    isHomepage: PropTypes.bool,
};

export default Header;