import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import floLogo from '../assets/images/logo_blue.png';
import ContactModal from './ContactModal';
// import { useFlutterwave } from 'flutterwave-react-v3';

// const config = {
//     public_key: '//',
//     tx_ref: Date.now(),
//     amount: 100,
//     currency: 'NGN',
//     payment_options: 'card,mobilemoney,ussd',
//     customer: {
//         email: '//email',
//         phone_number: '//phone number',
//         name: '//name',
//     },
//     customizations: {
//         title: 'Top Up Florence* Tokens',
//         description: 'Payment for Florence* Tokens',
//         logo: floLogo,
//     },
// };

const Header = ({
    numTokens,
    isHomePage,
    isConversationPage,
}) => {
    return (
        <nav className="flex flex-row w-full my-2 h-6 px-1/10 py-6 justify-between items-center">
            <Link to="/signup" className="ml-2 w-auto h-auto">
                <img src={floLogo} alt="Flo*" className={`w-auto h-auto ${isHomePage ? "floLogo" : ""} ${isConversationPage ? "hidden" : ""}`} />
            </Link>
            <Link to="/" className='ml-2 w-auto'>
            </Link>
            <ul className="flex mx-1 gap-1 text-sm md:text-base my-1">
                <li>
                    <ContactModal />
                </li>
                <li>
                    <button className="token border-[4px] rounded-full px-3 py-2 border-floBlue hover:text-floBlue">
                        <Link to="/signup">{`${numTokens} Tokens`}</Link>
                        {/* <TokensModal /> */}
                        {/* Flutterwave payment link!!! */}
                    </button>
                </li>
            </ul>
        </nav>
    );
};

Header.propTypes = {
    numTokens: PropTypes.number.isRequired,
    isHomePage: PropTypes.bool.isRequired,
    isConversationPage: PropTypes.bool.isRequired,
};

export default Header;