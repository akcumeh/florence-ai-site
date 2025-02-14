import PropTypes from 'prop-types';

const Header = ({
    numTokens,
    isHomepage,
}) => {
    return (
        <nav className="flex flex-row w-full px-1/10 py-6">
            <a className="w-4 h-4 justify-left mx-2 my-1" href="/">
                <img src="../assets/icons/logo_blue.png" alt="Flo*" />
            </a>
            <h3 className={`text-base ${isHomepage ? "hidden " : ""}`}>Florence<span className='text-floBlue'>*</span> AI</h3>
            <ul className="justify-right mx-1 gap-1 my-1">
                <li>
                    <button className="border-none px-4 py-3 hover:background-floAsh hover:text-floBlue">
                        <a href="/contact">Contact Us</a>
                    </button>
                </li>
                <li>
                    <button className="b-[2px] px-4 py-3 hover:border-floBlue hover:b-1 hover:text-floBlue">
                        {<a href="/login">Login</a>} | {<a href="/signup">${numTokens} Tokens</a>}
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